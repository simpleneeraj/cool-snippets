import React from 'react';
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@heroui/react';
import { format } from 'date-fns';
import convertBytes from '@/utils/convert-bytes';
import useSlideEditor from '@/store/hooks/use-editor';
import { SolarRefreshLineDuotone } from '@/app-kit/icons/SolarRefreshLineDuotone';

const StorageCard = () => {
  const { slides, resetState } = useSlideEditor();

  const getConfig = React.useMemo(() => {
    const jsonString = JSON.stringify(slides);
    const sizeInBytes = new Blob([jsonString]).size;
    return {
      type: 'Local',
      bytes: convertBytes(sizeInBytes),
      date: format(new Date(), 'dd/MM/yyyy'),
    };
  }, [slides]);

  return (
    <Card className="overflow-none relative border-small border-foreground/10 bg-[url('/texture/abstract-dark-bg.jpg')] bg-right-bottom">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Avatar
            className="border-small border-white/20 bg-transparent"
            icon={<SolarRefreshLineDuotone className="h-6 w-6" />}
          />
          <p className="text-large font-medium text-white">
            Storage Management
          </p>
        </div>
      </CardHeader>
      <CardBody className="px-3">
        <div className="flex flex-col gap-2 px-2">
          <p className="text-large font-medium text-white/80">
            Optimize Your Storage
          </p>
          <p className="text-small text-white/60">
            Easily manage and organize your storage. Reset unused data, free up
            space, and ensure smooth performance across all your workflows.
          </p>

          <table className="w-full text-center text-small border-collapse rounded-md">
            <thead className="text-xs  text-default-700">
              <tr>
                <th scope="col" className="p-1 border border-default-200/50">
                  Size
                </th>
                <th scope="col" className="p-1 border border-default-200/50">
                  Type
                </th>
                <th scope="col" className="p-1 border border-default-200/50">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-small">
                <td className="p-1 border border-default-200/50">
                  {getConfig.bytes}
                </td>
                <td className="p-1 border border-default-200/50">
                  {getConfig.type}
                </td>
                <td className="p-1 border border-default-200/50">
                  {getConfig.date}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardBody>
      <CardFooter className="justify-end gap-2">
        <Button
          fullWidth
          onPress={resetState}
          className="border-small border-white/20 bg-white/10 text-white"
        >
          Reset Storage
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StorageCard;
