// ./utils/content.ts
import { Locale, LocalizedContent } from "@/types/content";

export function getLocalizedContent<T>(content: LocalizedContent<T>, locale: Locale): T {
  return content[locale];
}

export function validateContentSync<T extends object>(content: LocalizedContent<T>): boolean {
  const enKeys = Object.keys(content.en);
  const arKeys = Object.keys(content.ar);

  // Check if both languages have the same keys
  return enKeys.length === arKeys.length && enKeys.every(key => arKeys.includes(key));
}

export async function validateContent<T extends object>(
  content: LocalizedContent<T>
): Promise<{
  isValid: boolean;
  missingTranslations: string[];
}> {
  const enEntries = Object.entries(content.en);
  const missingTranslations: string[] = [];

  enEntries.forEach(([key, value]) => {
    if (!(key in content.ar)) {
      missingTranslations.push(`Missing Arabic translation for: ${key}`);
    }
  });

  return {
    isValid: missingTranslations.length === 0,
    missingTranslations,
  };
}
