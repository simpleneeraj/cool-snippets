import React from 'react';
import WebLayout from '@/layouts/web';
import UIView from '@shared/uikit/UIView';

type WebLayoutProps = React.PropsWithChildren;

const WebRootLayout: React.FC<WebLayoutProps> = ({ children }) => (
  <WebLayout>
    {/* No nested scroll container — the document owns the scroll so the sticky
        header pins correctly and there's a single, predictable scrollbar. */}
    <UIView className="flex flex-1 flex-col">{children}</UIView>
    {/*<UIFireflies />*/}
  </WebLayout>
);

export default WebRootLayout;
