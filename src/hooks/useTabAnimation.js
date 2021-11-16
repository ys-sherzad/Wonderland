import React from 'react';
import {
    useAnimatedStyle,
    withTiming
} from 'react-native-reanimated';
import useScaleAnimation from './useScaleAnimation';

const useTabAnimation = ({
    initialValue,
    springConfig,
}) => {

    const { scale, scaleAnimation } = useScaleAnimation({ initialValue, springConfig });

    const padding = useAnimatedStyle(() => {
        return {
            paddingHorizontal: withTiming(scale.value === 1 ? 10 : 28, { duration: 400 }),
        };
    });

    return {
        scale,
        scaleAnimation,
        padding
    };
};

export default useTabAnimation;
