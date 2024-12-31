"use client";

import { useLocale } from "@/app/locale-provider";
import { Navbar } from "../components/sections/navbar";

interface RootWrapperProps {
  children: React.ReactNode;
}

export function RootWrapper({ children }: RootWrapperProps) {
  const { locale, setLocale } = useLocale();

  return (
    <>
      <Navbar locale={locale} onLocaleChange={setLocale} />
      <main className={locale === "ar" ? "rtl" : "ltr"}>{children}</main>
    </>
  );
}
