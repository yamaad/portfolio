#!/bin/bash

# Configuration
KEYS_BACKUP_DIR="../git-keys"
CLOUD_BACKUP_DIR="$HOME/Documents/git-keys"
PROJECT_NAME=$(basename "$PWD")
KEY_NAME="${PROJECT_NAME}-git-crypt.key"

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print formatted messages
print_message() {
    local type=$1
    local message=$2
    case $type in 
        "info") echo -e "${YELLOW}[INFO]${NC} $message" ;;
        "success") echo -e "${GREEN}[SUCCESS]${NC} $message" ;;
        "error") echo -e "${RED}[ERROR]${NC} $message" ;;
    esac
}

# Function to check if command exists
check_command() {
    if ! command -v $1 &> /dev/null; then
        print_message "error" "$1 is not installed. Please install it first."
        exit 1
    fi
}

# Function to create directory if it doesn't exist
create_dir_if_not_exists() {
    local dir=$1
    if [ ! -d "$dir" ]; then
        mkdir -p "$dir"
        print_message "info" "Created directory: $dir"
    fi
}

# Function to backup key to a location
backup_key() {
    local source=$1
    local dest_dir=$2
    local dest_file="$dest_dir/$KEY_NAME"
    
    create_dir_if_not_exists "$dest_dir"
    
    if [ -f "$source" ]; then
        cp "$source" "$dest_file"
        print_message "success" "Key backed up to: $dest_file"
    else
        print_message "error" "Source key not found: $source"
        return 1
    fi
}

# Main setup function
setup_git_crypt() {
    # Check for required commands
    check_command "git"
    check_command "git-crypt"
    
    # Create docs directory if it doesn't exist
    create_dir_if_not_exists "docs"
    
    # Initialize git-crypt if not already initialized
    if [ ! -d ".git-crypt" ]; then
        print_message "info" "Initializing git-crypt..."
        git-crypt init
        print_message "success" "git-crypt initialized"
    else
        print_message "info" "git-crypt already initialized"
    fi
    
    # Create or update .gitattributes
    cat > .gitattributes << EOL
docs/future-improvement.md filter=git-crypt diff=git-crypt
docs/project-plan.md filter=git-crypt diff=git-crypt
project-tree.txt filter=git-crypt diff=git-crypt
.git-crypt-key filter=git-crypt diff=git-crypt
EOL
    print_message "success" "Created/Updated .gitattributes"
    
    # Update .gitignore
    if ! grep -q ".git-crypt-key" .gitignore 2>/dev/null; then
        echo ".git-crypt-key" >> .gitignore
        print_message "success" "Added .git-crypt-key to .gitignore"
    fi
    
    # Generate key if it doesn't exist
    if [ ! -f ".git-crypt-key" ]; then
        print_message "info" "Generating new key..."
        git-crypt export-key ".git-crypt-key"
        print_message "success" "Generated new key"
    fi
    
    # Backup keys to all locations
    backup_key ".git-crypt-key" "$KEYS_BACKUP_DIR"
    backup_key ".git-crypt-key" "$CLOUD_BACKUP_DIR"
    
    print_message "info" "Setup complete! Key locations:"
    echo "1. Project root: ./.git-crypt-key"
    echo "2. Cloud backup: $CLOUD_BACKUP_DIR/$KEY_NAME"
    echo "3. Local backup: $KEYS_BACKUP_DIR/$KEY_NAME"
}

# Function to unlock repository on a new machine
unlock_repository() {
    local key_locations=(
        "./.git-crypt-key"
        "$CLOUD_BACKUP_DIR/$KEY_NAME"
        "$KEYS_BACKUP_DIR/$KEY_NAME"
    )
    
    for key_path in "${key_locations[@]}"; do
        if [ -f "$key_path" ]; then
            print_message "info" "Found key at: $key_path"
            print_message "info" "Attempting to unlock repository..."
            if git-crypt unlock "$key_path"; then
                print_message "success" "Repository unlocked successfully!"
                return 0
            fi
        fi
    done
    
    print_message "error" "No valid key found in any location. Please ensure you have copied the key file to one of these locations:"
    printf '%s\n' "${key_locations[@]}"
    return 1
}

# Main script execution
case "$1" in
    "setup")
        setup_git_crypt
        ;;
    "unlock")
        unlock_repository
        ;;
    *)
        echo "Usage: $0 {setup|unlock}"
        echo "  setup  - Initialize git-crypt and set up key backups"
        echo "  unlock - Unlock repository on a new machine"
        exit 1
        ;;
esac