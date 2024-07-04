import {FC} from "react";
import {Icon} from "@chakra-ui/react";
import type {WheaterIconProps} from "../../../types/common";

interface OvercastIconProps extends WheaterIconProps {}

const OvercastIcon: FC<OvercastIconProps> = ({pathStroke, w = 55, h = 42}) => (
  <Icon viewBox='0 0 55 42' fill="none" width={w} height={h} stroke={pathStroke}>
    <path
      stroke-linecap='round'
      stroke-linejoin='round'
      stroke-miterlimit='10'
      stroke-width='2'
      d='M28.467 11.994a9.312 9.312 0 0 1 15.715 9.609M28.039 7.746l-3-3.326M38.01 4.848V1M46.213 9.797l3.247-3.246M48.169 17.201h5.13M37.189 21.979c-.806 0-1.583.113-2.329.305C33.8 17.544 29.575 14 24.516 14c-5.234 0-9.571 3.794-10.439 8.779a9.266 9.266 0 0 0-3.767-.801A9.31 9.31 0 0 0 1 31.288a9.31 9.31 0 0 0 9.31 9.31h26.879a9.31 9.31 0 0 0 9.31-9.31 9.309 9.309 0 0 0-9.31-9.309Z'
    />
  </Icon>
);

export default OvercastIcon;
