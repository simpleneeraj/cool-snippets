import * as React from "react";

//  CREDIT https://github.com/gregberge/react-merge-refs

/**
 * React utility to merge refs 🖇
 * @param refs 
 * @returns 
 */
function combineRefs<T = any>(
  refs: Array<React.MutableRefObject<T> | React.LegacyRef<T>>
): React.RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  };
}

export default combineRefs;
