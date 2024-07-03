import {FC} from "react";
import {Icon} from "@chakra-ui/react";

interface FogIconProps {
  pathStroke: string,
  w?: number,
  h?: number
}

const FogIcon: FC<FogIconProps> = ({pathStroke, w, h}) => (
    <Icon viewBox='0 0 51 30' fill="none" width={w ?? 51} height={h ?? 30} stroke={pathStroke}>
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-miterlimit='10'
        stroke-width='2'
        d='M15.55 11.677h9.671M29.563 11.677h6.812M35.435 7.906H16.497M19.689 4.135h12.932M24.069 1h4.35M4.393 15.289H19.69M24.069 15.289h22.133M1 19.68h39.813M44.875 20.055h5M49.063 24.555H2M4.875 28.93h14.814M24.069 28.93h21.244'
      />
    </Icon>
  )

export default FogIcon;
