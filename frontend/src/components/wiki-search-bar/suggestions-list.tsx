import { ListContainer, ListItem } from "./style";
import { SearchItem, SuggestionListProps } from "./types";

function SuggestionList({ onSelect, suggestions }: SuggestionListProps) {
  if (!suggestions || suggestions.length === 0) {
    return null;
  }

  const handleSelect = (item: SearchItem) => {
    if (onSelect) {
      onSelect(item);
    }
  };

  return (
    <ListContainer>
      {suggestions.map((item, index) => (
        <ListItem key={index} onClick={() => handleSelect(item)}>
          {item.title}
        </ListItem>
      ))}
    </ListContainer>
  );
}

export default SuggestionList;
