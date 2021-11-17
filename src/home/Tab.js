import React, { useEffect } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Animated from 'react-native-reanimated';
import useTabAnimation from '../hooks/useTabAnimation';
import { theme } from '../theme';

const Tab = ({
    name,
    selected,
    onPress,
}) => {

    const springConfig = {
        damping: 15,
        mass: .5,
        stiffness: 140,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: .5
    };

    const {
        scale,
        scaleAnimation,
        padding
    } = useTabAnimation({ initialValue: 1, springConfig });

    const textStyle = selected
        ? { fontWeight: '700', color: theme.text }
        : { fontWeight: '400', color: theme.inactive };

    useEffect(() => {
        if (selected) {
            scale.value = 1.8;
        } else {
            scale.value = 1;
        }
    }, [selected]);

    const textDefaultStyle = {
        fontFamily: 'Ubuntu'
    };

    return (
        <TouchableWithoutFeedback
            onPress={onPress}
        >
            <Animated.View style={[{
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
            }, padding]}>
                <Animated.Text style={[
                    textDefaultStyle,
                    textStyle,
                    scaleAnimation
                ]}>{name}</Animated.Text>
            </Animated.View>
        </TouchableWithoutFeedback>
    );
};

export default Tab;