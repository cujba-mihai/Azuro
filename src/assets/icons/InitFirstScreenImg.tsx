import * as React from 'react'
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
const SvgInitFirstScreenImg = (props: SvgProps) => (
  <Svg
    width={330}
    height={355}
    fill="none"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h330v355H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="matrix(.00036 0 0 .00033 0 0)" />
      </Pattern>
      <Image
        id="b"
        width={2809}
        height={3027}
      />
    </Defs>
  </Svg>
)
export default SvgInitFirstScreenImg