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
import ChevronForwardOutline from "lib/icons/ChevronForwardOutline";
import FakeBox from "./loader";

const { unsplash: client_id } = process.env;

const PhotosOptions = () => {
  const [searchQuery, updateQuery] = React.useState("wallpapers");

  const { imagesArray, addImage } = useImages();
  const { setBackground, source } = useBackground();
  const { onFilePicker, inputRef } = useFilePicker((img) => addImage(img));
  const [count, setcount] = React.useState(1);
  const { useGetUnsplashQuery } = unsplashApi;
  const { data, isLoading, isFetching, isError } = useGetUnsplashQuery({
    client_id: client_id,
    page: count,
    per_page: 30,
    count: 30,
    query: searchQuery,
  });

  const buildImage = imagesArray.map((data) => {
    return {
      id: data.id,
      small: data.source,
      source: data.source,
    };
  });

  const dataImages = [...buildImage];

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
            icon={<AddImage size={28} />}
          />
        </div>
        <SearchForm
          style={searchStyle}
          onSubmit={onSubmit}
          onFocus={onFocus}
          inputref={searchRef}
        />
        {isError ? null : isFetching || isLoading ? (
          <FakeBox
            width={400}
            height={50}
            reactheight={50}
            reactwidth={50}
            dur={2}
            primarycolor="#ffffff10"
            secondrycolor="#ffffff50"
          />
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
