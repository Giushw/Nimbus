import {FC} from "react";
import {Icon} from "@chakra-ui/react";

interface ClearIconProps {
  pathStroke: string,
  w?: number,
  h?: number
}

const ClearIcon: FC<ClearIconProps> = ({pathStroke, w, h}) => (
    <Icon viewBox='0 0 48 48' fill="none" width={w ?? 48} height={h ?? 48} stroke={pathStroke}>
      <path
        stroke-miterlimit='10' 
        stroke-width='2'
        d='M24 35.501c6.352 0 11.501-5.15 11.501-11.501 0-6.352-5.15-11.501-11.501-11.501-6.352 0-11.501 5.15-11.501 11.501 0 6.352 5.15 11.501 11.501 11.501Z'
      />
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-miterlimit='10'
        stroke-width='2'
        d='M24 1.82v6.408M24 39.772v6.408M46.18 24h-6.408M8.228 24H1.82M8.316 8.316l4.531 4.531M35.153 35.153l4.531 4.531M39.684 8.316l-4.531 4.531M12.847 35.153l-4.531 4.531'
      />
    </Icon>
  )

export default ClearIcon;
