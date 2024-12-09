import React from 'react';
import { motion } from 'motion/react';
import UIView from '@/ui-kit/source/UIView';
import UIButton from '@/ui-kit/source/UIButton/button';
import FluentEmojiRobot from './ai-icon';

const AIScreen = () => {
  return (
    <UIView className="flex-1 flex flex-col relative">
      {/* Background image */}
      <UIView
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(/ai/unsplash.webp)`,
          filter: 'blur(15px)',
        }}
      />
      {/* Gradient overlay */}
      <UIView className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent" />
      {/* Content */}
      <UIView className="absolute top-0 left-0 w-full h-full z-10 flex flex-col">
        <UIView className="flex-1 flex flex-col gap-2 justify-center items-center">
          <UIView className="flex flex-col gap-2 justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <FluentEmojiRobot className="h-28 w-28" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-medium text-default-900"
            >
              Crystal AI
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm mb-4 text-center text-default-600"
            >
              Welcome to Crystal Code AI
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <UIButton size="sm" variant="flat">
                Let&apos;s start chatting
              </UIButton>
            </motion.div>
          </UIView>
        </UIView>
      </UIView>
    </UIView>
  );
};

export default AIScreen;
