/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Card,
  Tab,
  Tabs,
  Image,
  Modal,
  Button,
  ModalBody,
  CardFooter,
  ModalHeader,
  ModalContent,
  useDisclosure,
  ModalFooter,
  Checkbox,
  Divider,
  Slider,
  Accordion,
  AccordionItem,
  Link,
} from '@heroui/react';
import React from 'react';
import { Icon } from '@iconify/react';
import { PATTERNS } from './patterns';
import { wallpaperOptions } from './config';
import UIView from '@/app-kit/source/UIView';
import UIButton from '@/app-kit/source/UIButton/button';
import { headerIcon } from '@/components/style/header';
import MaskWallpaper, { MaskWallpaperHandlers } from '@/plugins/mask-wallpaper';
import { useImmer } from 'use-immer';
import { COLORS } from './colors';
import { set } from 'lodash';
import grad from '@/json/ui-gradients.json';
import CodingLines from '../widget/aside/primary/coding-lines';
import useSlideEditor from '@/store/hooks/use-editor';
import { BACKGROUND_TYPE } from '@/typings/enums';
import backgroundPurify from '@/utils/background-purify';
import CreatePasscode from './create-passcode';

const MORE_COLORS = COLORS.concat(
  grad.map((item) => ({
    text: item?.name,
    colors: item?.gradient?.map((xx) => xx?.color),
  }))
);

// Enums for tabs
enum TabsEnum {
  PATTERNS = 'patterns',
  COLORS = 'colors',
}

type ShareWidgetProps = object;

const ShareWidget: React.FC<ShareWidgetProps> = ({}) => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  const ref = React.useRef<MaskWallpaperHandlers>(null);
  const [selectedTab, setSelectedTab] = React.useState<TabsEnum>(
    TabsEnum.PATTERNS
  );

  const [state, setState] = useImmer(wallpaperOptions);
  const onChangeState = React.useCallback(
    (path: string, value: any) => {
      setState((draft) => {
        set(draft, path, value);
      });
    },
    [setState]
  );

  const { currentSlide } = useSlideEditor();

  const PROPERTIES = currentSlide?.background?.properties;
  const TYPE = currentSlide?.background?.type;

  const background = React.useMemo(() => {
    return backgroundPurify(TYPE as BACKGROUND_TYPE, PROPERTIES);
  }, [TYPE, PROPERTIES]);
  return (
    <UIView className="flex flex-col">
      <UIButton
        onPress={onOpen}
        size="sm"
        variant="flat"
        radius="sm"
        startContent={
          <Icon
            icon={'solar:share-circle-line-duotone'}
            className={headerIcon({})}
          />
        }
      >
        Share
      </UIButton>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
        scrollBehavior="inside"
        isDismissable={false}
        hideCloseButton
        className="min-h-[80vh]"
      >
        <ModalContent>
          <ModalHeader className="flex gap-1 justify-between items-center">
            <p>Share Your Snippets</p>

            <UIView className="flex items-center gap-2">
              {/* <Button isIconOnly variant="bordered">
                <Icon className="h-5 w-5" icon={'logos:whatsapp-icon'} />
              </Button>
              <Button isIconOnly variant="bordered">
                <Icon className="h-5 w-5" icon={'logos:twitter'} />
              </Button>
              <Button isIconOnly variant="bordered">
                <Icon className="h-5 w-5" icon={'devicon:linkedin'} />
              </Button> */}
              <CreatePasscode />
              <Button size="sm" isIconOnly variant="bordered">
                <Icon
                  className="h-4 w-4"
                  icon={'solar:square-share-line-line-duotone'}
                />
              </Button>
              <Button size="sm" isIconOnly variant="bordered">
                <Icon
                  className="h-4 w-4"
                  icon={'solar:link-minimalistic-2-line-duotone'}
                />
              </Button>
              <Button size="sm" isIconOnly variant="bordered" onPress={onClose}>
                <Icon
                  className="h-4 w-4 opacity-75"
                  icon={'ion:close-outline'}
                />
              </Button>
            </UIView>
          </ModalHeader>
          <ModalBody className="flex-row flex-1 flex">
            <UIView className="flex flex-col justify-center items-center gap-2  border border-default-100 relative rounded-2xl overflow-hidden w-3/4">
              <MaskWallpaper ref={ref} options={state} />
              <UIView className="z-10">
                <UIView
                  className={
                    'flex items-center justify-center min-w-96 min-h-60 rounded-2xl shadow-lg border border-default-200'
                  }
                  style={{
                    background,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    transition: '100ms ease-in',
                  }}
                >
                  <UIView
                    className={
                      'flex items-center justify-center bg-black/50 backdrop-blur-lg w-2/3 rounded-xl overflow-hidden p-2'
                    }
                  >
                    <CodingLines />
                  </UIView>
                </UIView>
              </UIView>
            </UIView>
            <UIView className="flex flex-col gap-2 w-1/4">
              <UIView className="flex items-center justify-between">
                <Tabs
                  fullWidth
                  size="sm"
                  variant="bordered"
                  selectedKey={selectedTab}
                  onSelectionChange={(key) => setSelectedTab(key as TabsEnum)}
                >
                  <Tab title="Patterns" key={TabsEnum.PATTERNS} />
                  <Tab title="Colors" key={TabsEnum.COLORS} />
                </Tabs>
              </UIView>
              {selectedTab === TabsEnum.COLORS && (
                <UIView className="grid grid-cols-2 overflow-auto gap-2 max-h-96">
                  {MORE_COLORS.map((color) => (
                    <Card
                      key={color.text}
                      isPressable
                      isFooterBlurred
                      className={`overflow-none relative border border-default-100 h-28 ${
                        state.colors === color.colors
                          ? 'ring-2 ring-accent'
                          : ''
                      }`}
                      onPress={() => onChangeState('colors', color.colors)}
                    >
                      <UIView
                        style={{
                          backgroundImage: `linear-gradient(45deg, ${color?.colors?.join(', ')})`,
                        }}
                        className="h-40 w-full"
                      ></UIView>
                      <CardFooter className="before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                        <p className="text-tiny text-default font-bold">
                          {color.text}
                        </p>
                      </CardFooter>
                    </Card>
                  ))}
                </UIView>
              )}
              {selectedTab === TabsEnum.PATTERNS && (
                <UIView className="grid grid-cols-2 overflow-auto gap-2 max-h-96">
                  {PATTERNS.map((pattern) => (
                    <Card
                      key={pattern.path}
                      isPressable
                      isFooterBlurred
                      className={`overflow-none relative border border-default-100 h-28 ${
                        state.pattern === pattern.path
                          ? 'ring-2 ring-accent'
                          : ''
                      }`}
                      style={{
                        backgroundImage: `linear-gradient(45deg, ${state?.colors?.join(', ')})`,
                      }}
                      onPress={() =>
                        onChangeState('pattern.image', pattern.path)
                      }
                    >
                      <Image
                        alt={pattern.text}
                        src={pattern.path}
                        className="object-cover w-full mix-blend-multiply"
                        removeWrapper
                      />
                      <CardFooter className="before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                        <p className="text-xs text-default font-bold">
                          {pattern.text}
                        </p>
                      </CardFooter>
                    </Card>
                  ))}
                </UIView>
              )}
              <UIView className="flex flex-col gap-2 w-full">
                <Accordion variant="bordered">
                  <AccordionItem
                    startContent={
                      <Icon
                        icon="solar:tuning-square-2-line-duotone"
                        className="h-4 w-4 opacity-80"
                      />
                    }
                    key="1"
                    aria-label="Advanced Options"
                    title="Advanced Options"
                    classNames={{
                      title: 'text-sm',
                    }}
                  >
                    <UIView className="flex flex-col gap-2">
                      <UIView className="flex gap-2">
                        <Checkbox
                          size="sm"
                          color="success"
                          isSelected={state.pattern?.mask}
                          onValueChange={() =>
                            onChangeState('pattern.mask', !state.pattern?.mask)
                          }
                        >
                          Mask
                        </Checkbox>
                        <Checkbox
                          size="sm"
                          color="success"
                          isSelected={state.animate}
                          onValueChange={() =>
                            onChangeState('animate', !state.animate)
                          }
                        >
                          Animate
                        </Checkbox>
                      </UIView>
                      <Slider
                        size="sm"
                        step={10}
                        minValue={128}
                        maxValue={768}
                        label="Size (px)"
                        color="foreground"
                        value={Number(state.pattern?.size?.replace('px', ''))}
                        onChange={(v) =>
                          onChangeState('pattern.size', `${v}px`)
                        }
                      />
                      <Slider
                        size="sm"
                        step={0.1}
                        minValue={0}
                        maxValue={1}
                        label="Opacity"
                        color="foreground"
                        value={Number(state.pattern?.opacity)}
                        onChange={(v) => onChangeState('pattern.opacity', v)}
                      />
                      <span className="h-1" />
                    </UIView>
                  </AccordionItem>
                </Accordion>

                <Divider />
                <Button
                  size="sm"
                  variant="bordered"
                  onPress={() => setState(wallpaperOptions)}
                >
                  Reset
                </Button>
              </UIView>
            </UIView>
          </ModalBody>
          <ModalFooter className="items-start justify-start">
            <p className="text-xs text-default-400">
              You can share your snippets on WhatsApp, Twitter, LinkedIn, or
              through a popup. Simply copy the link if you prefer to share it
              that way. To keep your snippets safe, you can also set a passcode.{' '}
              <Link
                className="text-xs text-lavender-frost/90"
                href="/blog/share-your-snippets"
              >
                Read More
              </Link>
            </p>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </UIView>
  );
};

export default ShareWidget;

{
  /* <Switch
                  size="sm"
                  isSelected={state.pattern?.mask}
                  onValueChange={() =>
                    onChangeState('pattern.mask', !state.pattern?.mask)
                  }
                  color="success"
                  aria-label="Theme Mode"
                  thumbIcon={({ isSelected, className }) =>
                    isSelected ? (
                      <Icon
                        icon={'solar:sun-2-bold-duotone'}
                        className={className}
                      />
                    ) : (
                      <Icon
                        icon={'solar:moon-stars-bold-duotone'}
                        className={className}
                      />
                    )
                  }
                >
                  Theme Mode
                </Switch>

                <Switch
                  size="sm"
                  color="success"
                  isSelected={state.animate}
                  onValueChange={() => onChangeState('animate', !state.animate)}
                >
                  Animate
                </Switch> */
}
{
  /* <Button
                  variant="bordered"
                  onPress={() => ref.current?.toNextPosition()}
                  isIconOnly
                >
                  <Icon icon={'solar:refresh-line-duotone'} />
                </Button> */
}
{
  /* <Button
                  variant="bordered"
                  onPress={() => setState(wallpaperOptions)}
                  isIconOnly
                >
                  <Icon icon={'solar:skip-previous-line-duotone'} />
                </Button>
                <Button
                  variant="bordered"
                  onPress={() => setState(wallpaperOptions)}
                  isIconOnly
                >
                  <Icon icon={'solar:skip-next-line-duotone'} />
                </Button> */
}
