/* eslint-disable @next/next/no-img-element */
import React from "react";
import ImageBox from "./item";
import SearchBar from "ui/search";
import IconButton from "ui/button/icon";
import useSearchImages from "./usesearch";
import css from "styles/images.module.scss";
import unsplashApi from "store/api/unsplash";
import { UnsplashImageType } from "typings/api";
// import useBackground from "store/hooks/usebackground";
import Skeleton from "ui/skeleton";
import ArrowDownCircleOutline from "lib/icons/ArrowDownCircleOutline";
import useCode from "store/hooks/use-code";

const UnsplashImages = () => {
  const [count, setcount] = React.useState(1);
  const [searchQuery, updateQuery] = React.useState("wallpapers");
  const {
    codeState: { canvas },
    updateCanvas,
  } = useCode();
  const { useGetUnsplashQuery } = unsplashApi;
  const { data, isLoading, isFetching, isError } = useGetUnsplashQuery({
    count: 30,
    page: count,
    // per_page: 30,
    query: searchQuery,
  });

  const { onSubmit, searchRef } = useSearchImages((value) =>
    updateQuery(value)
  );
  return (
    <React.Fragment>
      <div className={css.container}>
        <SearchBar
          ref={searchRef}
          onSubmit={onSubmit}
          placeholder="Search images..."
        />
        <div className={css.imageContainer}>
          <div className={css.imageBox}>
            {/* API Images  */}
            {isError ? (
              <Loader />
            ) : isFetching || isLoading ? (
              <Loader />
            ) : (
              data.map((d: UnsplashImageType, i: React.Key) => {
                return (
                  <div key={i} className={css.image}>
                    <ImageBox
                      viewtype="image"
                      source={d?.urls?.regular}
                      isactive={d?.urls?.regular === canvas.source}
                      onClick={() => updateCanvas("source", d?.urls?.regular)}
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
        <div className={css.showmore}>
          <IconButton direction="column" onClick={() => setcount((i) => i + 1)}>
            <ArrowDownCircleOutline size={20} />
            <span> Show More </span>
          </IconButton>
        </div>
      </div>
    </React.Fragment>
  );
};
export default UnsplashImages;

const Loader = () => {
  return (
    <React.Fragment>
      {
        // @ts-ignore
        [...Array(5).keys()].map((_, i) => (
          <Skeleton
            key={i}
            style={{
              height: "150px",
              borderRadius: "6px",
            }}
          />
        ))
      }
    </React.Fragment>
  );
};
