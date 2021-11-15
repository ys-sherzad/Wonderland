import React from 'react';
import { View, Image } from 'react-native';
import Text from './Text';
import {
    HEADER_HEIGHT,
    LAYOUT_HORIZONTAL_PADDING
} from '../utils';

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
                <Image
                    source={require('../../assets/images/cesar-rincon-unsplash.jpg')}
                    style={{
                        height: 60,
                        width: 60,
                        resizeMode: 'cover',
                        borderRadius: 16,
                    }}
                />
                <View style={{
                    paddingLeft: 12,
                }}>
                    <Text style={{
                        fontSize: 12
                    }}>Good Morning!</Text>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '700',
                    }}>Cesar Rincon 👋</Text>
                </View>
            </View>

            <View>
                <Text>Icon</Text>
            </View>
        </View>
    );
};

export default Header;