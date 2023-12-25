import React from 'react';
import delay from '@/lib/delay';
import dynamic from 'next/dynamic';
import UIIndicatorView from '@/ui/spinner';

const time = 200;

const LoadingSpinner = () => {
  return (
    <div
      style={{
        flex: '1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <UIIndicatorView>Loading...</UIIndicatorView>
    </div>
  );
};
// DYNAMIC COMPONENTS

const EditComponent = dynamic(
  async () => {
    await delay(time);
    return await import('../screens/edit');
  },
  {
    loading: LoadingSpinner,
  }
);
const FilterComponent = dynamic(
  async () => {
    await delay(time);
    return await import('../screens/filter');
  },
  {
    loading: LoadingSpinner,
  }
);
const ImagesComponent = dynamic(
  async () => {
    await delay(time);
    return await import('../screens/images');
  },
  {
    loading: LoadingSpinner,
  }
);
const InsertComponent = dynamic(
  async () => {
    await delay(time);
    return await import('../screens/insert');
  },
  {
    loading: LoadingSpinner,
  }
);
const TemplateEditing = dynamic(
  async () => {
    await delay(time);
    return await import('../screens/templates');
  },
  {
    loading: LoadingSpinner,
  }
);

const RenderComponents = () => {
  const tabeName = 'CODE::EDIT';
  switch (tabeName) {
    case 'CODE::EDIT':
      return <EditComponent />;
    case 'CODE::INSERT':
      return <InsertComponent />;
    case 'CODE::FILTER':
      return <FilterComponent />;
    case 'CODE::IMAGES':
      return <ImagesComponent />;
    case 'TEMPLATE::EDITING':
      return <TemplateEditing />;
    default:
      return <LoadingSpinner />;
  }
};
export default React.memo(RenderComponents);
