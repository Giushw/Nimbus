import {FC} from "react";
import {Icon} from "@chakra-ui/react";
import type {WheaterIconProps} from "../../../types/common";

interface SnowFallIconProps extends WheaterIconProps {}

const SnowFallIcon: FC<SnowFallIconProps> = ({pathStroke, w = 48, h = 56}) => (
  <Icon viewBox='0 0 48 56' fill="none" width={w} height={h} stroke={pathStroke}>
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
      stroke-width='.7'
      d='M36.64 42.294v12.84M43.06 48.714H30.22M32.101 44.175l9.079 9.078M41.18 44.175l-9.079 9.078M32.101 45.656h1.481v-1.481M41.18 45.656h-1.482v-1.481M39.698 53.253v-1.481h1.482M33.582 51.772h-1.481M33.582 51.772v1.481M35.593 43.342l1.047 1.047 1.048-1.047M42.013 49.762l-1.048-1.048 1.048-1.047M35.593 54.086l1.047-1.047 1.048 1.047M32.316 48.714l-1.047-1.047M32.316 48.714l-1.048 1.048'
    />
    
    <path
      stroke-linecap='round'
      stroke-linejoin='round'
      stroke-miterlimit='10'
      d='M18 42.36a1.13 1.13 0 1 0 0-2.26 1.13 1.13 0 0 0 0 2.26ZM18 50.814V31M11.889 41.23H24.11M11.623 47.394l12.6-12.601M11.623 34.793l12.6 12.6M24.223 37.309h-2.267v-2.516M22.17 39.362h-2.267v-2.516M21.956 45.127h2.267M21.956 47.394v-2.267M19.797 42.967h2.266M19.797 45.233v-2.266M13.89 45.127h-2.267M13.89 47.394v-2.267M16.056 42.96H13.79M16.056 45.227V42.96M11.623 37.309h2.516v-2.516M13.672 39.358h2.516v-2.516M15.478 32.904 18 34.793l2.512-1.889M15.478 48.904 18 47.015l2.512 1.89M10 43.747l1.889-2.522L10 38.713M26 43.747l-1.889-2.522L26 38.713'
    />
  </Icon>
);

export default SnowFallIcon;
