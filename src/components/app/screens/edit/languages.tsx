import React from 'react';
import { Image } from '@nextui-org/react';
import UIText from '@/ui-kit/source/UIText';
import UIView from '@/ui-kit/source/UIView';
import UIDivider from '@/ui-kit/source/UIDivider';
import { Frame } from '@/components/elements/frame';
import UIButton from '@/ui-kit/source/UIButton/button';
import { languagesArray } from '@/plugins/codemirror/languages';

/**
 * NOTE :- Most Popular on Top
 * @returns
 */
const LanguagesScreen = () => {
  return (
    <React.Fragment>
      <UIDivider className="bg-default-200 bg-opacity-50" />
      <Frame title="Popular">
        <UIView className="flex flex-col w-full">
          {languagesArray.slice(0, 5).map((lang, i) => (
            <UIButton
              key={i}
              variant={'light'}
              radius={'none'}
              className={'justify-between'}
              onPress={() => console.log(lang.value)}
            >
              <UIView className="flex items-center gap-2">
                <Image
                  radius="none"
                  alt="swift"
                  src={lang.icon}
                  className="h-5 w-5"
                />
                <UIText className="text-sm text-default-600">
                  {lang.name}
                </UIText>
              </UIView>
            </UIButton>
          ))}
        </UIView>
      </Frame>
      <Frame title="All">
        <UIView className="flex flex-col w-full">
          {languagesArray.map((lang, i) => (
            <UIButton
              key={i}
              variant={'light'}
              radius={'none'}
              className={'justify-between'}
              onPress={() => console.log(lang.value)}
            >
              <UIView className="flex items-center gap-2">
                <Image
                  radius="none"
                  alt="swift"
                  src={lang.icon}
                  className="h-5 w-5"
                />
                <UIText className="text-sm text-default-600">
                  {lang.name}
                </UIText>
              </UIView>
            </UIButton>
          ))}
        </UIView>
      </Frame>
    </React.Fragment>
  );
};
export default LanguagesScreen;
