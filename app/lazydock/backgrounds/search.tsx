import React from "react";
import SearchIcon from "lib/icons/SearchIcon";

interface FormProps {
  style: {
    form: React.CSSProperties;
    input: React.CSSProperties;
  };
  onSubmit: (e: any) => void;
  onFocus: () => void;
  inputref: React.RefObject<HTMLInputElement>;
}
const SearchForm = ({ onFocus, onSubmit, style, inputref }: FormProps) => {
  return <form onSubmit={onSubmit} onFocus={onFocus} style={style.form}></form>;
};
export default SearchForm;
