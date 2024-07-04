import {FC} from "react";
import {Box, Spinner} from "@chakra-ui/react";
import ClearIcon from "./weather/ClearIcon";
import DrizzleIcon from "./weather/DrizzleIcon";
import FogIcon from "./weather/FogIcon";
import FreezeDrizzleIcon from "./weather/FreezeDrizzleIcon";
import FreezeRainIcon from "./weather/FreezeRainIcon";
import OvercastIcon from "./weather/OvercastIcon";
import RainIcon from "./weather/RainIcon";
import RainShowerIcon from "./weather/RainShowerIcon";
import SnowFallIcon from "./weather/SnowFallIcon";
import SnowGrainIcon from "./weather/SnowGrainIcon";
import SnowShowerIcon from "./weather/SnowShowerIcon";
import ThunderStormHailIcon from "./weather/ThunderStormHailIcon";
import ThunderStormIcon from "./weather/ThunderStormIcon";

interface ForecastIconProps {
  wmo: number;
  stroke: string;
}

const iconMap: { [key: number]: FC<{ pathStroke: string }> } = {
  0: ClearIcon,
  1: OvercastIcon,
  2: OvercastIcon,
  3: OvercastIcon,
  45: FogIcon,
  48: FogIcon,
  51: DrizzleIcon,
  53: DrizzleIcon,
  55: DrizzleIcon,
  56: FreezeDrizzleIcon,
  57: FreezeDrizzleIcon,
  61: RainIcon,
  63: RainIcon,
  65: RainIcon,
  66: FreezeRainIcon,
  67: FreezeRainIcon,
  71: SnowFallIcon,
  73: SnowFallIcon,
  75: SnowFallIcon,
  77: SnowGrainIcon,
  80: RainShowerIcon,
  81: RainShowerIcon,
  82: RainShowerIcon,
  85: SnowShowerIcon,
  86: SnowShowerIcon,
  95: ThunderStormIcon,
  96: ThunderStormHailIcon,
  99: ThunderStormHailIcon,
};

const ForecastIcon: FC<ForecastIconProps> = ({ wmo, stroke }) => {
  const IconComponent = iconMap[wmo];

  if (!IconComponent) {
    return (
      <Box w={48} h={48}>
        <Spinner color={stroke} w={48} h={48} />
      </Box>
    );
  }

  return (
    <Box w={48} h={48}>
      <IconComponent pathStroke={stroke} w={48} h={48} />
    </Box>
  );
};

export default ForecastIcon;
