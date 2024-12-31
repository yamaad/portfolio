import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/theme-provider";
import { Metadata } from "next";
import { LocaleProvider } from "./locale-provider";

const inter = Inter({ subsets: ["latin"] });

// Metadata configuration
export const metadata: Metadata = {
  title: "Maad Yasser | Full Stack Developer",
  description: "Full Stack Developer specializing in modern web technologies and digital experiences",
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }, { url: "/favicon.ico" }],
    shortcut: "/logo.svg",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <LocaleProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
