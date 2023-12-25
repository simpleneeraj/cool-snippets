import React from 'react';

interface ToolsWraperProps extends React.ComponentPropsWithRef<'div'> {
  labelleft: string;
  labelright?: string;
}

const ToolsWraper = React.forwardRef(
  (props: ToolsWraperProps, ref: React.Ref<HTMLDivElement>) => {
    const { labelright, labelleft, ...rest } = props;
    return (
      <div ref={ref} className="flex flex-col" {...rest}>
        <div className="flex items-center justify-between bg-[#2e2e30] p-1">
          <label className="text-xs">{labelleft}</label>
          {labelright && (
            <label className="text-xs opacity-50">{labelright}</label>
          )}
        </div>
        {props.children}
      </div>
    );
  }
);

ToolsWraper.displayName = 'ToolsWraper';
export default ToolsWraper;
