import {FC} from "react";
import {Icon} from "@chakra-ui/react";

interface NimbusIconProps {
  pathStroke: string,
  w?: number,
  h?: number
}

const NimbusIcon: FC<NimbusIconProps> = ({pathStroke, w = 52, h = 35}) => (
  <Icon viewBox='0 0 52 35' fill="none" width={w} height={h} stroke={pathStroke}>
    <path
      stroke-linecap='round'
      stroke-linejoin='round'
      stroke-miterlimit='10'
      stroke-width='2'
      d='M4.999 18.289a9.31 9.31 0 0 1 9.31-9.31c.806 0 1.583.113 2.329.305C17.698 4.544 21.923 1 26.982 1c5.234 0 9.571 3.794 10.439 8.779a9.266 9.266 0 0 1 3.767-.801c5.142 0 9.535 2.971 9.31 9.31-.224 6.339-9.558 14.339-9.558 14.339'
    />

    <path
      stroke-linecap='round'
      stroke-linejoin='round'
      stroke-miterlimit='10'
      stroke-width='2'
      d='M37.774 21.128s-5.833 8.167-11 12.167M24.887 21.128s-5.833 8.167-11 12.167M12 21.128S6.167 29.295 1 33.295'
    />
  </Icon>
);

export default NimbusIcon;
