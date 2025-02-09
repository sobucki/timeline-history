import { useState } from "react";
import WikiSearchBar from "./components/wiki-search-bar";
import { Container, FilterContainer } from "./styles";
import VisTimeline from "./components/vis-timeline";
import { DataItem } from "vis-timeline";

function App() {
  const [termList, setTermList] = useState<string[]>([]);
  const [items, setItems] = useState<DataItem[]>([]);

  const addTerm = (term: string) => {
    setTermList([...termList, term]);
  };

  const generateRandomItem = (): DataItem => {
    const id = Date.now() + Math.floor(Math.random() * 1000);
    const group = Math.floor(Math.random() * 2);
    const startYear = 1800;
    const startMonth = Math.floor(Math.random() * 12);
    const startDay = 1 + Math.floor(Math.random() * 28);
    const start = new Date(startYear, startMonth, startDay);
    const incrementYears = 1 + Math.floor(Math.random() * 10);
    const end = new Date(start);
    end.setFullYear(start.getFullYear() + incrementYears);

    return {
      id,
      group,
      start,
      end,
      content: `Order ${id}`,
    };
  };

  const addRandomItem = () => {
    const newItem = generateRandomItem();
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <Container>
      <FilterContainer>
        <h1>Digite algum termo</h1>
        <WikiSearchBar onSearch={(term) => addTerm(term)} />
        <button onClick={addRandomItem}>Adicionar Item Randômico</button>
      </FilterContainer>
      <VisTimeline items={items} />
    </Container>
  );
}

export default App;
