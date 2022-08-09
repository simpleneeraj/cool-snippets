import React from "react";
import css from "styles/app.module.scss";
import Span from "ui/span";
import IconButton from "ui/button/icon";
// ICONS
import ImageOutline from "lib/icons/ImageOutline";
import AddCircleOutline from "lib/icons/AddCircleOutline";
import GitNetworkOutline from "lib/icons/GitNetworkOutline";
import ColorFilterOutline from "lib/icons/ColorFilterOutline";
import EllipsisHorizontalCircle from "lib/icons/EllipsisHorizontalCircle";

const BottomTabs = () => {
  return (
    <div className={css.bottomcover}>
      <div className={css.tabs}>
        <IconButton size="40px" direction="column">
          <EllipsisHorizontalCircle size={16} />
          <Span>Edit</Span>
        </IconButton>
        <IconButton size="40px" direction="column" disabled="reduce-opacity">
          <AddCircleOutline size={16} />
          <Span>Insert</Span>
        </IconButton>
        <IconButton size="40px" direction="column" disabled="reduce-opacity">
          <ColorFilterOutline size={16} />
          <Span>Filter</Span>
        </IconButton>
        <IconButton size="40px" direction="column" disabled="reduce-opacity">
          <ImageOutline size={16} />
          <Span>Images</Span>
        </IconButton>
        <IconButton size="square" direction="column" active="clicked">
          <GitNetworkOutline size={16} />
        </IconButton>
      </div>
    </div>
  );
};
export default BottomTabs;
