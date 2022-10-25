
import React from 'react';

interface DeviceTemplateProps extends React.ComponentPropsWithoutRef<'div'> {
    active?: boolean;
    CodeHeader?: React.ReactNode;
    onEdit?: () => void;
    editHiglight?: boolean;
}

interface CustomTemplateProps extends DeviceTemplateProps { }