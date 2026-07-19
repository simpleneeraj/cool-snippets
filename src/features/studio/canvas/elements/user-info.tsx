'use client';

import React from 'react';
import { UserRound } from 'lucide-react';
import useAsset from '@features/studio/lib/assets/use-asset';
import { UserInfoPropertiesType } from '@features/studio/model/editor';

type Props = {
  properties?: UserInfoPropertiesType;
  style?: React.CSSProperties;
};

const UserInfoElement: React.FC<Props> = ({ properties, style }) => {
  const avatar = useAsset(properties?.avatar);
  const showAvatar = properties?.showAvatar ?? true;

  return (
    <div
      className="flex w-max items-center gap-2.5 select-none"
      style={{ color: style?.color, fontSize: style?.fontSize }}
    >
      {showAvatar &&
        (avatar ? (
          <img
            src={avatar}
            alt={properties?.name ?? 'Avatar'}
            draggable={false}
            className="size-10 shrink-0 rounded-full object-cover"
          />
        ) : (
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/15">
            <UserRound className="size-5 opacity-80" />
          </span>
        ))}
      <span className="flex flex-col leading-tight">
        <span className="font-semibold">{properties?.name}</span>
        <span className="opacity-70">{properties?.handle}</span>
      </span>
    </div>
  );
};

export default UserInfoElement;
