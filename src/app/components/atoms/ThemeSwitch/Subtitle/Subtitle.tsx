import { inter } from '@/app/fonts';
import clsx from 'clsx';
import { FC } from 'react';

interface SubtitleProps {
  subtitle: string;
}

const Subtitle: FC<SubtitleProps> = ({ subtitle }) => {
  return (
    <h2
      style={{
        fontSize: '70px',
      }}
      className={clsx(
        inter.className,
        'block pb-8 pt-[40px] font-bold text-[#001E16] transition-colors dark:text-blue-100',
      )}
    >
      {subtitle}
    </h2>
  );
};

export default Subtitle;
