import React from 'react';
import {
    View,
    ScrollView,
    Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Text from './Text';
import {
    LAYOUT_HORIZONTAL_PADDING,
    gradientColors,
    animationDelay
} from '../utils';
import { stories } from '../data';
import ScaleAnimation from './ScaleAnimation';

const Stories = ({
}) => {
    return (
        <ScrollView
            style={{ height: 180 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: LAYOUT_HORIZONTAL_PADDING,
                paddingVertical: 10,
            }}>
            {stories.map((story, index) => (
                <ScaleAnimation
                    delay={animationDelay['story-container']}
                    key={index}
                    customContainerStyle={{
                        width: 112,
                        backgroundColor: 'red',
                        marginRight: 8,
                        borderRadius: 16,
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden'
                    }}
                >
                    <View>
                        <ScaleAnimation
                            delay={animationDelay['story-profileImg']}
                        >
                            <Image
                                source={story.profileImg}
                                style={{
                                    height: 32,
                                    width: 32,
                                    resizeMode: 'cover',
                                    borderRadius: 8,
                                    borderWidth: 1,
                                    borderColor: '#F0EFEF',
                                }}
                            />
                        </ScaleAnimation>
                    </View>

                    <View style={{
                        position: 'absolute',
                        bottom: 15,
                    }}>
                        <ScaleAnimation
                            delay={animationDelay['story-name']}
                        >
                            <Text style={{
                                fontSize: 11,
                                color: 'white',
                                fontWeight: '500',
                                textShadowColor: 'rgba(0, 0, 0, 0.15)',
                                textShadowOffset: { width: -1, height: 1 },
                                textShadowRadius: 10
                            }}>{story.isAuthUser ? 'Add story' : story.name}</Text>
                        </ScaleAnimation>
                    </View>

                    <Image
                        source={story.bgImage}
                        style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            resizeMode: 'cover',
                            zIndex: -1,
                        }}
                        blurRadius={story.isAuthUser ? 8 : 1}
                    />

                    <LinearGradient
                        start={{ x: 0.3, y: 0.25 }}
                        end={{ x: 0.4, y: 1.0 }}
                        locations={[0, 0.4, 0.6]}
                        colors={gradientColors}
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0,
                            zIndex: -1,
                        }}
                    />
                </ScaleAnimation>
            ))}
        </ScrollView>

    );
};

export default Stories;