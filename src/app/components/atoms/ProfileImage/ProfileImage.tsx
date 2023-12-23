import { motion } from 'framer-motion';
import { FC } from 'react';

export const ProfileImage: FC<any> = ({ containerRef }) => {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: 'rgba(255, 255, 255, 0)',
    },
    visible: {
      pathLength: 1,
      fill: 'rgba(000, 000, 00, 1)',
    },
  };
  return (
    <motion.div
      ref={containerRef}
      className="relative order-first mb-[50px] flex w-full max-w-sm justify-center pt-[40px] lg:order-none lg:max-w-md"
    >
      <img
        className="h-auto w-full max-w-sm dark:hidden lg:max-w-md"
        src="rosa-light.png"
        alt="front-end-dev"
      />
      <img
        className="hidden h-auto w-full max-w-sm dark:block lg:max-w-md"
        src="rosa-dark.png"
        alt="front-end-dev"
      />
      <div className="absolute right-0 top-0">
        <span className="mb-2 font-semibold dark:text-blue-100">
          coffee addict
        </span>
        <motion.svg
          width="64"
          height="45"
          viewBox="0 0 64 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={'relative stroke-purple-100 dark:stroke-slate-300'}
          style={{
            overflow: 'visible',
            strokeWidth: 2,
            strokeLinejoin: 'round',
            strokeLinecap: 'round',
          }}
        >
          <motion.path
            d="M62.71 0.808224C53.207 20.6672 31.42 33.6072 9.90698 37.5762C10.746 37.2412 11.568 36.8842 12.354 36.4882C13.498 35.9122 14.162 35.7912 14.484 34.4452C14.599 33.9632 14.332 33.5572 13.885 33.3892L13.546 33.2622C12.653 32.9262 12.002 34.4402 12.89 34.8172C10.845 33.9492 3.83797 37.5602 1.14797 38.6972C1.12297 38.6992 1.09696 38.7022 1.07196 38.7032C0.863955 38.7172 0.674975 38.8192 0.522975 38.9632C-0.212025 39.3322 -0.156033 40.3172 0.633967 40.6292C3.54697 41.7762 6.45897 42.9242 9.37197 44.0722C10.305 44.4402 10.992 42.8342 10.061 42.4392C8.23497 41.6642 6.40896 40.8932 4.58196 40.1202C28.151 37.3132 53.51 23.4802 63.378 1.19821C63.576 0.751208 62.928 0.355224 62.71 0.808224Z"
            variants={icon}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'loop',
              repeatDelay: 10,
              delay: 1,
            }}
          />
        </motion.svg>
      </div>
      <div className="absolute bottom-[0px] left-0">
        <span className="-mb-1 -ml-5 flex font-semibold dark:text-blue-100">
          gamer
        </span>
        <motion.svg
          width="83"
          height="41"
          viewBox="0 0 83 41"
          className={'stroke-purple-100 dark:stroke-slate-300'}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            overflow: 'visible',
            strokeWidth: 2,
            strokeLinejoin: 'round',
            strokeLinecap: 'round',
          }}
        >
          <motion.path
            /* fill="#C79FBE" */
            d="M0.173691 18.1778C0.223691 17.9838 0.5567 18.0169 0.5327 18.2269C-0.0263004 23.1059 8.07169 28.0908 11.5187 30.3818C15.0487 32.7288 18.8397 34.6998 22.8447 36.1018C30.1147 38.6458 38.0357 39.2709 45.5337 37.3559C62.4177 33.0459 68.8137 18.1549 73.7057 3.04285C71.2317 1.64585 62.5437 8.57485 60.0567 9.91885C59.1137 10.4279 58.3197 9.06085 59.2187 8.48585C63.8187 5.54585 68.6077 2.88285 73.3127 0.114851C73.6917 -0.108149 74.3457 -0.00914988 74.5377 0.43585C74.9217 1.32685 75.3047 2.21885 75.6887 3.10985C78.2257 7.81885 80.3157 12.6608 81.9857 17.7498C82.2957 18.6948 80.7557 19.3768 80.3517 18.4388C79.2477 15.8738 78.1437 13.3088 77.0397 10.7438C76.7767 10.1328 76.3817 8.83785 75.9187 7.47685C75.5727 6.75985 75.2027 6.05085 74.8357 5.34085C72.2917 13.1508 69.4597 21.1039 64.2477 27.5469C58.5487 34.5929 50.2767 38.8018 41.3317 39.9168C32.4117 41.0288 23.4357 38.9289 15.5847 34.6549C10.6267 31.9569 -1.59631 25.0658 0.173691 18.1778Z"
            variants={icon}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'loop',
              repeatDelay: 10,
            }}
          />
        </motion.svg>
      </div>
      <div className="absolute -bottom-[50px] -right-[0]">
        <motion.svg
          className={'stroke-purple-100 dark:stroke-slate-300'}
          width="30"
          height="71"
          viewBox="0 0 30 71"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            overflow: 'visible',
            strokeWidth: 2,
            strokeLinejoin: 'round',
            strokeLinecap: 'round',
          }}
        >
          <motion.path
            /* fill="#C79FBE" */
            d="M27.2186 69.7207C31.7424 48.1749 22.3063 24.6573 7.63524 8.43013C8.09788 9.20609 8.53365 9.98916 8.91712 10.7814C9.47548 11.9341 9.92922 12.4337 9.36683 13.6983C9.16519 14.1509 8.70641 14.3111 8.24934 14.1728L7.90292 14.0676C6.98958 13.7917 7.39284 12.1937 8.32713 12.4341C6.17564 11.8804 2.80615 4.75413 1.36109 2.21629C1.34246 2.1995 1.32362 2.1813 1.30438 2.16531C1.14772 2.02777 1.05965 1.8319 1.02647 1.62517C0.667084 0.885419 1.31021 0.137278 2.12718 0.369677C5.13752 1.22935 8.14767 2.08763 11.1586 2.94651C12.1232 3.22135 11.6926 4.91421 10.7132 4.66203C8.79217 4.16762 6.87354 3.67004 4.9529 3.17344C21.9629 19.7275 33.6927 46.1253 27.986 69.817C27.8716 70.2923 27.1163 70.2129 27.2186 69.7207Z"
            variants={icon}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'loop',
              repeatDelay: 10,
              delay: 2,
            }}
          />
        </motion.svg>
        <span className="font-semibold dark:text-blue-100">huh?</span>
      </div>
      <div className="absolute bottom-[250px] left-0">
        <span className="-ml-5 mb-2 flex font-semibold dark:text-blue-100">
          geek
        </span>
        <motion.svg
          className={'-scale-x-100 stroke-purple-100 dark:stroke-slate-300'}
          width="64"
          height="45"
          viewBox="0 0 64 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            overflow: 'visible',
            strokeWidth: 2,
            strokeLinejoin: 'round',
            strokeLinecap: 'round',
          }}
        >
          <motion.path
            /* fill="#C79FBE" */
            d="M62.71 0.808224C53.207 20.6672 31.42 33.6072 9.90698 37.5762C10.746 37.2412 11.568 36.8842 12.354 36.4882C13.498 35.9122 14.162 35.7912 14.484 34.4452C14.599 33.9632 14.332 33.5572 13.885 33.3892L13.546 33.2622C12.653 32.9262 12.002 34.4402 12.89 34.8172C10.845 33.9492 3.83797 37.5602 1.14797 38.6972C1.12297 38.6992 1.09696 38.7022 1.07196 38.7032C0.863955 38.7172 0.674975 38.8192 0.522975 38.9632C-0.212025 39.3322 -0.156033 40.3172 0.633967 40.6292C3.54697 41.7762 6.45897 42.9242 9.37197 44.0722C10.305 44.4402 10.992 42.8342 10.061 42.4392C8.23497 41.6642 6.40896 40.8932 4.58196 40.1202C28.151 37.3132 53.51 23.4802 63.378 1.19821C63.576 0.751208 62.928 0.355224 62.71 0.808224Z"
            variants={icon}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'loop',
              repeatDelay: 10,
              delay: 3,
            }}
          />
        </motion.svg>
      </div>
    </motion.div>
  );
};
