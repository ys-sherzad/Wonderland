import React from 'react';
import {
    View,
    ScrollView,
    Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Text from './Text';
import {
    elevation_8,
    SCR_HEIGHT,
    SCR_WIDTH,
    ACTIONS_CONTAINER_HEIGHT,
    gradientColors,
    LAYOUT_HORIZONTAL_PADDING
} from '../utils';
import IconButton from './IconButton';
import Spacer from './Spacer';
import Button from './Button';
import Comment from '../../assets/icons/comment.svg';
import Share from '../../assets/icons/share.svg';
import HeartFill from '../../assets/icons/heart-fill.svg';
import HeartOutLine from '../../assets/icons/heart-outline.svg';

const PostList = ({
    posts,
    handleLike,
}) => (
    <View style={{
        height: '100%',
        width: SCR_WIDTH,
    }}>
        <ScrollView contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: LAYOUT_HORIZONTAL_PADDING,
            paddingVertical: 5
        }}>
            {posts.map((post, index) => (
                <View key={index} style={{
                    height: 200,
                    borderRadius: 26,
                    marginBottom: 44,
                    position: 'relative',
                }}>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 20
                    }}>
                        <Image
                            source={post.user.profImage}
                            style={{
                                height: 28,
                                width: 28,
                                resizeMode: 'cover',
                                borderRadius: 5,
                                borderWidth: 1,
                                borderColor: '#fff',
                            }}
                        />
                        <Text style={{
                            marginLeft: 6,
                            fontSize: 12,
                            color: '#fff',
                            textShadowColor: 'rgba(0, 0, 0, 0.15)',
                            textShadowOffset: { width: -1, height: 1 },
                            textShadowRadius: 10
                        }}>
                            {post.user.name}
                        </Text>
                    </View>

                    <View style={{ flex: 1 }} />

                    <View style={{
                        marginBottom: 31,
                        padding: 20,
                        paddingRight: 40,
                        paddingBottom: 8,
                    }}>
                        <Text style={{
                            fontSize: 11,
                            color: '#fff',
                            fontWeight: '400',
                            textShadowColor: 'rgba(0, 0, 0, 0.15)',
                            textShadowOffset: { width: -1, height: 1 },
                            textShadowRadius: 10
                        }}>{post.date}</Text>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: '700',
                                color: '#fff',
                                marginTop: 3,
                                lineHeight: 20,
                                textShadowColor: 'rgba(0, 0, 0, 0.15)',
                                textShadowOffset: { width: -1, height: 1 },
                                textShadowRadius: 10
                            }}
                        >{post.name}</Text>
                    </View>

                    <View style={{
                        position: 'absolute',
                        bottom: -(ACTIONS_CONTAINER_HEIGHT / 2),
                        left: 0,
                        right: 0,
                        height: ACTIONS_CONTAINER_HEIGHT,
                    }}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginVertical: 2,
                            marginHorizontal: 20
                        }}>
                            <View style={{
                                width: 156,
                                backgroundColor: 'white',
                                borderRadius: 14,
                                ...elevation_8,
                            }}>
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-evenly'
                                }}>
                                    <Button onPress={() => handleLike(post)}>
                                        <View style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}>
                                            <IconButton
                                                activeIcon={<HeartFill width={20} height={20} fill='red' />}
                                                inactiveIcon={<HeartOutLine width={20} height={20} fill='grey' />}
                                                active={post.isLiked}
                                            />
                                            <Spacer horizontal size={3} />
                                            <Text style={{
                                                fontSize: 11,
                                            }}>{post.likesCount}</Text>
                                        </View>
                                    </Button>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}>
                                        <Comment width={23} height={23} fill='grey' stroke="grey" strokeWidth='6' />
                                        <Spacer horizontal size={3} />
                                        <Text style={{
                                            fontSize: 11,
                                        }}>{post.commentsCount}</Text>
                                    </View>
                                </View>
                            </View>

                            <Button customContainerStyle={{
                                width: 58,
                                backgroundColor: 'white',
                                borderRadius: 14,
                                justifyContent: 'center',
                                alignItems: 'center',
                                ...elevation_8,
                            }}>

                                <Share width={21} height={21} fill="black" />

                            </Button>
                        </View>

                    </View>

                    <View style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                        zIndex: -2,
                        borderRadius: 26,
                        overflow: 'hidden'
                    }}>
                        <Image
                            source={post.bgImage}
                            style={{
                                height: '100%',
                                width: '100%',
                                resizeMode: 'cover',
                            }}
                        />
                    </View>
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
                            borderRadius: 26,
                        }}
                    />
                </View>
            ))
            }
        </ScrollView>
    </View>
);

export default PostList;
