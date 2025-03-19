import UIButton from '@/app-kit/source/UIButton/button';
import {
  Tab,
  Tabs,
  Input,
  Popover,
  Button,
  PopoverContent,
  PopoverTrigger,
  Divider,
  addToast,
  useDisclosure,
} from '@heroui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import slugify from 'slugify';
import { format } from 'date-fns';
import appConfig from '@/constants/site';
import { Icon } from '@iconify/react';
import fontsNames from '@/json/fonts.json';
import { useCapture } from '@/plugins/capture';
import useSlideEditor from '@/store/hooks/use-editor';
import { headerIcon } from '@/components/style/header';
import UIView from '@/app-kit/source/UIView';
import { upperCase } from 'lodash';

enum Format {
  WEBP = 'webp',
  PNG = 'png',
  JPEG = 'jpeg',
  SVG = 'svg',
}

type ExportFormValues = {
  fileName: string;
  imageFormat: Format;
  pixelRatio: string;
};

const ExportDropdown: React.FC = () => {
  const isPremium = true;

  const { isOpen, onOpenChange, onClose } = useDisclosure();
  const { currentElement } = useSlideEditor();
  const { captureImage, isDownloading, isCopying, copyToClipboard } =
    useCapture();

  const { register, watch, setValue } = useForm<ExportFormValues>({
    defaultValues: {
      fileName: '',
      imageFormat: Format.WEBP,
      pixelRatio: '2',
    },
  });

  const state = watch();

  const currentTypeface = findFontByValue(
    currentElement?.style?.fontFamily as string
  );

  const onExport = async () => {
    const currentDate = format(new Date(), 'yyyy-MM-dd-HH-mm-ss');
    const fileName = slugify(`${appConfig.snippet.output}-${currentDate}`, {
      lower: true,
      replacement: '-',
    });

    await captureImage({
      ...state,
      pixelRatio: Number(state.pixelRatio),
      fileName: state.fileName || fileName,
      fonts: [
        {
          src: currentTypeface?.src as string,
          fontFamily: currentTypeface?.value as string,
        },
      ],
    });
    onClose();
  };
  const onCopy = async () => {
    try {
      await copyToClipboard({
        ...state,
        pixelRatio: Number(state.pixelRatio),
        fonts: [
          {
            src: currentTypeface?.src as string,
            fontFamily: currentTypeface?.value as string,
          },
        ],
      });

      addToast({
        title: 'Image Copied!',
        description:
          'The image has been successfully copied to your clipboard.',
        color: 'success',
        timeout: 3000,
        shouldShowTimeoutProgress: true,
      });
    } catch (error) {
      addToast({
        title: 'Clipboard Copy Not Supported',
        description: `Clipboard copy is not supported for ${state.imageFormat.toUpperCase()} format. `,
        color: 'warning',
        timeout: 4000,
        shouldShowTimeoutProgress: true,
      });
    } finally {
      onClose();
    }
  };

  return (
    <UIView>
      <Popover
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        offset={10}
        backdrop="opaque"
        placement="bottom"
        classNames={{
          base: ['before:bg-default-200'],
          content: [
            'border border-default-200',
            'bg-gradient-to-br from-white to-default-300',
            'dark:from-default-100 dark:to-default-50',
          ],
        }}
      >
        <PopoverTrigger>
          <UIButton
            size="sm"
            variant="flat"
            radius="sm"
            startContent={
              <Icon
                icon="solar:archive-down-minimlistic-line-duotone"
                className={headerIcon({})}
              />
            }
          >
            Export
          </UIButton>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <UIView className="px-1 py-2 w-full">
            <p className="text-small font-bold text-foreground">
              Export Options
            </p>
            <UIView className="mt-2 flex flex-col gap-2 w-full">
              {/* File Name Input */}
              <Input
                label="Name"
                size="sm"
                isClearable
                variant="bordered"
                {...register('fileName')}
                labelPlacement="outside"
                placeholder="Provide a name for your image"
                onClear={() => setValue('fileName', '')}
              />

              {/* Size Selection */}
              <UIView className="flex flex-col gap-2">
                <p className="text-xs">Choose Size</p>
                <Tabs
                  fullWidth
                  size="sm"
                  variant="bordered"
                  selectedKey={state.pixelRatio}
                  onSelectionChange={(key) =>
                    setValue('pixelRatio', key?.toString())
                  }
                >
                  {['1', '2', '3', '4'].map((size) => (
                    <Tab
                      key={size}
                      title={
                        <UIView className="flex items-center gap-2">
                          <p>{`${size}X`}</p>
                          {Number(size) > 2 && (
                            <Icon
                              icon="solar:lock-linear"
                              className={headerIcon({})}
                            />
                          )}
                        </UIView>
                      }
                      isDisabled={!isPremium && Number(size) > 2}
                    />
                  ))}
                </Tabs>
              </UIView>

              {/* Format Selection */}
              <UIView className="flex flex-col gap-2">
                <p className="text-xs">Choose Format</p>
                <Tabs
                  fullWidth
                  size="sm"
                  variant="bordered"
                  selectedKey={state.imageFormat}
                  onSelectionChange={(key) =>
                    setValue('imageFormat', key as Format)
                  }
                >
                  {Object.values(Format).map((format) => (
                    <Tab
                      key={format}
                      title={
                        <UIView className="flex items-center gap-2">
                          <p>{upperCase(format)}</p>
                          {[Format.PNG, Format.SVG].includes(format) && (
                            <Icon
                              icon="solar:lock-linear"
                              className={headerIcon({})}
                            />
                          )}
                        </UIView>
                      }
                      isDisabled={
                        !isPremium && [Format.PNG, Format.SVG].includes(format)
                      }
                    />
                  ))}
                </Tabs>
              </UIView>

              <UIView className="my-2">
                <Divider />
              </UIView>

              {/* Export Buttons */}
              <UIView className="flex items-center gap-2">
                <Button
                  fullWidth
                  onPress={onCopy}
                  isLoading={isCopying}
                  disabled={!isPremium || isCopying}
                  variant="flat"
                  size="sm"
                  startContent={
                    <Icon
                      icon="solar:copy-line-duotone"
                      className={headerIcon({})}
                    />
                  }
                >
                  {isPremium ? 'Copy to Clipboard' : 'Upgrade to Pro'}
                </Button>
                <Button
                  fullWidth
                  onPress={onExport}
                  isLoading={isDownloading}
                  disabled={!isPremium || isDownloading}
                  variant="solid"
                  size="sm"
                  color="secondary"
                  startContent={
                    <Icon
                      icon={
                        isPremium
                          ? 'solar:archive-down-minimlistic-line-duotone'
                          : 'solar:crown-line-duotone'
                      }
                      className={headerIcon({})}
                    />
                  }
                >
                  {isPremium ? 'Save & Export' : 'Upgrade to Pro'}
                </Button>
              </UIView>
            </UIView>
          </UIView>
        </PopoverContent>
      </Popover>
    </UIView>
  );
};

export default ExportDropdown;

const findFontByValue = (value: string) =>
  fontsNames.find((item) => item?.value === value);
