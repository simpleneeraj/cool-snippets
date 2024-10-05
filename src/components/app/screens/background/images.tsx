import React from 'react';
import Link from 'next/link';
import UIView from '@/ui-kit/source/UIView';
import UIButton from '@/ui-kit/source/UIButton/button';
import {
  Card,
  CardFooter,
  Chip,
  Image,
  LinkIcon,
  Tooltip,
} from '@nextui-org/react';
import { FrameItem } from '@/components/elements/frame';
import UIInput from '@/ui-kit/source/UIInput';
import SearchIcon from '@/ui-kit/icons/SearchIcon';
import UISegmentedControl from '@/ui-kit/source/UISegmentedControl';
import UISegmentButton from '@/ui-kit/source/UISegmentedControl/button';
import { useImmer } from 'use-immer';
// import { UnsplashSearchResponse } from '@/server/types/unsplash';
import SparklesIcon from '@/ui-kit/icons/SparklesIcon';
import Json from '@/json/images.json';
import UnsplashIcon from '@/ui-kit/icons/logo/Unsplash';
import { FluentCropSparkleRegular } from '@/ui-kit/icons/FluentCropSparkleRegular';
enum ImageType {
  POPULAR = 'popular',
  UNSPLASH = 'unsplash',
  PIXABAY = 'pixabay',
}

const imagesSegment = [
  {
    label: 'Popular',
    value: ImageType.POPULAR,
  },
  {
    label: 'Unsplash',
    value: ImageType.UNSPLASH,
  },
  {
    label: 'Pixabay',
    value: ImageType.PIXABAY,
  },
];

// const query = gql`
//   query Query($query: String) {
//     searchPhoto(query: $query) {
//       id
//       urls {
//         full
//         regular
//         small
//       }
//       links {
//         html
//         self
//       }
//     }
//   }
// `;

const ImagesBackground = () => {
  // const { data, error, refetch, loading } = useQuery<any>(query, {
  //   variables: {
  //     query: 'Mac',
  //   },
  // });

  const [searchQuery, setSearchQuery] = useImmer('');
  const images = Json;

  const [searchProgress, setSearchProgress] = useImmer(0);
  const [currentImageTab, setCurrentImagetab] = useImmer(ImageType.UNSPLASH);

  const onSearch = React.useCallback(async () => {
    try {
      // await refetch({
      //   query: searchQuery,
      // });
      // Search is complete, set progress to 100%
      setSearchProgress(100);
    } catch (error) {
    } finally {
      setSearchProgress(0);
    }
  }, [setSearchProgress]);

  const onChangeImageTab = React.useCallback(
    (value: ImageType) => {
      setCurrentImagetab(value);
    },
    [setCurrentImagetab]
  );

  const simulateProgress = (duration: number, increment: number) => {
    let currentProgress = 0;
    const intervalId = setInterval(() => {
      setSearchProgress((draft) => {
        draft = Math.min(currentProgress, 100);
      });
      currentProgress += increment;

      if (currentProgress > 100) {
        clearInterval(intervalId);
      }
    }, duration / (100 / increment));
  };

  React.useEffect(() => {
    // Simulate gradual increase before the request starts
    simulateProgress(500, 10); // Adjust the duration and increment as needed
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UIView className="flex flex-col">
      {/* <FrameItem className="py-1">
        <UISegmentedControl
          radius="sm"
          fullWidth
          size="sm"
          selectedKey={currentImageTab}
          onSelectionChange={(value) => onChangeImageTab(value as ImageType)}
        >
          {imagesSegment.map((item) => {
            return (
              <UISegmentButton
                key={item.value}
                title={item.label}
                aria-label={item.label}
              />
            );
          })}
        </UISegmentedControl>
      </FrameItem> */}
      <FrameItem className="flex-1 flex flex-col items-baseline sticky top-0 z-50 bg-default-50 bg-opacity-85 backdrop-blur-lg rounded-b-2xl rounded-br-2xl gap-1">
        <UIView className="flex-1 flex items-center gap-1 w-full">
          <UIInput
            size={'sm'}
            labelPlacement={'outside'}
            placeholder={'Search images...'}
            className={'bg-transparent'}
            onChange={({ target }) => setSearchQuery(target.value)}
            startContent={<SearchIcon className="text-default-400 h-4 w-4" />}
          />
          <UIButton
            isIconOnly
            size={'sm'}
            variant={'flat'}
            onPress={onSearch}
            // isLoading={loading}
          >
            <SparklesIcon />
          </UIButton>
        </UIView>
        {/* <UIView className="flex flex-wrap items-center gap-1">
          <Chip
            size="sm"
            variant="flat"
            color="default"
            className="text-[10px] text-default-500 cursor-pointer select-none"
          >
            Wallpapers
          </Chip>
          <Chip
            size="sm"
            variant="flat"
            color="default"
            className="text-[10px] text-default-500 cursor-pointer select-none"
          >
            Gradients
          </Chip>
          <Chip
            size="sm"
            variant="flat"
            color="default"
            className="text-[10px] text-default-500 cursor-pointer select-none"
          >
            Abstract
          </Chip>
          <Chip
            size="sm"
            variant="flat"
            color="default"
            className="text-[10px] text-default-500 cursor-pointer select-none"
          >
            Mesh
          </Chip>
        </UIView> */}
      </FrameItem>
      <FrameItem divider={false}>
        <UIView className="flex flex-col gap-2 ">
          {images &&
            images?.length > 0 &&
            images?.map((item, index) => (
              <Card
                key={index}
                fullWidth
                isFooterBlurred
                radius="lg"
                className="w-full group sm:cursor-pointer"
              >
                <Image
                  removeWrapper
                  alt="Woman listing to music"
                  className="object-cover w-full h-full min-h-40 max-h-52"
                  src={String(item?.urls?.regular)}
                />
                <CardFooter className="transform translate-y-[120%] group-hover:translate-y-0 transition-all justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 mb-1 z-10 p-2">
                  <UIView className="w-full flex items-center justify-between">
                    <UIView className="flex items-center gap-2">
                      <UIButton
                        size="sm"
                        variant="flat"
                        color="default"
                        target={'_blank'}
                        href={item.urls.regular}
                        className="text-tiny bg-black/40"
                      >
                        Use
                      </UIButton>
                      <Tooltip content="Magical AI" size="sm">
                        <UIButton
                          size="sm"
                          variant="flat"
                          color="default"
                          target={'_blank'}
                          isIconOnly
                          href={item.urls.regular}
                          className="text-tiny bg-black/40"
                        >
                          <FluentCropSparkleRegular />
                        </UIButton>
                      </Tooltip>
                    </UIView>
                    <UIView className="flex items-center gap-2">
                      <UIButton
                        as={Link}
                        size="sm"
                        isIconOnly
                        variant="flat"
                        color="default"
                        target={'_blank'}
                        href={item.urls.regular}
                        className="text-tiny bg-black/40"
                      >
                        <UnsplashIcon />
                      </UIButton>
                    </UIView>
                  </UIView>
                </CardFooter>
              </Card>
            ))}
        </UIView>
      </FrameItem>
    </UIView>
  );
};
export default ImagesBackground;
