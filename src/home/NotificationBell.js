import React, { useEffect } from 'react';
import {
    View
} from 'react-native';
import Bell from '../../assets/icons/bell.svg';
import useBellAnimation from '../hooks/useBellAnimation';
import Animated from 'react-native-reanimated';
import { theme } from '../theme';

const NotificationBell = () => {
    const [showDot, setShowDot] = React.useState(false);

    const {
        runAnimation,
        rotationStyle,
        scaleStyle
    } = useBellAnimation();

    useEffect(() => {

        // The delay here is for presentational
        // purposes only.

        setTimeout(() => {
            runAnimation();
            setShowDot(true);
        }, 6000);
    }, []);

    const defaultStyle = {
        height: 30,
        width: 30
    };

    return (
        <Animated.View style={rotationStyle}>
            <Animated.View style={[defaultStyle, scaleStyle]}>
                <Bell
                    height={'100%'}
                    width={'100%'}
                    fill={theme.textSecondary}
                />
                {showDot && (<View
                    style={{
                        position: 'absolute',
                        top: 6,
                        right: 5,
                        height: 8,
                        width: 8,
                        borderRadius: 99,
                        backgroundColor: theme.red
                    }}
                />)}
            </Animated.View>
        </Animated.View>
    );
};

export default NotificationBell;
