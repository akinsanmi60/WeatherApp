export type InputSearchboxProp = {
  onSetTermChange: React.Dispatch<React.SetStateAction<string>>;
  term: string;
  search: (evt: { key: string }) => void;
};
