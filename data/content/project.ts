interface Project {
  title: string;
  description: string;
  features: string[];
  stack: string[];
  links?: {
    blog?: string;
    github?: string;
    product?: string;
  };
  media?: {
    images?: string[];
    video?: string;
    thumbnail?: string;
  };
}
