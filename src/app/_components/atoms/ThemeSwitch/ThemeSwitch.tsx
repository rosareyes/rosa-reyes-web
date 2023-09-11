'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri';

export const ThemeSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    if (isOn) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };
  return (
    <motion.div
      whileTap={{ rotate: 360 }}
      whileHover={{ scale: 1.2 }}
      onClick={toggleSwitch}
      className="cursor-pointer flex h-[24px] w-[24px] items-center justify-center rounded-full dark:bg-black/90 bg-zinc-500"
      layout
      transition={spring}
    >
      {isOn ? (
        <RiSunFill className="h-4 w-4 text-yellow-300" />
      ) : (
        <RiMoonClearFill className="h-4 w-4 text-slate-200" />
      )}
    </motion.div>
  );
};
