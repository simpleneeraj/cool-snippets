import React from 'react';
import { LockClosed } from '@/lib/icons/LockClosed';

interface ToolsWraperProps extends React.ComponentPropsWithRef<'div'> {
  locked?: boolean;
}
const ToolsList = React.forwardRef(
  (props: ToolsWraperProps, ref: React.Ref<HTMLDivElement>) => {
    const { title, locked = false, ...rest } = props;
    return (
      <div
        {...rest}
        ref={ref}
        className={`px-1 py-[6px] flex items-center justify-between`}
      >
        <label className="flex items-center gap-4 text-xs text-[var(--ui-secondry-color)]">
          {title} {locked && <LockClosed size={12} />}
        </label>
        {props.children}
      </div>
    );
  }
);

ToolsList.displayName = 'ToolsWraper';
export default ToolsList;
