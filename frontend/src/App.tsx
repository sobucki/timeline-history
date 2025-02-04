import WikiSearchBar from "./components/wiki-search-bar";
import { Container } from "./styles";

function App() {
  return (
    <Container>
      <h1>Digite algum termo</h1>
      <WikiSearchBar />
    </Container>
  );
}

export default App;
