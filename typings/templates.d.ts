
import React from 'react';

interface DeviceTemplateProps extends React.ComponentPropsWithoutRef<'div'> {
    active?: boolean;
    CodeHeader?: React.ReactNode;
}

interface CustomTemplateProps extends DeviceTemplateProps { }