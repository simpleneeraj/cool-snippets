import React from 'react';
import { Avatar, AvatarFallback } from '@shared/ui/avatar';
import { Button } from '@shared/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@shared/ui/card';
import { format } from 'date-fns';
import convertBytes from '@shared/lib/convert-bytes';
import useSlideEditor from '@features/studio/store/hooks/use-editor';
import { RefreshLineDuotoneIcon } from '@solar-icons/react';

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
    <Card className="relative overflow-hidden border border-foreground/10 bg-[url('/texture/abstract-dark-bg.jpg')] bg-bottom-right">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Avatar className="border border-white/20 bg-transparent">
            <AvatarFallback>
              <RefreshLineDuotoneIcon className="h-6 w-6 text-white" />
            </AvatarFallback>
          </Avatar>
          <p className="text-lg font-medium text-white">Storage Management</p>
        </div>
      </CardHeader>
      <CardContent className="px-3">
        <div className="flex flex-col gap-2 px-2">
          <p className="text-lg font-medium text-white/80">
            Optimize Your Storage
          </p>
          <p className="text-sm text-white/60">
            Easily manage and organize your storage. Reset unused data, free up
            space, and ensure smooth performance across all your workflows.
          </p>

          <table className="w-full text-center text-sm border-collapse rounded-md">
            <thead className="text-xs  text-foreground">
              <tr>
                <th scope="col" className="p-1 border border-border/50">
                  Size
                </th>
                <th scope="col" className="p-1 border border-border/50">
                  Type
                </th>
                <th scope="col" className="p-1 border border-border/50">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-sm">
                <td className="p-1 border border-border/50">
                  {getConfig.bytes}
                </td>
                <td className="p-1 border border-border/50">
                  {getConfig.type}
                </td>
                <td className="p-1 border border-border/50">
                  {getConfig.date}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button
          onClick={resetState}
          className="w-full border border-white/20 bg-white/10 text-white"
        >
          Reset Storage
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StorageCard;
