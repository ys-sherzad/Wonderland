import React from 'react';
import {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';

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

    return {
        scale,
        scaleAnimation,
    };
};

export default useScaleAnimation;
