import React, { useEffect } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Animated from 'react-native-reanimated';
import useScaleAnimation from '../hooks/useScaleAnimation';
import Spacer from './Spacer';

const Tab = ({
    name,
    selected,
    isLastTab,
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
    } = useScaleAnimation({ initialValue: 1, springConfig });

    const textStyle = selected
        ? { fontWeight: '700' }
        : { fontWeight: '400' };

    useEffect(() => {
        if (selected) {
            scale.value = 1.8;
        } else {
            scale.value = 1;
        }
    }, [selected]);

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
                    { color: 'black', fontFamily: 'Ubuntu' },
                    textStyle,
                    scaleAnimation
                ]}>{name}</Animated.Text>

                {!isLastTab && <Spacer horizontal size={20} />}
            </Animated.View>
        </TouchableWithoutFeedback>
    );
};

export default Tab;