import { poppings } from '@/app/fonts';
import clsx from 'clsx';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { FC, ReactNode, useRef } from 'react';

interface ExperienceCardProps {
  title: string;
  subtitle: string;
  year: string;
  stack: ReactNode;
  secondary?: boolean;
}

const ExperienceCard: FC<ExperienceCardProps> = ({
  title,
  subtitle,
  year,
  stack,
  secondary = false,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      className={clsx(
        'group relative flex h-full flex-col items-center overflow-hidden rounded-lg bg-green-50 pl-4 pr-2 pt-9 hover:bg-purple-100 dark:bg-purple-200 ',
        poppings.className,
        { 'bg-purple-100 shadow-xl dark:bg-purple-100': secondary },
      )}
    >
      <div
        className={clsx('group-hover:hidden dark:text-slate-200', {
          'dark:text-purple-200': secondary,
        })}
      >
        <span className="text-lg font-bold">{title}</span>

        <span className="block text-base">{year}</span>
        <span className="block font-bold uppercase">
          <a href="https://stylib.com" target="_blank">
            {subtitle}
          </a>
        </span>
      </div>
      <div className="hidden font-semibold transition-all group-hover:block dark:text-slate-200">
        {stack}
      </div>
      {secondary ? (
        <div className="mt-auto">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 672 397"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_173_1193)">
              <path
                d="M611.444 50.8094C611.444 42.6313 604.757 36 596.507 36H57.9376C49.6874 36 43 42.6313 43 50.8094V79.1448H611.444V50.8094Z"
                className="fill-[#F6FFFE]"
              />
              <path
                d="M43 79.1448V416.191C43 424.369 49.6874 431 57.9376 431H596.507C604.757 431 611.444 424.369 611.444 416.191V79.1448H43Z"
                fill=""
                className={clsx(
                  'fill-green-400  opacity-50 group-hover:fill-[url(#paint0_linear_173_1193)] group-hover:opacity-100 group-hover:transition-all dark:fill-purple-500',
                  { 'fill-green-100 opacity-100 ': secondary },
                )}
              />
              <path
                d="M225.098 131.661H93.505V142.94H225.098V131.661Z"
                fill="#C0EFFF"
              />
              <path
                d="M230.23 193.77H93.505V205.049H230.23V193.77Z"
                className="fill-green-300 group-hover:fill-[#61FF4B]"
              />
              <path
                d="M374.597 193.77H237.872V205.049H374.597V193.77Z"
                className="fill-green-500 group-hover:fill-[#FFD07D]"
              />
              <path
                d="M148.88 170.593H93.0608V181.873H148.88V170.593Z"
                className="fill-green-500 group-hover:fill-[#FFD07D]"
              />
              <path
                d="M200.528 170.593H159.301V181.873H200.528V170.593Z"
                fill="#C0EFFF"
              />
              <path
                d="M230.23 170.593H209.617V181.873H230.23V170.593Z"
                className="fill-dimWhite group-hover:fill-[#FF4E4E]"
              />
              <path
                d="M258.485 170.593H237.872V181.873H258.485V170.593Z"
                fill="#C0EFFF"
              />
              <path
                d="M339.343 170.593H266.119V181.873H339.343V170.593Z"
                className="fill-dimWhite group-hover:fill-[#FF4E4E]"
              />
              <path
                d="M120.97 259.104H93.505V270.384H120.97V259.104Z"
                fill="#C0EFFF"
              />
              <path
                d="M159.301 346.2H131.836V357.479H159.301V346.2Z"
                className="fill-dimWhite group-hover:fill-[#FF4E4E]"
              />
              <path
                d="M120.97 367.204H93.505V378.484H120.97V367.204Z"
                className="fill-dimWhite group-hover:fill-[#FF4E4E]"
              />
              <path
                d="M219.932 259.104H131.836V270.384H219.932V259.104Z"
                className="fill-dimWhite group-hover:fill-[#FF4E4E]"
              />
              <path
                d="M374.597 280.956H148.88V292.713H374.597V280.956Z"
                className="fill-green-500 group-hover:fill-[#FFD07D]"
              />
              <path
                d="M311.754 302.841H148.88V314.121H311.754V302.841Z"
                fill="#C0EFFF"
              />
              <path
                d="M485.972 302.841H323.097V314.121H485.972V302.841Z"
                fill="#C0EFFF"
              />
              <path
                d="M306.235 324.726H148.88V336.006H306.235V324.726Z"
                className="fill-green-500 group-hover:fill-[#FFD07D]"
              />
              <path
                d="M148.88 235.927H93.0608V247.207H148.88V235.927Z"
                className="fill-dimWhite group-hover:fill-[#FF4E4E]"
              />
              <path
                d="M258.485 235.927H159.301V247.207H258.485V235.927Z"
                fill="#C0EFFF"
              />
              <path
                d="M544.62 66.1125C549.376 66.1125 553.232 62.2889 553.232 57.5724C553.232 52.8558 549.376 49.0323 544.62 49.0323C539.863 49.0323 536.008 52.8558 536.008 57.5724C536.008 62.2889 539.863 66.1125 544.62 66.1125Z"
                className="fill-dimWhite group-hover:fill-[#FFD07D]"
              />
              <path
                d="M573.623 66.1125C578.38 66.1125 582.235 62.2889 582.235 57.5724C582.235 52.8558 578.38 49.0323 573.623 49.0323C568.867 49.0323 565.011 52.8558 565.011 57.5724C565.011 62.2889 568.867 66.1125 573.623 66.1125Z"
                className="fill-green-400 group-hover:fill-[#FF4E4E]"
              />
              <path
                d="M515.616 66.1125C520.373 66.1125 524.229 62.2889 524.229 57.5724C524.229 52.8558 520.373 49.0323 515.616 49.0323C510.86 49.0323 507.004 52.8558 507.004 57.5724C507.004 62.2889 510.86 66.1125 515.616 66.1125Z"
                className="fill-green-300 group-hover:fill-[#61FF4B]"
              />
              <path
                d="M635.076 164.299H521.926C515.893 164.299 511.002 169.191 511.002 175.225V229.543C515 233.542 519.5 238.043 521.926 240.469H635.076C641.109 240.469 646 235.577 646 229.543V175.225C646 169.191 641.109 164.299 635.076 164.299Z"
                className="fill-green-200 group-hover:fill-[#FF4E4E]"
              />
              <path
                d="M511.002 229.543L497.644 248.639C495.809 251.057 498.532 254.274 501.255 252.909L521.926 240.469L511.002 229.543Z"
                className="fill-green-200 group-hover:fill-[#FF4E4E]"
              />
              <path
                d="M554.285 200.845C553.824 201.561 553.084 202.079 552.08 202.392C553.092 202.705 553.824 203.223 554.285 203.939C554.746 204.655 554.976 205.741 554.976 207.197V214.059C554.976 215.087 555.239 215.877 555.774 216.42C556.308 216.963 557.09 217.234 558.134 217.234H558.916V222.467H556.407C553.725 222.467 551.694 221.809 550.304 220.492C548.922 219.176 548.223 217.275 548.223 214.783V207.016C548.223 206.358 548.058 205.856 547.729 205.51C547.4 205.165 546.931 204.992 546.323 204.992H544.891V199.759H546.323C546.931 199.759 547.4 199.586 547.729 199.241C548.058 198.895 548.223 198.402 548.223 197.735V189.969C548.223 187.484 548.914 185.575 550.304 184.259C551.686 182.942 553.725 182.284 556.407 182.284H558.916V187.517H558.134C557.098 187.517 556.308 187.788 555.774 188.331C555.239 188.874 554.976 189.664 554.976 190.693V197.554C554.976 199.011 554.746 200.097 554.285 200.812V200.845Z"
                fill="white"
              />
              <path
                d="M575.4 182.309H581.586V222.467H575.4V182.309Z"
                fill="white"
              />
              <path
                d="M612.094 199.767V205H610.663C610.054 205 609.585 205.173 609.256 205.518C608.927 205.864 608.763 206.366 608.763 207.024V214.791C608.763 217.275 608.072 219.184 606.682 220.501C605.3 221.817 603.26 222.475 600.578 222.475H598.07V217.243H598.851C599.887 217.243 600.677 216.971 601.212 216.428C601.746 215.885 602.01 215.095 602.01 214.067V207.205C602.01 205.749 602.24 204.663 602.701 203.947C603.161 203.231 603.893 202.721 604.905 202.4C603.893 202.088 603.161 201.569 602.701 200.853C602.24 200.138 602.01 199.052 602.01 197.595V190.734C602.01 189.705 601.746 188.915 601.212 188.372C600.677 187.829 599.896 187.558 598.851 187.558H598.07V182.325H600.578C603.26 182.325 605.292 182.983 606.682 184.3C608.064 185.616 608.763 187.517 608.763 190.01V197.776C608.763 198.435 608.927 198.936 609.256 199.282C609.585 199.628 610.054 199.8 610.663 199.8H612.094V199.767Z"
                fill="white"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_173_1193"
                x1="303.616"
                y1="359.88"
                x2="487.174"
                y2="-174.606"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00D0B7" />
                <stop offset="1" stopColor="#008FB6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ) : (
        <div className="mt-auto">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 672 397"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_173_1193)">
              <path
                d="M611.444 50.8094C611.444 42.6313 604.757 36 596.507 36H57.9376C49.6874 36 43 42.6313 43 50.8094V79.1448H611.444V50.8094Z"
                className="fill-[#F6FFFE]"
              />
              <path
                d="M43 79.1448V416.191C43 424.369 49.6874 431 57.9376 431H596.507C604.757 431 611.444 424.369 611.444 416.191V79.1448H43Z"
                fill=""
                className={
                  'fill-green-400  opacity-50 group-hover:fill-[url(#paint0_linear_173_1193)] group-hover:opacity-100 group-hover:transition-all dark:fill-purple-500'
                }
              />
              <path
                d="M225.098 131.661H93.505V142.94H225.098V131.661Z"
                fill="#C0EFFF"
              />
              <path
                d="M230.23 193.77H93.505V205.049H230.23V193.77Z"
                className="fill-green-300 group-hover:fill-[#61FF4B]"
              />
              <path
                d="M374.597 193.77H237.872V205.049H374.597V193.77Z"
                className="fill-green-500 group-hover:fill-[#FFD07D]"
              />
              <path
                d="M148.88 170.593H93.0608V181.873H148.88V170.593Z"
                className="fill-green-500 group-hover:fill-[#FFD07D]"
              />
              <path
                d="M200.528 170.593H159.301V181.873H200.528V170.593Z"
                fill="#C0EFFF"
              />
              <path
                d="M230.23 170.593H209.617V181.873H230.23V170.593Z"
                className="fill-dimWhite group-hover:fill-[#FF4E4E]"
              />
              <path
                d="M258.485 170.593H237.872V181.873H258.485V170.593Z"
                fill="#C0EFFF"
              />
              <path
                d="M339.343 170.593H266.119V181.873H339.343V170.593Z"
                className="fill-dimWhite group-hover:fill-[#FF4E4E]"
              />
              <path
                d="M120.97 259.104H93.505V270.384H120.97V259.104Z"
                fill="#C0EFFF"
              />
              <path
                d="M159.301 346.2H131.836V357.479H159.301V346.2Z"
                className="fill-dimWhite group-hover:fill-[#FF4E4E]"
              />
              <path
                d="M120.97 367.204H93.505V378.484H120.97V367.204Z"
                className="fill-dimWhite group-hover:fill-[#FF4E4E]"
              />
              <path
                d="M219.932 259.104H131.836V270.384H219.932V259.104Z"
                className="fill-dimWhite group-hover:fill-[#FF4E4E]"
              />
              <path
                d="M374.597 280.956H148.88V292.713H374.597V280.956Z"
                className="fill-green-500 group-hover:fill-[#FFD07D]"
              />
              <path
                d="M311.754 302.841H148.88V314.121H311.754V302.841Z"
                fill="#C0EFFF"
              />
              <path
                d="M485.972 302.841H323.097V314.121H485.972V302.841Z"
                fill="#C0EFFF"
              />
              <path
                d="M306.235 324.726H148.88V336.006H306.235V324.726Z"
                className="fill-green-500 group-hover:fill-[#FFD07D]"
              />
              <path
                d="M148.88 235.927H93.0608V247.207H148.88V235.927Z"
                className="fill-dimWhite group-hover:fill-[#FF4E4E]"
              />
              <path
                d="M258.485 235.927H159.301V247.207H258.485V235.927Z"
                fill="#C0EFFF"
              />
              <path
                d="M544.62 66.1125C549.376 66.1125 553.232 62.2889 553.232 57.5724C553.232 52.8558 549.376 49.0323 544.62 49.0323C539.863 49.0323 536.008 52.8558 536.008 57.5724C536.008 62.2889 539.863 66.1125 544.62 66.1125Z"
                className="fill-dimWhite group-hover:fill-[#FFD07D]"
              />
              <path
                d="M573.623 66.1125C578.38 66.1125 582.235 62.2889 582.235 57.5724C582.235 52.8558 578.38 49.0323 573.623 49.0323C568.867 49.0323 565.011 52.8558 565.011 57.5724C565.011 62.2889 568.867 66.1125 573.623 66.1125Z"
                className="fill-green-400 group-hover:fill-[#FF4E4E]"
              />
              <path
                d="M515.616 66.1125C520.373 66.1125 524.229 62.2889 524.229 57.5724C524.229 52.8558 520.373 49.0323 515.616 49.0323C510.86 49.0323 507.004 52.8558 507.004 57.5724C507.004 62.2889 510.86 66.1125 515.616 66.1125Z"
                className="fill-green-300 group-hover:fill-[#61FF4B]"
              />
              <path
                d="M635.076 164.299H521.926C515.893 164.299 511.002 169.191 511.002 175.225V229.543C515 233.542 519.5 238.043 521.926 240.469H635.076C641.109 240.469 646 235.577 646 229.543V175.225C646 169.191 641.109 164.299 635.076 164.299Z"
                className="fill-green-200 group-hover:fill-[#FF4E4E]"
              />
              <path
                d="M511.002 229.543L497.644 248.639C495.809 251.057 498.532 254.274 501.255 252.909L521.926 240.469L511.002 229.543Z"
                className="fill-green-200 group-hover:fill-[#FF4E4E]"
              />
              <path
                d="M554.285 200.845C553.824 201.561 553.084 202.079 552.08 202.392C553.092 202.705 553.824 203.223 554.285 203.939C554.746 204.655 554.976 205.741 554.976 207.197V214.059C554.976 215.087 555.239 215.877 555.774 216.42C556.308 216.963 557.09 217.234 558.134 217.234H558.916V222.467H556.407C553.725 222.467 551.694 221.809 550.304 220.492C548.922 219.176 548.223 217.275 548.223 214.783V207.016C548.223 206.358 548.058 205.856 547.729 205.51C547.4 205.165 546.931 204.992 546.323 204.992H544.891V199.759H546.323C546.931 199.759 547.4 199.586 547.729 199.241C548.058 198.895 548.223 198.402 548.223 197.735V189.969C548.223 187.484 548.914 185.575 550.304 184.259C551.686 182.942 553.725 182.284 556.407 182.284H558.916V187.517H558.134C557.098 187.517 556.308 187.788 555.774 188.331C555.239 188.874 554.976 189.664 554.976 190.693V197.554C554.976 199.011 554.746 200.097 554.285 200.812V200.845Z"
                fill="white"
              />
              <path
                d="M575.4 182.309H581.586V222.467H575.4V182.309Z"
                fill="white"
              />
              <path
                d="M612.094 199.767V205H610.663C610.054 205 609.585 205.173 609.256 205.518C608.927 205.864 608.763 206.366 608.763 207.024V214.791C608.763 217.275 608.072 219.184 606.682 220.501C605.3 221.817 603.26 222.475 600.578 222.475H598.07V217.243H598.851C599.887 217.243 600.677 216.971 601.212 216.428C601.746 215.885 602.01 215.095 602.01 214.067V207.205C602.01 205.749 602.24 204.663 602.701 203.947C603.161 203.231 603.893 202.721 604.905 202.4C603.893 202.088 603.161 201.569 602.701 200.853C602.24 200.138 602.01 199.052 602.01 197.595V190.734C602.01 189.705 601.746 188.915 601.212 188.372C600.677 187.829 599.896 187.558 598.851 187.558H598.07V182.325H600.578C603.26 182.325 605.292 182.983 606.682 184.3C608.064 185.616 608.763 187.517 608.763 190.01V197.776C608.763 198.435 608.927 198.936 609.256 199.282C609.585 199.628 610.054 199.8 610.663 199.8H612.094V199.767Z"
                fill="white"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_173_1193"
                x1="303.616"
                y1="359.88"
                x2="487.174"
                y2="-174.606"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00D0B7" />
                <stop offset="1" stopColor="#008FB6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}
    </motion.div>
  );
};

export default ExperienceCard;
