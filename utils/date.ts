// ./utils/date.ts

const translations = {
  en: {
    present: "Present",
    months: {
      short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
  },
  ar: {
    present: "الوقت الحالي",
    months: {
      short: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
    },
  },
};

/**
 * Format a date to a string keeping English system but with translated months
 * @param date The date to format
 * @param locale The locale identifier ('en-US' or 'ar-SA')
 * @returns Formatted date string
 */
export function formatDateToString(date: Date, locale: string = "en-US"): string {
  const isArabic = locale === "ar-SA";
  const lang = isArabic ? "ar" : "en";
  const month = translations[lang].months.short[date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${year}`;
}

/**
 * Format a date range to a string
 * @param start Start date
 * @param end End date or null for present
 * @param locale The locale to use for formatting
 * @returns Formatted date range string
 */
export function formatDateRange(start: Date, end: Date | null, locale: string = "en-US"): string {
  const startStr = formatDateToString(start, locale);
  const isArabic = locale === "ar-SA";
  const presentText = translations[isArabic ? "ar" : "en"].present;
  const endStr = end ? formatDateToString(end, locale) : presentText;

  // Always keep left-to-right date system
  return `${startStr} - ${endStr}`;
}

/**
 * Format a relative time (e.g., "2 years ago")
 * @param date The date to format
 * @param locale The locale to use for formatting
 * @returns Formatted relative time string
 */
export function formatRelativeTime(date: Date, locale: string = "en-US"): string {
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  const now = new Date();
  const diffInMonths = (now.getFullYear() - date.getFullYear()) * 12 + now.getMonth() - date.getMonth();

  if (diffInMonths < 1) return rtf.format(0, "months");
  if (diffInMonths < 12) return rtf.format(-diffInMonths, "months");

  const years = Math.floor(diffInMonths / 12);
  return rtf.format(-years, "years");
}
