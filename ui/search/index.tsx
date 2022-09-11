import SearchIcon from "lib/icons/SearchIcon";
import React from "react";
import { SearchBarProps } from "ui/types/search";
import css from "../css/search.module.scss";

const SearchBar = React.forwardRef(
  (props: SearchBarProps, ref: React.Ref<HTMLInputElement>) => {
    const { placeholder, ...rest } = props;

    return (
      <div className={css.container}>
        <form className={css.search} {...rest}>
          <i>
            <SearchIcon size={15} />
          </i>
          <input ref={ref} type="search" placeholder={placeholder} />
        </form>
      </div>
    );
  }
);

SearchBar.displayName = "SearchBar";
export default SearchBar;
