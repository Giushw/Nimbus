import {FC} from "react";
import {Icon} from "@chakra-ui/react";
import type {WheaterIconProps} from "../../../types/common";

interface RainIconProps extends WheaterIconProps {}

const RainIcon: FC<RainIconProps> = ({pathStroke, w = 48, h = 44}) => (
  <Icon viewBox='0 0 48 44' fill="none" width={w} height={h} stroke={pathStroke}>
    <path
      stroke-linecap='round'
      stroke-linejoin='round'
      stroke-miterlimit='10'
      stroke-width='2'
      d='M37.189 27.599a9.31 9.31 0 0 0 9.31-9.31 9.31 9.31 0 0 0-9.31-9.31c-.806 0-1.583.113-2.329.305C33.8 4.544 29.575 1 24.516 1c-5.234 0-9.571 3.794-10.439 8.779a9.266 9.266 0 0 0-3.767-.801A9.31 9.31 0 0 0 1 18.288a9.31 9.31 0 0 0 9.31 9.31M9.948 32.917l-3.792 3.792M18.198 24.667l-5.708 5.708M11.167 39.636l-3.198 3.198M28.427 22.375 13.708 37.094M29.24 30.375 21.615 38M33.531 26.084l-2.375 2.375'
    />
  </Icon>
);

export default RainIcon;
