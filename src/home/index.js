import React, { useEffect, useState } from 'react';
import {
    View,
    Image,
    ScrollView,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Text from './Text';
import IconButton from './IconButton';
import HeartFill from '../../assets/icons/heart-fill.svg';
import HeartOutLine from '../../assets/icons/heart-outline.svg';
import Comment from '../../assets/icons/comment.svg';
import Share from '../../assets/icons/share.svg';

import {
    elevation_4,
    elevation_5,
    HEADER_HEIGHT,
    LAYOUT_HORIZONTAL_PADDING
} from '../utils';
import {
    stories,
    categories,
    postsData,
} from '../data';
import { Fragment } from 'react';
import Button from './Button';

const SCR_HEIGHT = Dimensions.get('window').height;
const SCR_WIDTH = Dimensions.get('window').width;

const gradientColors = [
    'rgba(28, 28, 28, 0.35)',
    'rgba(28, 28, 28, 0.25)',
    'rgba(28, 28, 28, 0.35)',
];

const Spacer = ({ size, horizontal = false }) => {
    const horizontalStyle = {
        width: size
    };
    const verticalStyle = {
        height: size
    };
    return (
        <View style={horizontal ? horizontalStyle : verticalStyle} />
    );
};



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
                    <Text>Good Morning!</Text>
                    <Text>Cesar Rincon</Text>
                </View>
            </View>

            <View>
                <Text>Icon</Text>
            </View>
        </View>
    );
};

const Stories = ({
}) => {
    return (
        <ScrollView style={{ height: 140 }} horizontal contentContainerStyle={{
            paddingHorizontal: LAYOUT_HORIZONTAL_PADDING,
        }}>
            {stories.map((story, index) => (
                <View key={index} style={{
                    width: 100,
                    backgroundColor: 'red',
                    marginRight: 8,
                    borderRadius: 16,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <View>
                        <Image
                            source={require('../../assets/images/cesar-rincon-unsplash.jpg')}
                            style={{
                                height: 32,
                                width: 32,
                                resizeMode: 'cover',
                                borderRadius: 8,
                                borderWidth: 1,
                            }}
                        />
                    </View>

                    <View style={{
                        position: 'absolute',
                        bottom: 10,
                    }}>
                        <Text style={{
                            fontSize: 9,
                        }}>Add story</Text>
                    </View>

                </View>
            ))}
        </ScrollView>
    );
};

const Tab = ({
    name,
    isLastTab,
}) => {

    return (
        <TouchableOpacity style={{
            height: 60,
            width: 90,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1
        }}>

            <Text style={{ color: 'black' }}>{name}</Text>
            {!isLastTab && <Spacer horizontal size={20} />}
        </TouchableOpacity>
    );
};

const TopTabs = ({ }) => {
    const [tabs, setTabs] = useState(0);
    const isLastTab = tabs === categories.length - 1;

    return (
        <View>
            <ScrollView horizontal contentContainerStyle={{
                paddingHorizontal: LAYOUT_HORIZONTAL_PADDING,
                marginTop: 10
            }}>
                {categories.map((category, index) => (
                    <Tab
                        name={category.name}
                        key={index}
                        isLastTab={isLastTab}
                        onPress={() => setTabs(index)}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

const Posts = ({ }) => {
    const ACTIONS_CONTAINER_HEIGHT = 54;

    const [posts, setPosts] = useState(postsData);


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

        <ScrollView contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: LAYOUT_HORIZONTAL_PADDING,
            paddingVertical: 10,
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
                                ...elevation_4,
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
                                ...elevation_4,
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
        </ScrollView >

    );
};

const BottomTabs = ({ }) => {
    return (
        <View style={{
            // display: 'flex',
            flexDirection: 'row',
            height: 60,
            borderWidth: 1,

        }}>
            <Text>BottomTabs</Text>
        </View>
    );
};

const Home = ({
    params,
}) => (
    <View style={{ flexGrow: 1, }}>
        <View style={{
            height: '35%'
        }}>
            <Header />
            <Stories />
            <TopTabs />
        </View>

        <View style={{
            height: '65%',
        }}>
            <Posts />
        </View>

        {/* <BottomTabs /> */}
    </View>
);

export default Home;
