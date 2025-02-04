import { useEffect, useState } from "react";
import { SearchItem } from "../../types";
import useDebounce from "../../../commons/hooks/use-debounce/use-debounce";
import SearchTerm from "../../service/search-term";

function useSearch(initialTerm = "", debounceDelay = 500) {
  const [term, setTerm] = useState(initialTerm);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<SearchItem[]>([]);

  const debouncedTerm = useDebounce(term, debounceDelay);

  useEffect(() => {
    if (debouncedTerm.trim()) {
      setLoading(true);
      SearchTerm(debouncedTerm)
        .then((data) => {
          setResults(data);
        })
        .catch((error) => {
          console.error(error);
          setResults([]);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setResults([]);
    }
  }, [debouncedTerm]);

  return {
    term,
    loading,
    results,
    setTerm,
  };
}

export default useSearch;
