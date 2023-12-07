import React from 'react'
import Svg, { Circle } from 'react-native-svg';

export const ONBOARDING_STEPS = ['insuredProtection', 'comparePrices', 'payOnline']

const CarouselProgress = ({ step }: { step: number }) => {
    const colorFill = (index: number) => index === (step) ? "#384250" : "#F3F4F6";

    return (
        <Svg
            width={50}
            height={10}
            fill="none"
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
            <Circle cx="5" cy="5" r="5" fill={colorFill(0)} />
            <Circle cx="25" cy="5" r="5" fill={colorFill(1)} />
            <Circle cx="45" cy="5" r="5" fill={colorFill(2)} />
        </Svg>
    )
}

export default CarouselProgress