import {FC} from "react";
import {Icon} from "@chakra-ui/react";

interface WindIconProps {
  pathStroke: string,
  w?: number,
  h?: number,
  r?: number
}

const WindIcon: FC<WindIconProps> = ({pathStroke, w = 44, h = 34}) => (
  <Icon viewBox='0 0 44 34' fill="none" width={w} height={h} stroke={pathStroke}>
    <path
      stroke-linecap='round'
      stroke-linejoin='round'
      stroke-miterlimit='10'
      stroke-width='2'
      d='M24.084 6.417S23.584 1 29.251 1s5.083 5.417 5.083 5.417S34.423 11 29.212 11H1.001M38.75 9.25s3.75-.083 3.75 3.167-3.083 2.833-3.083 2.833L35 15.267M1 15.917h25.667s8.25-.333 8.333 7.917c.083 8.25-7.667 8.333-7.667 8.333'
    />

    <path
      stroke-linecap='round'
      stroke-linejoin='round'
      stroke-miterlimit='10'
      stroke-width='2'
      d='M21.5 27s4.25-.167 4.25-3.417-4.25-3.25-4.25-3.25H1'
    />
  </Icon>
);

export default WindIcon;

