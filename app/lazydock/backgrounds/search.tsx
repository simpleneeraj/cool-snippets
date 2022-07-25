import React from "react";
import SearchIcon from "lib/icons/SearchIcon";

interface FormProps {
  style: {
    button: React.CSSProperties;
    input: React.CSSProperties;
  };
  onSubmit: (e: any) => void;
  onFocus: () => void;
  inputref: React.RefObject<HTMLInputElement>;
}
const SearchForm = ({ onFocus, onSubmit, style, inputref }: FormProps) => {
  return (
    <form onSubmit={onSubmit} onFocus={onFocus} style={style.button}>
      <button aria-label="search">
        <i>
          <SearchIcon size={20} />
        </i>
        <input
          ref={inputref}
          type="search"
          placeholder="Search Images..."
          style={style.input}
        />
      </button>
    </form>
  );
};
export default SearchForm;
