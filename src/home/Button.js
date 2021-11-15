import React from 'react';
import {
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';
import Animated from 'react-native-reanimated';
import useScaleAnimation from '../hooks/useScaleAnimation';


const Button = ({
    children,
    onPress,
    customContainerStyle
}) => {

    const {
        scale,
        scaleAnimation,
    } = useScaleAnimation({
        initialValue: 1
    });

    const pressIn = () => {
        scale.value = 0.9;
    };

    const pressOut = () => {
        scale.value = 1;
    };

    return (
        <TouchableWithoutFeedback
            onPress={onPress}
            onPressIn={pressIn}
            onPressOut={pressOut}
        >
            <Animated.View style={[
                customContainerStyle,
                scaleAnimation
            ]}>
                {children}
            </Animated.View>
        </TouchableWithoutFeedback>
    );
};


const styles = StyleSheet.create({
    flexOne: {
        flex: 1
    }
});

export default Button;
