"use client";

import React from "react";
import { cn } from "@/utils/cn";

export const Button = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    borderRadius?: string;
    children: React.ReactNode;
    className?: string;
  }
>(({ className, children, borderRadius, ...props }, ref) => {
  return (
    <a
      ref={ref}
      className={cn(
        "group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium transition-all duration-200 ease-out hover:text-opacity-80",
        className
      )}
      style={{ borderRadius: borderRadius }}
      {...props}
    >
      <span className="absolute inset-0 h-full w-full transform-gpu transition-all duration-500 ease-out group-hover:scale-105" />
      <span className="absolute inset-0 h-full w-full transform-gpu transition-all duration-500 ease-out">
        <span className="absolute inset-0 h-full w-full transform-gpu rounded-full blur-lg transition-all duration-500 ease-out group-hover:blur-xl" />
      </span>
      <span className="relative">{children}</span>
    </a>
  );
});

Button.displayName = "Button";
