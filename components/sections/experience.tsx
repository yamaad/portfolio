import React from "react";
import { Timeline } from "@/components/ui/timeline";
interface timelineProps {
  locale: "en" | "ar";
}
export function TimelineSection({ locale = "en" }: timelineProps) {
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
