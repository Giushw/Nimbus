import {FC} from "react";
import {Icon} from "@chakra-ui/react";
import type {WheaterIconProps} from "../../../types/common";

interface SnowShowerIconProps extends WheaterIconProps {}

const SnowShowerIcon: FC<SnowShowerIconProps> = ({pathStroke, w = 48, h = 56}) => (
  <Icon viewBox='0 0 48 56' fill="none" width={w} height={h} stroke={pathStroke}>
    <path
      stroke-linecap='round'
      stroke-linejoin='round'
      stroke-miterlimit='10'
      stroke-width='2'
      d='M37.189 27.599a9.31 9.31 0 0 0 9.31-9.31 9.31 9.31 0 0 0-9.31-9.31c-.806 0-1.583.113-2.329.305C33.8 4.544 29.575 1 24.516 1c-5.234 0-9.571 3.794-10.439 8.779a9.266 9.266 0 0 0-3.767-.801A9.31 9.31 0 0 0 1 18.288a9.31 9.31 0 0 0 9.31 9.31M16.183 22.36v13.765M23.933 16.894V43.82M32.183 24.86v14.25'
    />
    
    <path
      stroke-linecap='round'
      stroke-linejoin='round'
      stroke-miterlimit='10'
      stroke-width='.5'
      d='M15.707 40v7.413M19.413 43.706H12M13.086 41.086l5.242 5.242M18.328 41.086l-5.242 5.242M13.086 41.941h.855v-.855M18.327 41.941h-.855v-.855M17.472 46.328v-.856h.855M13.941 45.472h-.855M13.941 45.472v.855M15.102 40.605l.605.604.604-.604M18.808 44.311l-.604-.605.604-.604M15.102 46.808l.605-.604.604.604M13.21 43.706l-.605-.605M13.21 43.706l-.605.605M23.707 48v7.413M27.413 51.706H20M21.086 49.086l5.242 5.242M26.328 49.086l-5.242 5.242M21.086 49.941h.855v-.855M26.327 49.941h-.855v-.855M25.472 54.328v-.856h.855M21.941 53.472h-.855M21.941 53.472v.855M23.102 48.605l.605.604.604-.604M26.808 52.311l-.604-.605.604-.604M23.102 54.808l.605-.604.604.604M21.21 51.706l-.605-.605M21.21 51.706l-.605.605M31.707 42v7.413M35.413 45.706H28M29.086 43.086l5.242 5.242M34.328 43.086l-5.242 5.242M29.086 43.941h.855v-.855M34.327 43.941h-.855v-.855M33.472 48.328v-.856h.855M29.941 47.472h-.855M29.941 47.472v.855M31.102 42.605l.605.604.604-.604M34.809 46.311l-.605-.605.605-.604M31.102 48.808l.605-.604.604.604M29.21 45.706l-.605-.605M29.21 45.706l-.605.605'
    />
  </Icon>
);

export default SnowShowerIcon;
