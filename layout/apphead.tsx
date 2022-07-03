import OptionsWraper from "app/lazydock/wraper";
import Select from "element/select";
import React from "react";

const AppHead = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        position: "absolute",
        bottom: "100px",
        left: "0",
        width: "100%",
        background: "bisque",
        height: "40px",
        zIndex: "21",
      }}
    >
      <h1>Hello</h1>
      <Select
        defaultValue={3}
        onChange={(value) => value}
        array={Array.from(Array(20).keys()).map((_, index) => {
          return {
            text: index,
            value: index,
          };
        })}
      />
      <select>
        {Array.from(Array(50).keys()).map((_, i) => {
          return (
            <option
              style={{ background: "#000", accentColor: "red" }}
              key={i}
              value={i}
            >
              {i}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default AppHead;
