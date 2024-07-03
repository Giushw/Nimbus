import {FC} from "react";
import {Icon} from "@chakra-ui/react";

interface DrizzleIconProps {
  pathStroke: string,
  w?: number,
  h?: number
}

const DrizzleIcon: FC<DrizzleIconProps> = ({pathStroke, w, h}) => (
    <Icon viewBox='0 0 48 51' fill="none" width={w ?? 48} height={h ?? 51} stroke={pathStroke}>
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-miterlimit='10'
        stroke-width='2'
        d='M37.189 8.979c-.806 0-1.583.113-2.329.305C33.8 4.544 29.575 1 24.516 1c-5.234 0-9.571 3.794-10.439 8.779a9.266 9.266 0 0 0-3.767-.801A9.31 9.31 0 0 0 1 18.288a9.31 9.31 0 0 0 9.31 9.31h26.879a9.31 9.31 0 0 0 9.31-9.31 9.309 9.309 0 0 0-9.31-9.309ZM15.184 34.11a.846.846 0 1 0 0-1.692.846.846 0 0 0 0 1.692ZM15.184 45.802a.846.846 0 1 0 0-1.692.846.846 0 0 0 0 1.692ZM23.288 38.423a.846.846 0 1 0 0-1.692.846.846 0 0 0 0 1.692ZM23.288 49.485a.846.846 0 1 0 0-1.692.846.846 0 0 0 0 1.692ZM30.788 42.194a.846.846 0 1 0 0-1.692.846.846 0 0 0 0 1.692ZM30.788 32.456a.846.846 0 1 0 0-1.692.846.846 0 0 0 0 1.692Z'
      />
    </Icon>
  )

export default DrizzleIcon;
