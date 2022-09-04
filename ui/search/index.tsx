import SearchIcon from "lib/icons/SearchIcon";
import React from "react";
import { SearchBarProps } from "ui/types/search";
import css from "../css/search.module.scss";

const SearchBar = React.forwardRef(
  (props: SearchBarProps, ref: React.Ref<HTMLFormElement>) => {
    const { ...rest } = props;

    return (
      <div className={css.container}>
        <form className={css.search} ref={ref} {...rest}>
          <i>
            <SearchIcon size={15} />
          </i>
          <input type="search" />
        </form>
      </div>
    );
  }
);

SearchBar.displayName = "SearchBar";
export default SearchBar;
