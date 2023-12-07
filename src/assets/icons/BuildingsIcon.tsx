import * as React from 'react'
import Svg, { G, Path, Defs, Pattern, Use, Image } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */ import type { SvgProps } from 'react-native-svg'
const SvgBuildingsIcon = (props: SvgProps) => (
  <Svg
    width={80}
    height={75}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path fill="url(#b)" d="M0 0h71v67H0z" transform="translate(4.5)" />
    </G>
    <Defs>
      <Pattern
        id="b"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#c" transform="matrix(.00098 0 0 .00104 0 -.05)" />
      </Pattern>
      <Image
        id="c"
        width={1024}
        height={1024}
      />
    </Defs>
  </Svg>
)
export default SvgBuildingsIcon