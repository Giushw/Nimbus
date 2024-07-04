import {FC} from "react";
import {Icon} from "@chakra-ui/react";
import type {WheaterIconProps} from "../../../types/common";

interface FreezeRainIconProps extends WheaterIconProps {}

const FreezeRainIcon: FC<FreezeRainIconProps> = ({pathStroke, w = 48, h = 47}) => (
  <Icon viewBox='0 0 48 47' fill="none" width={w} height={h} stroke={pathStroke}>
    <path
      stroke-linecap='round'
      stroke-linejoin='round'
      stroke-miterlimit='10'
      stroke-width='2'
      d='M37.189 27.599a9.31 9.31 0 0 0 9.31-9.31 9.31 9.31 0 0 0-9.31-9.31c-.806 0-1.583.113-2.329.305C33.8 4.544 29.575 1 24.516 1c-5.234 0-9.571 3.794-10.439 8.779a9.266 9.266 0 0 0-3.767-.801A9.31 9.31 0 0 0 1 18.288a9.31 9.31 0 0 0 9.31 9.31M18.198 24.667l-5.708 5.708M28.427 22.375 13.708 37.094M33.625 26 26 33.625'
    />

    <path
      stroke-linecap='round'
      stroke-linejoin='round'
      stroke-miterlimit='10'
      stroke-width='.5'
      d='M21.707 35v7.413M25.413 38.706H18M19.086 36.086l5.242 5.242M24.328 36.086l-5.242 5.242M19.086 36.941h.855v-.855M24.327 36.941h-.855v-.855M23.472 41.328v-.856h.855M19.941 40.472h-.855M19.941 40.472v.855M21.102 35.605l.605.604.604-.604M24.808 39.311l-.604-.605.604-.604M21.102 41.808l.605-.604.604.604M19.21 38.706l-.605-.605M19.21 38.706l-.605.605'
    />

    <path
      stroke-linecap='round'
      stroke-linejoin='round'
      stroke-miterlimit='10'
      stroke-width='.3'
      d='M9.207 32v4.413M11.413 34.206H7M7.646 32.646l3.12 3.12M10.767 32.646l-3.12 3.12M7.646 33.156h.51v-.51M10.767 33.156h-.51v-.51M10.258 35.767v-.51h.509M8.155 35.258h-.509M8.156 35.258v.509M8.847 32.36l.36.36.36-.36M11.053 34.566l-.36-.36.36-.36M8.847 36.053l.36-.36.36.36M7.72 34.206l-.36-.36M7.72 34.206l-.36.36'
    />
    
    <path
      stroke-linecap='round'
      stroke-linejoin='round'
      stroke-miterlimit='10'
      stroke-width='.5'
      d='M8.707 39v7.413M12.413 42.706H5M6.086 40.086l5.242 5.242M11.328 40.086l-5.242 5.242M6.086 40.941h.855v-.855M11.327 40.941h-.855v-.855M10.472 45.328v-.856h.855M6.941 44.472h-.855M6.941 44.472v.855M8.102 39.605l.605.604.604-.604M11.809 43.311l-.605-.605.604-.604M8.102 45.808l.605-.604.604.604M6.21 42.706l-.605-.605M6.21 42.706l-.605.605'
    />
  </Icon>
);

export default FreezeRainIcon;
