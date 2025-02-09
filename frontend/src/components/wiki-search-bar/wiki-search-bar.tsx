import useSearch from "./hooks/use-search";
import { Container, Input } from "./style";
import SuggestionList from "./suggestions-list";
import { WikiSearchBarProps } from "./types";

function WikiSearchBar({ onSearch }: WikiSearchBarProps) {
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
        <SuggestionList
          suggestions={results}
          onSelect={(item) => onSearch(item.title)}
        />
      )}
    </Container>
  );
}

export default WikiSearchBar;
