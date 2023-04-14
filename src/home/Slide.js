import React, { useEffect } from 'react';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
    withDelay
} from 'react-native-reanimated';
import { SCR_HEIGHT } from '../utils';
// import { FOOTER_HEIGHT } from '../utils';

const DELAY = 400;

const timingConfig = {
    duration: 700,
    easing: Easing.bezier(0.22, 1, 0.36, 1)
};

const Slide = ({
    children,
    delay = DELAY
}) => {

    const offset = useSharedValue(SCR_HEIGHT - 330);

    useEffect(() => {
        offset.value = 0;
    }, []);

    const animateY = useAnimatedStyle(() => {
        return {
            transform: [{
                translateY: withDelay(delay,
                    withTiming(offset.value, timingConfig))
            }]
        };
    });

    return (
        <Animated.View style={animateY}>
            {children}
        </Animated.View>
    );
};

export default Slide;