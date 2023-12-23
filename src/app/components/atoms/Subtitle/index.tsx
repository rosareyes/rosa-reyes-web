import { inter } from '@/app/fonts';
import clsx from 'clsx';
import { FC } from 'react';

interface SubtitleProps {
  subtitle: string;
}

const Subtitle: FC<SubtitleProps> = ({ subtitle }) => {
  return (
    <h2
      className={clsx(
        inter.className,
        'mb-8 block text-4xl font-bold text-green-600 transition-colors dark:text-blue-100 lg:mb-12 lg:pt-[40px] lg:text-5xl 2xl:text-6xl',
      )}
    >
      {subtitle}
    </h2>
  );
};

export default Subtitle;
