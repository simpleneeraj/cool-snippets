import React from 'react';
import { Image } from '@heroui/react';
import UIText from '@/app-kit/source/UIText';
import UIView from '@/app-kit/source/UIView';
import UIDivider from '@/app-kit/source/UIDivider';
import { Frame } from '@/components/elements/frame';
import UIButton from '@/app-kit/source/UIButton/button';
import { languagesArray, LanguagesEnum } from '@/plugins/codemirror/languages';

type LanguagesScreenProps = {
  value?: LanguagesEnum;
  onSelect?: (lang: LanguagesEnum) => void;
};

const LanguagesScreen: React.FC<LanguagesScreenProps> = ({
  value,
  onSelect,
}) => {
  const renderButton = (lang: (typeof languagesArray)[number]) => (
    <UIButton
      radius="none"
      key={lang.value}
      variant={lang.value === value ? 'flat' : 'light'}
      className="justify-between"
      onClick={() => onSelect?.(lang.value as LanguagesEnum)}
    >
      <UIView className="flex items-center gap-2">
        <Image
          radius="none"
          alt={lang.name}
          src={lang.icon}
          className="h-5 w-5"
        />
        <UIText className="text-sm text-default-600">{lang.name}</UIText>
      </UIView>
    </UIButton>
  );

  return (
    <>
      <UIDivider className="bg-default-200 bg-opacity-50" />
      {/* <Frame title="Popular">
        <UIView className="flex flex-col w-full">
          {languagesArray.slice(0, 5).map((lang) => renderButton(lang, true))}
        </UIView>
      </Frame> */}
      <Frame title="All">
        <UIView className="flex flex-col w-full">
          {languagesArray.map((lang) => renderButton(lang))}
        </UIView>
      </Frame>
    </>
  );
};

export default LanguagesScreen;
