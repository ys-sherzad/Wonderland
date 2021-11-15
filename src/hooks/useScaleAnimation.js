import React from 'react';
import { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

const useScaleAnimation = ({
    initialValue,
    springConfig,
}) => {
    const scale = useSharedValue(initialValue);

    const scaleAnimation = useAnimatedStyle(() => {
        return {
            transform: [{
                scale: withSpring(scale.value, springConfig ?? null),
            }],
        };
    });

    const padding = useAnimatedStyle(() => {
        return {
            paddingHorizontal: withTiming(scale.value === 1 ? 10 : 30),
        };
    });

    return {
        scale,
        scaleAnimation,
        padding
    };
};

export default useScaleAnimation;
