import React from 'react';
import Link from 'next/link';
import UIView from '@/ui-kit/source/UIView';
import UIButton from '@/ui-kit/source/UIButton/button';
import { Card, CardFooter, Chip, Image, LinkIcon } from '@nextui-org/react';
import { FrameItem } from '@/components/elements/frame';
import UIInput from '@/ui-kit/source/UIInput';
import SearchIcon from '@/ui-kit/icons/SearchIcon';
import UISegmentedControl from '@/ui-kit/source/UISegmentedControl';
import UISegmentButton from '@/ui-kit/source/UISegmentedControl/button';
import { useImmer } from 'use-immer';
// import { UnsplashSearchResponse } from '@/server/types/unsplash';
import SparklesIcon from '@/ui-kit/icons/SparklesIcon';
import Json from '@/json/images.json';
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
            startContent={<SearchIcon className="text-default-400 h-4 w-4" />}
            labelPlacement={'outside'}
            placeholder={'Search images...'}
            className={'bg-transparent'}
            onChange={({ target }) => setSearchQuery(target.value)}
          />
          <UIButton
            variant={'flat'}
            size={'sm'}
            // isLoading={loading}
            isIconOnly
            onPress={onSearch}
          >
            <SparklesIcon />
          </UIButton>
        </UIView>
        <UIView className="flex flex-wrap items-center gap-1">
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
        </UIView>
      </FrameItem>

      <React.Suspense>
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
                  className="border-none w-full"
                >
                  <Image
                    alt="Woman listing to music"
                    className="object-cover w-full h-full"
                    src={String(item?.urls?.regular)}
                  />
                  <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <UIView className="flex items-center gap-1 text-tiny text-white/80">
                      <p>SOURCE :</p>
                      <Link href={'/'} className="flex items-center">
                        View
                        <LinkIcon />
                      </Link>
                    </UIView>
                    <UIButton
                      className="text-tiny text-white bg-black/20"
                      variant="flat"
                      color="default"
                      radius="lg"
                      size="sm"
                    >
                      USE
                    </UIButton>
                  </CardFooter>
                </Card>
              ))}
          </UIView>
        </FrameItem>
      </React.Suspense>
    </UIView>
  );
};
export default ImagesBackground;
