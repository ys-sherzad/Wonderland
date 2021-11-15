import React from 'react';
import { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { elevation_1, elevation_2, elevation_8 } from '../utils';

const springConfig = {
    damping: 5,
    mass: .5,
    stiffness: 140,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: .5
};

const useScaleAnimation = ({
    initialValue,
}) => {
    const scale = useSharedValue(initialValue);

    const scaleAnimation = useAnimatedStyle(() => {
        return {
            transform: [{
                scale: withSpring(scale.value, springConfig),
            }],
        };
    });

    return {
        scale,
        scaleAnimation,
    };
};

export default useScaleAnimation;
