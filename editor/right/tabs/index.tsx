import React from "react";
import Span from "ui/span";
import css from "styles/app.module.scss";
import IconButton from "ui/button/icon";
import { SVGPROPS } from "typings/svg";
// HOOKS
import useTab from "store/hooks/use-tab";
// ICONS
import ImageOutline from "lib/icons/ImageOutline";
import AddCircleOutline from "lib/icons/AddCircleOutline";
import GitNetworkOutline from "lib/icons/GitNetworkOutline";
import ColorFilterOutline from "lib/icons/ColorFilterOutline";
import EllipsisHorizontalCircle from "lib/icons/EllipsisHorizontalCircle";

const BottomTabs = () => {
  const {
    tabState: { bottom },
    updateBottomTab,
  } = useTab();

  return (
    <div className={css.bottomcover}>
      <div className={css.tabs}>
        {bottomTabArray.map(({ Icon, text, value }, index) => {
          return (
            <IconButton
              key={index}
              size="40px"
              direction="column"
              onClick={() => updateBottomTab("name", value)}
              disabled={value === bottom.name ? null : "reduce-opacity"}
            >
              <Icon size={16} />
              <Span>{text}</Span>
            </IconButton>
          );
        })}
        <IconButton size="square" direction="column" active="clicked">
          <GitNetworkOutline size={16} />
        </IconButton>
      </div>
    </div>
  );
};
export default BottomTabs;

const bottomTabArray = [
  {
    text: `Edit`,
    get value() {
      return `CODE::${this.text.toUpperCase()}`;
    },
    Icon: (props: SVGPROPS) => <EllipsisHorizontalCircle {...props} />,
  },
  {
    text: `Insert`,
    get value() {
      return `CODE::${this.text.toUpperCase()}`;
    },
    Icon: (props: SVGPROPS) => <AddCircleOutline {...props} />,
  },
  {
    text: `Filter`,
    get value() {
      return `CODE::${this.text.toUpperCase()}`;
    },
    Icon: (props: SVGPROPS) => <ColorFilterOutline {...props} />,
  },
  {
    text: `Images`,
    get value() {
      return `CODE::${this.text.toUpperCase()}`;
    },
    Icon: (props: SVGPROPS) => <ImageOutline {...props} />,
  },
];
