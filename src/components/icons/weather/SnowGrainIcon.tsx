import {FC} from "react";
import {Icon} from "@chakra-ui/react";
import type {WheaterIconProps} from "../../../types/common";

interface SnowGrainIconProps extends WheaterIconProps {}

const SnowGrainIcon: FC<SnowGrainIconProps> = ({pathStroke, w = 48, h = 49}) => (
  <Icon viewBox='0 0 48 49' fill="none" width={w} height={h} stroke={pathStroke}>
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
      d='M23.64 30.986v17.427M32.353 39.699H14.926M17.478 33.538 29.8 45.861M29.8 33.538 17.479 45.861M17.478 35.549h2.01v-2.011M29.8 35.549h-2.01v-2.011M27.79 45.861V43.85h2.01M19.489 43.85h-2.011M19.489 43.85v2.011M22.218 32.408l1.422 1.421 1.42-1.421M30.932 41.121l-1.422-1.422 1.422-1.421M22.218 46.991l1.422-1.421 1.42 1.421M17.77 39.699l-1.422-1.422M17.77 39.699l-1.422 1.422'
    />
  </Icon>
);

export default SnowGrainIcon;
