import useSearch from "./hooks/use-search";
import { Container, Input } from "./style";
import SuggestionList from "./suggestions-list";

function WikiSearchBar() {
  const { loading, results, setTerm, term } = useSearch("", 500);
  return (
    <Container>
      <Input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      {loading && <span>Carregando...</span>}

      {!loading && (
        <SuggestionList suggestions={results} onSelect={() => null} />
      )}
    </Container>
  );
}

export default WikiSearchBar;
