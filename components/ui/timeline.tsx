import React, { useEffect, useRef, useState } from "react";
import { useScroll, motion, useInView, useTransform } from "framer-motion";
import { formatDateToString } from "@/utils/date";
import { Locale } from "@/data/content/site-content";
import { cn } from "@/utils/cn";

interface TimelineEntry {
  period: { start: Date; end: Date | null };
  role: string;
  content: React.ReactNode;
}

const TimelineItem = ({
  item,
  index,
  locale,
  containerRef,
}: {
  item: TimelineEntry;
  index: number;
  locale: Locale;
  containerRef: React.RefObject<HTMLDivElement>;
}) => {
  const itemRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(itemRef, {
    amount: 0.7,
    root: containerRef,
  });

  const periodToString = (period: { start: Date; end: Date | null }) => {
    const startString = formatDateToString(period.start, locale === "en" ? "en-US" : "ar-SA");
    const endString = period.end ? formatDateToString(period.end, locale === "en" ? "en-US" : "ar-SA") : locale === "en" ? "Present" : "الوقت الحاضر";
    return `${startString} - ${endString}`;
  };

  const fadeInVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.15, // Stagger the animations
      },
    },
  };

  return (
    <motion.div
      ref={itemRef}
      className="group relative pb-10 snap-center snap-always"
      initial={{ opacity: 0.3 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0.3 }}
      // variants={fadeInVariants}
    >
      <div className="flex items-start gap-8">
        {/* Breakpoint Column */}
        <div className="relative flex-shrink-0 w-5">
          <div className="sticky top-40 z-40">
            <div className="h-10 w-10 absolute rounded-full bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] flex items-center justify-center" />
            <div className="h-10 w-10 absolute rounded-full bg-slate-700 dark:bg-white/50 flex items-center justify-center">
              <div className="w-9 h-9 overflow-hidden rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-3 w-3 absolute rounded-full bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[100%] flex items-center justify-center" />
              </div>
            </div>
          </div>
        </div>

        {/* Content Column */}
        <div className="flex-grow space-y-4">
          <div className="space-y-1">
            <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">{periodToString(item.period)}</p>
            <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">{item.role}</h3>
          </div>
          {item.content}
        </div>
      </div>
    </motion.div>
  );
};

export const Timeline = ({ data, locale }: { data: TimelineEntry[]; locale: Locale }) => {
  const listRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollbarMetrics, setScrollbarMetrics] = useState({
    trackHeight: 0,
    trackTop: 0,
    thumbHeight: 0,
    thumbTop: 0,
  });

  // Update scrollbar metrics on scroll and resize
  useEffect(() => {
    if (!containerRef.current || !listRef.current) return;

    const container = containerRef.current;
    const updateScrollbarMetrics = () => {
      const containerRect = container.getBoundingClientRect();
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;
      const scrollTop = container.scrollTop;

      // Calculate visible content ratio
      const visibleRatio = clientHeight / scrollHeight;

      // Calculate thumb height (minimum 20px)
      const thumbHeight = Math.max(clientHeight * visibleRatio, 20);

      // Calculate thumb position
      const scrollRatio = scrollTop / (scrollHeight - clientHeight);
      const thumbTrackHeight = clientHeight - thumbHeight;
      const thumbTop = scrollRatio * thumbTrackHeight;

      setScrollbarMetrics({
        trackHeight: clientHeight,
        trackTop: 0,
        thumbHeight,
        thumbTop,
      });
    };

    // Initial update
    updateScrollbarMetrics();

    // Update on scroll
    container.addEventListener("scroll", updateScrollbarMetrics);
    // Update on resize
    window.addEventListener("resize", updateScrollbarMetrics);

    return () => {
      container.removeEventListener("scroll", updateScrollbarMetrics);
      window.removeEventListener("resize", updateScrollbarMetrics);
    };
  }, []);

  return (
    <div className={cn("relative w-full font-sans pr-4 ", locale === "ar" && "rtl")}>
      <div
        ref={containerRef}
        className="relative max-w-3xl mx-auto h-[600px] overflow-y-auto scrollbar-none overscroll-y-auto  snap-y snap-mandatory"
      >
        <div ref={listRef} className="relative pb-10">
          {data.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} locale={locale} containerRef={containerRef} />
          ))}
        </div>
      </div>
      {/* Custom Scrollbar Track */}
      <div
        className="absolute left-5 w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral to-transparent to-[99%]"
        style={{
          top: scrollbarMetrics.trackTop,
          height: scrollbarMetrics.trackHeight,
        }}
      >
        {/* Custom Scrollbar Thumb */}
        <motion.div
          className="absolute w-full bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
          style={{
            top: scrollbarMetrics.thumbTop,
            height: scrollbarMetrics.thumbHeight,
          }}
        />
      </div>
    </div>
  );
};