import React, {
    useEffect,
} from 'react';
import { View } from 'react-native';
import HeartFill from '../../assets/icons/heart-fill.svg';
import HeartOutLine from '../../assets/icons/heart-outline.svg';



const IconButton = ({
    activeIcon,
    inactiveIcon,
    // activeColor,
    // inactiveColor,
    active,
}) => {

    // const [animation] = React.useState(new Animated.Value(0));

    // useEffect(() => {
    //     Animated.timing(animation, {
    //         toValue: active ? 1 : 0,
    //         duration: 2000,
    //         useNativeDriver: true,
    //     }).start();
    // }, [active]);

    return (
        <View>
            {active ? activeIcon : inactiveIcon}
        </View>
    );
};

export default IconButton;
