/* eslint-disable @next/next/no-img-element */
import ListView from "lib/list-view";
import React from "react";
import css from "styles/images.module.scss";
import unsplashApi from "store/api/unsplash";
import useImages from "store/hooks/useImages";
import useBackground from "store/hooks/usebackground";
import { UnsplashImageType } from "typings/api";
import IconButton from "ui/button/icon";

interface PictureProps extends React.ComponentPropsWithoutRef<"div"> {
  source: string;
  isactive?: boolean;
  onClick?: () => void;
  viewtype: "span" | "image";
  style?: React.CSSProperties;
}

const ImagesComponent = () => {
  const client_id = process.env.unsplash;

  const [count, setcount] = React.useState(1);
  const [searchQuery, updateQuery] = React.useState("wallpapers");
  const { setBackground, source } = useBackground();

  const { imagesArray, addImage } = useImages();
  const { useGetUnsplashQuery } = unsplashApi;
  const { data, isLoading, isFetching, isError } = useGetUnsplashQuery({
    count: 30,
    page: count,
    // per_page: 30,
    query: searchQuery,
    client_id: client_id,
  });

  return (
    <div className={css.container}>
      <div>Search</div>
      <div className={css.imageContainer}>
        <div className={css.imageBox}>
          {imagesArray.map((d, i) => {
            return (
              <ListView key={i} duration={200} className={css.image}>
                <ImageBox
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
              <p>Loading...</p>
            </ListView>
          ) : (
            data.map((d: UnsplashImageType, i: React.Key) => {
              return (
                <ListView key={i} duration={200} className={css.image}>
                  <ImageBox
                    viewtype="image"
                    source={d?.urls?.small}
                    isactive={d?.urls?.regular === source}
                    onClick={() => setBackground(d?.urls?.regular)}
                  />
                </ListView>
              );
            })
          )}
        </div>
      </div>
      <div className={css.showmore}>
        <IconButton>Hello</IconButton>
      </div>
    </div>
  );
};
export default ImagesComponent;

const ImageBox = React.forwardRef(
  (props: PictureProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div ref={ref} className={css.picture} {...props}>
        {props.isactive ? <span /> : null}
        {props.viewtype === "image" ? (
          <img src={props.source} alt="images" />
        ) : null}
      </div>
    );
  }
);

ImageBox.displayName = "ItemBox";
