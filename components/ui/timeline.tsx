import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, useTransform, motion } from "framer-motion";
import { LinkPreview } from "./link-preview";
import Image from "next/image";
import { formatDateToString } from "@/utils/date";
import { Locale } from "@/data/content";
import { cn } from "@/utils/cn";

interface TimelineEntry {
  period: { start: Date; end: Date | null };
  role: string;
  companyUrl: string;
  content: React.ReactNode;
}

export const Timeline = ({ data, locale }: { data: TimelineEntry[]; locale: Locale }) => {
  const periodToString = (period: { start: Date; end: Date | null }) => {
    const startString = formatDateToString(period.start, locale === "en" ? "en-US" : "ar-SA");
    const endString = period.end ? formatDateToString(period.end, locale === "en" ? "en-US" : "ar-SA") : locale === "en" ? "Present" : "الوقت الحاضر";
    return `${startString} - ${endString}`;
  };

  const totalTime = 2; // TODO: calculate the duration
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className={cn("w-full bg-white dark:bg-neutral-950 font-sans px-4 md:px-10", locale === "ar" && "rtl")} ref={containerRef}>
      <div className="max-w-7xl mx-auto py-16">
        <h2 className="text-4xl font-bold mb-4 text-black dark:text-white max-w-4xl">
          {locale === "en" ? "Changelog from my journey" : "مسيرتي المهنية"}
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-base max-w-sm">
          {locale === "en"
            ? `I've been working in digital solutions for the past ${totalTime} years. Here's a timeline of my professional journey.`
            : `لقد عملت في مجال الحلول الرقمية لمدة ${totalTime} سنوات. إليكم الجدول الزمني لرحلتي المهنية.`}
        </p>
      </div>

      <div ref={ref} className="relative max-w-3xl mx-auto pb-16">
        {data.map((item, index) => (
          <div key={index} className="group relative pb-16">
            <div className="flex items-start gap-8">
              {/* Logo Column */}
              <div className="relative flex-shrink-0 w-5">
                <div className="sticky top-40 z-40">
                  <motion.div
                    style={
                      {
                        // TODO Create clip path that reveals as when the {*Animated timeline line*} intersect with this element y-axis
                      }
                    }
                    className="h-10 w-10 absolute rounded-full bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] flex items-center justify-center"
                  />
                  <div className="h-10 w-10 absolute rounded-full bg-slate-700 dark:bg-white/50 flex items-center justify-center">
                    <div className="w-9 h-9 overflow-hidden rounded-full bg-white dark:bg-black flex items-center justify-center">
                      <motion.div
                        style={
                          {
                            // TODO Create clip path that reveals as when the {*Animated timeline line*} intersect with this element y-axis
                          }
                        }
                        className="h-2 w-2 absolute rounded-full bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] flex items-center justify-center"
                      />
                      <div className="h-4 w-4 absolute rounded-full bg-slate-700 dark:bg-white/50 flex items-center justify-center" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="flex-grow space-y-4">
                <LinkPreview url={item.companyUrl}>
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">{periodToString(item.period)}</p>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">{item.role}</h3>
                  </div>
                </LinkPreview>

                <div className="min-h-48 prose prose-neutral dark:prose-invert max-w-none">{item.content}</div>
              </div>
            </div>
          </div>
        ))}

        {/* Animated timeline line */}
        <div
          style={{ height: height + "px" }}
          className="absolute left-5 -top-24 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
