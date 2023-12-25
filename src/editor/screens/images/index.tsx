/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Segment from '@/ui/segment';
import RenderTabs from './rendertabs';
import SegmentButton from '@/ui/segment/button';
import { GRADIENT, LOCAL, UNSPLASH } from './action';
import View from '@/ui/view';

const ImagesComponent = () => {
  const [selectedTab, setSelectedTab] = React.useState(LOCAL);

  return (
    <React.Fragment>
      <View
        style={{
          display: 'grid',
          padding: '2px',
        }}
      >
        <Segment style={stickyStyle}>
          {segmentArray.map((data, index) => (
            <SegmentButton
              key={index}
              active={data.value === selectedTab}
              onClick={() => setSelectedTab(data.value)}
              {...data}
            />
          ))}
        </Segment>
      </View>
      <RenderTabs tabName={selectedTab} />
    </React.Fragment>
  );
};
export default ImagesComponent;

const stickyStyle = {
  position: 'sticky',
  top: '0',
  zIndex: '50',
} as React.CSSProperties;

const segmentArray = [
  {
    text: 'DEFAULT',
    value: LOCAL,
  },
  {
    text: 'UNSPLASH',
    value: UNSPLASH,
  },
  {
    text: 'GRADIENT',
    value: GRADIENT,
  },
];
