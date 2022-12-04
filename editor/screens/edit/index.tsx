import React from "react";
import dynamic from "next/dynamic";

const TextOptions = dynamic(() => import("./text"));
const CanvasOptions = dynamic(() => import("./canvas"));
const CodeOptions = dynamic(() => import("./code"));

const EditComponent = () => {
  return (
    <React.Fragment>
      <CanvasOptions />
      <CodeOptions />
      <TextOptions />
    </React.Fragment>
  );
};
export default EditComponent;

/**
 *     <ToolsWraper labelleft="UI" labelright="Reset">
        <ToolsList title="Themes">
          <Select
            onSelect={(value) => console.log(value)}
            defaultOptions={{
              text: "Themes One",
              value: "Hello",
            }}
            options={[
              {
                text: "Themes One",
                value: "Hello",
              },
              {
                text: "Themes Two",
                value: "Hello",
              },
              {
                text: "Themes Three",
                value: "Hello",
              },
            ]}
          />
        </ToolsList>
        <HRLine className={css.horizontal} />
      </ToolsWraper>
 */
