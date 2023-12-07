import * as React from 'react'
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
const SvgZenIcon = (props: SvgProps) => (
  <Svg
    width={66}
    height={65}
    fill="none"
    {...props}
  >
    <Path fill="url(#a)" d="M.5 0h65v65H.5z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="scale(.0005)" />
      </Pattern>
      <Image
        id="b"
        width={2000}
        height={2000}
      />
    </Defs>
  </Svg>
)
export default SvgZenIcon