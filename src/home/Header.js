import React from 'react';
import { View, Image } from 'react-native';
import Text from './Text';
import NotificationBell from './NotificationBell';
import {
    animationDelay,
    HEADER_HEIGHT,
    LAYOUT_HORIZONTAL_PADDING
} from '../utils';
import { theme } from '../theme';
import ScaleAnimation from './ScaleAnimation';

const Header = ({
}) => {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            height: HEADER_HEIGHT,
            paddingHorizontal: LAYOUT_HORIZONTAL_PADDING,
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
            }}>
                <ScaleAnimation
                    delay={animationDelay['header']}
                >
                    <Image
                        source={require('../../assets/images/cesar-rincon-unsplash.jpg')}
                        style={{
                            height: 60,
                            width: 60,
                            resizeMode: 'cover',
                            borderRadius: 16,
                        }}
                    />
                </ScaleAnimation>
                <View style={{
                    paddingLeft: 12,
                }}>
                    <ScaleAnimation
                        delay={animationDelay['header']}
                    >
                        <Text style={{
                            fontSize: 12,
                            color: theme.textSecondary,
                        }}>Good Morning!</Text>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '700',
                            color: theme.text,
                            marginTop: -2

                        }}>Cesar Rincon 👋</Text>
                    </ScaleAnimation>
                </View>
            </View>

            <ScaleAnimation
                delay={animationDelay['header']}
            >
                <NotificationBell />
            </ScaleAnimation>
        </View>
    );
};

export default Header;