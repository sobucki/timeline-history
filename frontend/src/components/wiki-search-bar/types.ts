export type SuggestionListProps = {
  suggestions: SearchItem[];
  onSelect: (item: SearchItem) => void;
};

export type SearchItem = {
  title: string;
  pageid: number;
};
