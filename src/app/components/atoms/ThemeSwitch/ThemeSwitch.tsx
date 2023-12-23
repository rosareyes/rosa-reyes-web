'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
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
      className="flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-full bg-[#00553D] dark:bg-orange-100"
      layout
      transition={spring}
      role="button"
    >
      {isOn ? (
        <SunIcon className="h-4 w-4 text-yellow-100" />
      ) : (
        <MoonIcon className="h-4 w-4 text-slate-200" />
      )}
    </motion.div>
  );
};
