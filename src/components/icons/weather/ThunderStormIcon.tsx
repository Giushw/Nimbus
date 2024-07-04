import {FC} from "react";
import {Icon} from "@chakra-ui/react";
import type {WheaterIconProps} from "../../../types/common";

interface ThunderStormIconProps extends WheaterIconProps {}

const ThunderStormIcon: FC<ThunderStormIconProps> = ({pathStroke, w = 48, h = 50}) => (
  <Icon viewBox='0 0 48 50' fill="none" width={w} height={h} stroke={pathStroke}>
    <path
      stroke-linecap='round'
      stroke-linejoin='round'
      stroke-miterlimit='10'
      stroke-width='2'
      d='M37.189 8.979c-.806 0-1.583.113-2.329.305C33.8 4.544 29.575 1 24.516 1c-5.234 0-9.571 3.794-10.439 8.779a9.266 9.266 0 0 0-3.767-.801A9.31 9.31 0 0 0 1 18.288a9.31 9.31 0 0 0 9.31 9.31h26.879a9.31 9.31 0 0 0 9.31-9.31 9.309 9.309 0 0 0-9.31-9.309ZM19.803 27.6l-3.292 11.04 5.5-.75-3.5 10.125L30.636 33.64l-6.375-.625 3.75-5.415h-8.208Z'
    />
  </Icon>
);

export default ThunderStormIcon;
