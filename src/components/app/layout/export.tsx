import UIButton from '@/ui-kit/source/UIButton/button';
import {
  Tab,
  Tabs,
  Input,
  Popover,
  Button,
  PopoverContent,
  PopoverTrigger,
  Divider,
} from '@nextui-org/react';
import React from 'react';
import slugify from 'slugify';
import { format } from 'date-fns';
import appConfig from '@/constants/site';
import { Icon } from '@iconify/react';
import fontsNames from '@/json/fonts.json';
import { useCapture } from '@/plugins/capture';
import useSlideEditor from '@/store/hooks/use-editor';
import { headerIcon } from '@/components/style/header';
import UIView from '@/ui-kit/source/UIView';
import { useImmer } from 'use-immer';

type ExportDropdownProps = object;
type StateTypes = {
  fileName: string;
  imageFormat: Format;
  pixelRatio: number;
};
type StateKey = keyof StateTypes;
enum Format {
  WEBP = 'webp',
  PNG = 'png',
  JPEG = 'jpeg',
  SVG = 'svg',
}

const ExportDropdown: React.FC<ExportDropdownProps> = ({}) => {
  const isPremium = true;

  const { currentElement } = useSlideEditor();
  const { captureImage, isLoading } = useCapture();

  const [state, updateState] = useImmer<StateTypes>({
    fileName: '',
    imageFormat: Format.WEBP as Format,
    pixelRatio: 2,
  });

  const onUpdateState = (key: StateKey, value: string | Format | number) => {
    updateState((draft) => {
      // @ts-expect-error - Key error
      draft[key] = value;
    });
  };

  const currentTypeface = findFontByValue(
    currentElement?.style?.fontFamily as string
  );

  const onExport = React.useCallback(() => {
    const currentDate = format(new Date(), 'yyyy-MM-dd-HH-mm-ss');
    const fileName = slugify(`${appConfig.snippet.output}-${currentDate}`, {
      lower: true,
      replacement: '-',
    });
    captureImage({
      ...state,
      fileName: state?.fileName || fileName,
      fonts: [
        {
          src: currentTypeface?.src as string,
          fontFamily: currentTypeface?.value as string,
        },
      ],
    });
  }, [captureImage, currentTypeface, state]);

  return (
    <UIView>
      <Popover
        offset={10}
        backdrop={'opaque'}
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
            endContent={
              <Icon
                icon={'solar:archive-down-minimlistic-line-duotone'}
                className={headerIcon({
                  sizes: 'md',
                })}
              />
            }
          >
            Export
          </UIButton>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          {(titleProps) => (
            <UIView className="px-1 py-2 w-full">
              <p
                className="text-small font-bold text-foreground"
                {...titleProps}
              >
                Export Options
              </p>
              <UIView className="mt-2 flex flex-col gap-2 w-full">
                <Input
                  label="Name"
                  size="sm"
                  isClearable
                  variant="bordered"
                  value={state.fileName}
                  labelPlacement="outside"
                  placeholder="Provide a name for your image"
                  onClear={() => onUpdateState('fileName', '')}
                  onChange={(e) => onUpdateState('fileName', e.target.value)}
                />
                <UIView className="flex flex-col gap-2">
                  <p className="text-xs">Choose Size</p>
                  <Tabs
                    fullWidth
                    size="sm"
                    variant="bordered"
                    aria-label="Choose export size"
                    selectedKey={state.pixelRatio}
                    onSelectionChange={(key) =>
                      onUpdateState('pixelRatio', key.toString())
                    }
                  >
                    {Array.from({ length: 4 }).map((_, i) => (
                      <Tab
                        key={i + 1}
                        title={
                          <UIView className="flex items-center gap-2">
                            <p>{`${i + 1}X`}</p>
                            {i > 1 && (
                              <Icon
                                icon={'solar:lock-linear'}
                                className={headerIcon({})}
                              />
                            )}
                          </UIView>
                        }
                        isDisabled={!isPremium && i > 1}
                      />
                    ))}
                  </Tabs>
                </UIView>
                <UIView className="flex flex-col gap-2">
                  <p className="text-xs">Choose format</p>
                  <Tabs
                    fullWidth
                    size="sm"
                    variant="bordered"
                    aria-label="Choose export format"
                    selectedKey={state?.imageFormat}
                    onSelectionChange={(key) =>
                      onUpdateState('imageFormat', key as Format)
                    }
                  >
                    <Tab key={Format.WEBP} title="WebP" />
                    <Tab key={Format.JPEG} title="JPEG" />
                    <Tab
                      key={Format.PNG}
                      title={
                        <UIView className="flex items-center gap-2">
                          <p>PNG</p>
                          <Icon
                            icon={'solar:lock-linear'}
                            className={headerIcon({})}
                          />
                        </UIView>
                      }
                      isDisabled={!isPremium}
                    />
                    <Tab
                      key={Format.SVG}
                      title={
                        <UIView className="flex items-center gap-2">
                          <p>SVG</p>
                          <Icon
                            icon={'solar:lock-linear'}
                            className={headerIcon({})}
                          />
                        </UIView>
                      }
                      isDisabled={!isPremium}
                    />
                  </Tabs>
                </UIView>
                <UIView className="my-2">
                  <Divider />
                </UIView>
                <UIView className="flex flex-col gap-2">
                  <Button
                    onPress={onExport}
                    isLoading={isLoading}
                    disabled={!isPremium || isLoading}
                    variant="solid"
                    size="sm"
                    color="secondary"
                    endContent={
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
          )}
        </PopoverContent>
      </Popover>
    </UIView>
  );
};

export default ExportDropdown;

const findFontByValue = (value: string) =>
  fontsNames.find((item) => item?.value === value);
