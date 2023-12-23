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
        'mb-12 block pt-[40px] text-6xl font-bold text-green-600 transition-colors dark:text-blue-100 2xl:text-7xl',
      )}
    >
      {subtitle}
    </h2>
  );
};

export default Subtitle;
