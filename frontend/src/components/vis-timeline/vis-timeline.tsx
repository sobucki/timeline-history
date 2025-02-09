import "vis-timeline/styles/vis-timeline-graph2d.min.css";
import { useEffect, useRef } from "react";
import { VisTimelineProps } from "./types";
import { Timeline, DataItem, TimelineOptions } from "vis-timeline";
import { DataSet } from "vis-data";

function VisTimeline({ items }: VisTimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemsDataSetRef = useRef<DataSet<DataItem> | null>(null);
  const timelineInstanceRef = useRef<Timeline | null>(null);

  useEffect(() => {
    itemsDataSetRef.current = new DataSet<DataItem>(items);

    const options: TimelineOptions = {
      orientation: "top",
      height: "100vh",
      start: new Date(1950, 0, 1),
      end: new Date(2050, 0, 1),
      editable: true,
      tooltip: {
        followMouse: true,
      },
    };

    if (timelineRef.current && itemsDataSetRef.current) {
      timelineInstanceRef.current = new Timeline(
        timelineRef.current,
        itemsDataSetRef.current,
        options
      );
    }

    return () => {
      if (timelineInstanceRef.current) {
        timelineInstanceRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (itemsDataSetRef.current) {
      const currentItems = itemsDataSetRef.current.get();
      const existingIds = new Set(
        currentItems.map((item: DataItem) => item.id)
      );
      const newItems = items.filter((item) => !existingIds.has(item.id));
      if (newItems.length > 0) {
        itemsDataSetRef.current.add(newItems);

        if (timelineInstanceRef.current) {
          timelineInstanceRef.current.fit();
        }
      }
    }
  }, [items]);

  return <div ref={timelineRef} style={{ width: "100%", height: "100%" }} />;
}

export default VisTimeline;
