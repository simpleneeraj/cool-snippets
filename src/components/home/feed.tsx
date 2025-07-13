import UIView from '@/app-kit/source/UIView';
import { Image } from '@heroui/react';

function FeedSection() {
  const list = [
    {
      title: 'Swift',
      img: '/snippets/mintlify.svg',
    },
    {
      title: 'Tailwind css',
      img: '/snippets/tailwind.svg',
    },
    {
      title: 'Prisma',
      img: '/snippets/prisma.svg',
    },
  ];

  return (
    <UIView className="[color-scheme:dark]">
      <UIView className="relative">
        <UIView
          className="absolute inset-0 -z-10 bg-[35%_top] bg-no-repeat sm:bg-[38%_top] md:bg-[40%_top] lg:bg-[44%_top] xl:bg-top forced-colors:hidden "
          style={{
            backgroundImage: 'url("/_next/static/media/bg-top.c54a3f7e.jpg")',
          }}
          aria-hidden="true"
        />
        <UIView
          className="absolute inset-0 -z-10 bg-[35%_bottom] bg-no-repeat mix-blend-screen sm:bg-[38%_bottom] md:bg-[40%_bottom] lg:bg-[44%_bottom] xl:bg-bottom forced-colors:hidden"
          style={{
            backgroundImage: 'url(/_next/static/media/bg-bottom.e4e0724b.jpg)',
          }}
          aria-hidden="true"
        />
        <UIView
          className="pointer-events-none absolute inset-0 z-10 px-4 sm:px-6"
          aria-hidden="true"
        >
          <UIView className="mx-auto flex h-full max-w-[calc(var(--width-7xl)+2px)] gap-[14px]">
            <UIView className="flex-1 border-x border-white/[7.5%]" />
            <UIView className="hidden flex-1 border-x border-white/[7.5%] sm:block" />
            <UIView className="hidden flex-1 border-x border-white/[7.5%] lg:block" />
          </UIView>
        </UIView>
        <UIView
          className="absolute inset-0 -z-10 bg-top opacity-10 forced-colors:hidden"
          style={{
            backgroundImage: 'url(/_next/static/media/bg-noise.67fd2524.png)',
          }}
          aria-hidden="true"
        />
        <UIView className="rounded-y-[2.5rem] dark:bg-black/80 px-4 pb-12 sm:px-6">
          <UIView className="relative">
            <UIView className="pointer-events-none absolute -inset-x-4 grid h-full grid-cols-1 gap-y-6 sm:-inset-x-6 sm:grid-cols-2 lg:grid-cols-3">
              <UIView className="relative h-64 sm:block lg:block">
                <UIView className="absolute inset-x-0 -inset-y-[calc(0.5rem+1px)] border-y border-white/[7.5%] text-white" />
              </UIView>
              <UIView className="relative h-64 sm:block lg:block">
                <UIView className="absolute inset-x-0 -inset-y-[calc(0.5rem+1px)] border-y border-white/[7.5%] text-white" />
              </UIView>
              <UIView className="relative h-64 sm:block lg:block">
                <UIView className="absolute inset-x-0 -inset-y-[calc(0.5rem+1px)] border-y border-white/[7.5%] text-white" />
              </UIView>
              <UIView className="relative h-64 sm:block lg:block">
                <UIView className="absolute inset-x-0 -inset-y-[calc(0.5rem+1px)] border-y border-white/[7.5%] text-white" />
              </UIView>
              <UIView className="relative h-64 sm:block lg:block">
                <UIView className="absolute inset-x-0 -inset-y-[calc(0.5rem+1px)] border-y border-white/[7.5%] text-white" />
              </UIView>
              <UIView className="relative h-64 sm:block lg:block">
                <UIView className="absolute inset-x-0 -inset-y-[calc(0.5rem+1px)] border-y border-white/[7.5%] text-white" />
              </UIView>
            </UIView>
            <UIView className="px-2 pb-8">
              <UIView className="mt-2 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((item) => (
                  <a key={item.img} className="group focus:outline-none">
                    <UIView className="relative flex h-64 items-center justify-center bg-white/[4%] transition-colors group-hover:bg-white/[6%] group-focus-visible:ring-1 group-focus-visible:ring-white">
                      <UIView className="absolute inset-[35%] rounded-full bg-white/15 blur-2xl" />
                      <UIView className="flex w-full flex-col gap-1 text-white  items-center justify-center max-h-full p-2">
                        <Image
                          alt={item.title}
                          className="w-full h-48 object-cover"
                          radius="lg"
                          src={item.img}
                        />
                      </UIView>
                    </UIView>
                    <UIView className="mt-2 truncate pt-2.5 text-sm font-semibold text-white">
                      {item.title}
                    </UIView>
                  </a>
                ))}
              </UIView>
            </UIView>
          </UIView>
        </UIView>
      </UIView>
    </UIView>
  );
}
export default FeedSection;
