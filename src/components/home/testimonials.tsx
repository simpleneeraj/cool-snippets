import React from 'react';

type TestimonialsProps = object;

const Testimonials: React.FC<TestimonialsProps> = ({}) => {
  return (
    <div className="mx-auto w-full  max-w-(--breakpoint-lg) py-16">
      <ul className="grid list-none grid-cols-1 gap-6 md:grid-cols-2">
        <li className="group h-full rounded-2xl transition-shadow hover:shadow-[0_8px_16px_0_#0000000A]">
          <div className="relative h-full break-inside-avoid rounded-2xl border border-default-100 bg-default-50/50 [--accent-color:#20808D]">
            <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(100%_100%_at_50%_0%,var(--accent-color),transparent)] opacity-5 transition-opacity group-hover:opacity-10" />
            <div className="relative flex h-full flex-col gap-10 p-6 sm:p-10 cursor-default">
              <div className="h-8">
                <img
                  src="https://assets.dub.co/testimonials/companies/perplexity.svg"
                  alt="Perplexity"
                  className="h-7"
                />
              </div>
              <div className="text-[15px] leading-6 text-default-500 [&_strong]:font-semibold [&_strong]:text-default-700 [&_a]:font-medium [&_a]:text-default-700 [&_a]:underline [&_a]:decoration-dotted [&_a]:underline-offset-2">
                <p>
                  <strong>Dub has been a game-changer</strong> for our marketing
                  campaigns – our links get hundreds of thousands of clicks
                  monthly and with Dub, we are able to easily design our link
                  embeds,{' '}
                  <a target="_blank" href="/help/article/dub-analytics">
                    attribute clicks
                  </a>
                  , and visualize our data.
                </p>
              </div>
              <div className="flex grow flex-col justify-end">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col space-y-0.5">
                    <div className="text-base font-medium text-default-900">
                      Johnny Ho
                    </div>
                    <div className="text-sm text-default-500">
                      Co-founder{/* */}, {/* */}Perplexity
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute -inset-[50%] mask-[radial-gradient(black_50%,transparent_80%)]">
                      <div className="absolute inset-x-0 top-1/4 h-px bg-default-200" />
                      <div className="absolute inset-x-0 bottom-1/4 h-px bg-default-200" />
                      <div className="absolute inset-y-0 left-1/4 w-px bg-default-200" />
                      <div className="absolute inset-y-0 right-1/4 w-px bg-default-200" />
                    </div>
                    <img
                      alt="Johnny Ho"
                      loading="lazy"
                      width={300}
                      height={300}
                      decoding="async"
                      data-nimg={1}
                      className="blur-0 size-12 border border-default-200"
                      style={{ color: 'transparent' }}
                      src="https://assets.dub.co/testimonials/people/johnny-ho.jpeg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <a
              href="https://pplx.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-2 top-2 flex items-center gap-1 rounded-full border border-default-200 bg-white py-1 pl-3 pr-2.5 text-xs font-medium text-default-500 -translate-y-1 opacity-0 transition-[opacity,transform] focus-visible:translate-y-0 focus-visible:opacity-100 group-hover:translate-y-0 group-hover:opacity-100"
            >
              pplx.ai
              <div className="rounded-full bg-default-100 p-px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-up-right size-2.5"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </div>
            </a>
          </div>
        </li>
        <li className="group h-full rounded-2xl transition-shadow hover:shadow-[0_8px_16px_0_#0000000A]">
          <div className="relative h-full break-inside-avoid rounded-2xl border border-default-100 bg-default-50/50 [--accent-color:#20808D]">
            <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(100%_100%_at_50%_0%,var(--accent-color),transparent)] opacity-5 transition-opacity group-hover:opacity-10" />
            <div className="relative flex h-full flex-col gap-10 p-6 sm:p-10 cursor-default">
              <div className="h-8">
                <img
                  src="https://assets.dub.co/testimonials/companies/perplexity.svg"
                  alt="Perplexity"
                  className="h-7"
                />
              </div>
              <div className="text-[15px] leading-6 text-default-500 [&_strong]:font-semibold [&_strong]:text-default-700 [&_a]:font-medium [&_a]:text-default-700 [&_a]:underline [&_a]:decoration-dotted [&_a]:underline-offset-2">
                <p>
                  <strong>Dub has been a game-changer</strong> for our marketing
                  campaigns – our links get hundreds of thousands of clicks
                  monthly and with Dub, we are able to easily design our link
                  embeds,{' '}
                  <a target="_blank" href="/help/article/dub-analytics">
                    attribute clicks
                  </a>
                  , and visualize our data.
                </p>
              </div>
              <div className="flex grow flex-col justify-end">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col space-y-0.5">
                    <div className="text-base font-medium text-default-900">
                      Johnny Ho
                    </div>
                    <div className="text-sm text-default-500">
                      Co-founder{/* */}, {/* */}Perplexity
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute -inset-[50%] mask-[radial-gradient(black_50%,transparent_80%)]">
                      <div className="absolute inset-x-0 top-1/4 h-px bg-default-200" />
                      <div className="absolute inset-x-0 bottom-1/4 h-px bg-default-200" />
                      <div className="absolute inset-y-0 left-1/4 w-px bg-default-200" />
                      <div className="absolute inset-y-0 right-1/4 w-px bg-default-200" />
                    </div>
                    <img
                      alt="Johnny Ho"
                      loading="lazy"
                      width={300}
                      height={300}
                      decoding="async"
                      data-nimg={1}
                      className="blur-0 size-12 border border-default-200"
                      style={{ color: 'transparent' }}
                      src="https://assets.dub.co/testimonials/people/johnny-ho.jpeg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <a
              href="https://pplx.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-2 top-2 flex items-center gap-1 rounded-full border border-default-200 bg-white py-1 pl-3 pr-2.5 text-xs font-medium text-default-500 -translate-y-1 opacity-0 transition-[opacity,transform] focus-visible:translate-y-0 focus-visible:opacity-100 group-hover:translate-y-0 group-hover:opacity-100"
            >
              pplx.ai
              <div className="rounded-full bg-default-100 p-px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-up-right size-2.5"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </div>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Testimonials;
