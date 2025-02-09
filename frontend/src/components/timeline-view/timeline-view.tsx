import { useEffect, useRef } from "react";
import {
  DataSet,
  Timeline,
  TimelineItem,
  TimelineOptions,
} from "vis-timeline/standalone";
import "vis-timeline/styles/vis-timeline-graph2d.css";

interface TimelineViewProps {
  items: TimelineItem[];
  options?: TimelineOptions;
}

function TimelineView({ items, options }: TimelineViewProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<Timeline | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const dataSet = new DataSet<TimelineItem>(items);

    if (timelineRef.current) {
      timelineRef.current.destroy();
    }

    timelineRef.current = new Timeline(
      containerRef.current,
      dataSet,
      options || {}
    );

    return () => {
      if (timelineRef.current) {
        timelineRef.current.destroy();
        timelineRef.current = null;
      }
    };
  }, [items, options]);

  return <div ref={containerRef} />;
}

export default TimelineView;
