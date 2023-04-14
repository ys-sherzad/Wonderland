import React, { useState } from 'react';
import {
    View,
    ScrollView,
    Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Text from './Text';
import {
    elevation,
    SCR_WIDTH,
    ACTIONS_CONTAINER_HEIGHT,
    gradientColors,
    LAYOUT_HORIZONTAL_PADDING,
    numberWithCommas,
    animationDelay,
} from '../utils';
import Spacer from './Spacer';
import Button from './Button';
import Comment from '../../assets/icons/comment1.svg';
import Share from '../../assets/icons/share.svg';
import Heart from '../../assets/icons/heart.svg';
import { postsData } from '../data';
import { theme } from '../theme';
import Slide from './Slide';

const PostList = () => {

    const [posts, setPosts] = useState(postsData);

    // FIXME: refactor this function
    // we could keep a list of key pair values 
    // mapping to the post instead
    const handleLike = (post) => {
        const updatedPosts = posts.map((p) => {
            if (post.id === p.id) {
                if (!p.isLiked) {
                    return {
                        ...p,
                        isLiked: true,
                        likesCount: p.likesCount + 1,
                    };
                } else {
                    return {
                        ...p,
                        isLiked: false,
                        likesCount: p.likesCount - 1,
                    };
                }
            }
            return p;
        });
        setPosts(updatedPosts);
    };

    return (
        <View style={{
            height: '100%',
            width: SCR_WIDTH,
        }}>
            <ScrollView contentContainerStyle={{
                flexGrow: 1,
                paddingHorizontal: LAYOUT_HORIZONTAL_PADDING,
                paddingVertical: 8,
            }}>
                {posts.map((post, index) => (
                    <Slide key={index} delay={animationDelay['post']}>
                        <View style={{
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
                                        width: 150,
                                        backgroundColor: 'white',
                                        borderRadius: 14,
                                        ...elevation,
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
                                                    padding: 5
                                                }}>

                                                    {
                                                        post.isLiked
                                                            ? (<Heart width={15} height={15} fill={theme.red} />)
                                                            : (<Heart width={15} height={15} fill={theme.inactive} />)
                                                    }
                                                    <Spacer horizontal size={3} />
                                                    <Text style={{
                                                        fontSize: 11,
                                                        color: theme.textSecondary
                                                    }}>{numberWithCommas(post.likesCount)}</Text>
                                                </View>
                                            </Button>
                                            <View style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                padding: 5

                                            }}>
                                                <Comment width={17} height={17} fill={theme.inactive} />
                                                <Spacer horizontal size={3} />
                                                <Text style={{
                                                    fontSize: 11,
                                                    color: theme.textSecondary
                                                }}>{numberWithCommas(post.commentsCount)}</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <Button customContainerStyle={{
                                        width: 54,
                                        backgroundColor: 'white',
                                        borderRadius: 14,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        ...elevation,
                                    }}>

                                        <Share width={20} height={20} strokeWidth={2} stroke={theme.inactive} />

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
                    </Slide>
                ))
                }
            </ScrollView>
        </View>
    );
};

export default PostList;
