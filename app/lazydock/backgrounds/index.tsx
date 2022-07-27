import React from "react";
import Item from "./item";
import FilePicker from "./picker";
import ListView from "lib/list-view";
import css from "styles/photos.module.scss";
import useImages from "store/hooks/useImages";
import useFilePicker from "hooks/useFilePicker";
import useBackground from "store/hooks/usebackground";
import AddImage from "lib/icons/AddImage";
import unsplashApi from "store/api/unsplash";
import { UnsplashImageType } from "typings/api";
import SearchForm from "./search";
import useSearchImages from "./usesearch";
import Loader from "./loader";
import ChevronForwardOutline from "lib/icons/ChevronForwardOutline";
import Add from "lib/icons/Add";

const FakeBox = () => {
  return (
    <Loader
      width="100%"
      height="100%"
      dur={1}
      primarycolor="#ffffff10"
      secondrycolor="#ffffff50"
    />
  );
};

const PhotosOptions = () => {
  const client_id = process.env.unsplash;
  const [searchQuery, updateQuery] = React.useState("wallpapers");

  const { imagesArray, addImage } = useImages();
  const { setBackground, source } = useBackground();
  const { onFilePicker, inputRef } = useFilePicker(
    (source) => addImage(source),
    {}
  );
  const [count, setcount] = React.useState(1);
  const { useGetUnsplashQuery } = unsplashApi;
  const { data, isLoading, isFetching, isError } = useGetUnsplashQuery({
    count: 30,
    page: count,
    // per_page: 30,
    query: searchQuery,
    client_id: client_id,
  });

  const { searchRef, containerRef, searchStyle, onFocus, onSubmit } =
    useSearchImages((v) => updateQuery(v));

  return (
    <div className={css.container}>
      <div ref={containerRef} className={css.content}>
        <div className={css.picker}>
          <FilePicker
            onChange={onFilePicker}
            inputref={inputRef}
            selectid={"back"}
            accept="image/*"
            icon={<Add size={25} />}
          />
        </div>
        <SearchForm
          style={{
            form: searchStyle.button,
            input: {},
          }}
          onSubmit={onSubmit}
          onFocus={onFocus}
          inputref={searchRef}
        />
        {/* Local Images */}
        {imagesArray.map((d, i) => {
          return (
            <ListView key={i} duration={200} className={css.picture}>
              <Item
                viewtype="image"
                source={d.source}
                isactive={d.source === source}
                onClick={() => setBackground(d.source)}
              />
            </ListView>
          );
        })}
        {/* API Images  */}
        {isError ? null : isFetching || isLoading ? (
          <ListView className={css.picture}>
            <FakeBox />
          </ListView>
        ) : (
          data.map((d: UnsplashImageType, i: React.Key) => {
            return (
              <ListView key={i} duration={200} className={css.picture}>
                <Item
                  viewtype="image"
                  source={d?.urls?.small}
                  isactive={d?.urls?.regular === source}
                  onClick={() => setBackground(d?.urls?.regular)}
                />
              </ListView>
            );
          })
        )}
        {!isFetching ? (
          <div className={css.picker}>
            <button
              title="Load More Images"
              aria-label="Load More Images"
              onClick={() => setcount((i) => i + 1)}
            >
              <i>
                <ChevronForwardOutline size={20} />
              </i>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default PhotosOptions;
