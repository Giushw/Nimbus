import {FC} from "react";
import {Icon} from "@chakra-ui/react";
import type {WheaterIconProps} from "../../../types/common";

interface FreezeDrizzleIconProps extends WheaterIconProps {}

const FreezeDrizzleIcon: FC<FreezeDrizzleIconProps> = ({pathStroke, w = 48, h = 43}) => (
  <Icon viewBox='0 0 48 43' fill="none" width={w} height={h} stroke={pathStroke}>
    <path
      stroke-linecap='round'
      stroke-linejoin='round'
      stroke-miterlimit='10'
      stroke-width='2'
      d='M37.189 8.979c-.806 0-1.583.113-2.329.305C33.8 4.544 29.575 1 24.516 1c-5.234 0-9.571 3.794-10.439 8.779a9.266 9.266 0 0 0-3.767-.801A9.31 9.31 0 0 0 1 18.288a9.31 9.31 0 0 0 9.31 9.31h26.879a9.31 9.31 0 0 0 9.31-9.31 9.309 9.309 0 0 0-9.31-9.309Z'
    />
    
    <path
      stroke-linecap='round'
      stroke-linejoin='round'
      stroke-miterlimit='10'
      d='m14.922 35.214 2.25-2.25M14.922 32.964l2.25 2.25M30.422 35.214l2.25-2.25M30.422 32.964l2.25 2.25M7.172 41.859l2.25-2.25M7.172 39.609l2.25 2.25M38.076 41.859l2.25-2.25M38.076 39.609l2.25 2.25M22.672 41.859l2.25-2.25M22.672 39.609l2.25 2.25'
    />
  </Icon>
);

export default FreezeDrizzleIcon;
