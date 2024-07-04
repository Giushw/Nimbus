import {FC} from "react";
import {Icon} from "@chakra-ui/react";
import type {WheaterIconProps} from "../../../types/common";

interface RainShowerIconProps extends WheaterIconProps {}

const RainShowerIcon: FC<RainShowerIconProps> = ({pathStroke, w = 48, h = 51}) => (
  <Icon viewBox='0 0 48 51' fill="none" width={w} height={h} stroke={pathStroke}>
    <path
      stroke-linecap='round'
      stroke-linejoin='round'
      stroke-miterlimit='10'
      stroke-width='2'
      d='M37.189 27.599a9.31 9.31 0 0 0 9.31-9.31 9.31 9.31 0 0 0-9.31-9.31c-.806 0-1.583.113-2.329.305C33.8 4.544 29.575 1 24.516 1c-5.234 0-9.571 3.794-10.439 8.779a9.266 9.266 0 0 0-3.767-.801A9.31 9.31 0 0 0 1 18.288a9.31 9.31 0 0 0 9.31 9.31M16.183 22.36v13.765M23.933 16.894V43.82M32.183 24.86v14.25M16.183 40.443v1.5M23.933 48.11v1.5M32.183 43.07v1.5'
    />
  </Icon>
);

export default RainShowerIcon;
