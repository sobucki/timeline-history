import { useState } from "react";
import WikiSearchBar from "./components/wiki-search-bar";
import { Container } from "./styles";
import TimelineView from "./components/timeline-view";
import { TimelineItem } from "vis-timeline";

function App() {
  const [termList, setTermList] = useState<string[]>([]);

  const addTerm = (term: string) => {
    setTermList([...termList, term]);
  };

  const [timelineItems, setTimelineItems] = useState<TimelineItem[]>([
    {
      id: 1,
      content: "Item 1",
      start: "1879-03-14",
      end: "1955-04-18",
    },
  ]);
  return (
    <Container>
      <h1>Digite algum termo</h1>
      <WikiSearchBar onSearch={(term) => addTerm(term)} />
      <TimelineView
        items={timelineItems}
        options={{
          width: "500px",
          height: "calc(100vh - 200px)",
          showCurrentTime: true,
          stack: true,
          zoomable: true,
          zoomFriction: 7,
          groupHeightMode: "fixed",
          horizontalScroll: true,
          zoomMin: 1000 * 60 * 60 * 24,
          format: {
            minorLabels: {
              millisecond: "SSS",
              second: "s",
              minute: "HH:mm",
              hour: "HH:mm",
              weekday: "ddd D",
              day: "D",
              month: "MMM",
              year: "YYYY",
            },
            majorLabels: {
              millisecond: "HH:mm:ss",
              second: "D MMM HH:mm",
              minute: "ddd D MMM YYYY",
              hour: "ddd D MMM YYYY",
              weekday: "MMM YYYY",
              day: "MMM YYYY",
              month: "YYYY",
              year: "",
            },
          },

          autoResize: false,
        }}
      />
    </Container>
  );
}

export default App;
