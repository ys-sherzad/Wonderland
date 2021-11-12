import React from 'react';
import {
    View,
    Image,
    ScrollView,
    Dimensions,
    StyleSheet
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Text from './Text';

import {
    HEADER_HEIGHT,
    LAYOUT_HORIZONTAL_PADDING
} from '../utils';
import {
    stories,
    categories,
    posts,
} from '../data';

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

const TopTabs = ({ }) => {
    const itemsLength = categories.length - 1;
    return (
        <View>
            <ScrollView horizontal contentContainerStyle={{
                paddingHorizontal: LAYOUT_HORIZONTAL_PADDING,
            }}>
                {categories.map((category, index) => (
                    <>
                        <View key={index} style={{
                            height: 60,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text>{category.name}</Text>
                        </View>
                        {itemsLength !== index && <Spacer horizontal size={20} />}
                    </>
                ))}
            </ScrollView>
        </View>
    );
};

const Posts = ({ }) => {
    return (

        <ScrollView contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: LAYOUT_HORIZONTAL_PADDING,
            paddingVertical: 10,
        }}>
            {posts.map((post, index) => (
                <View key={index} style={{
                    height: 240,
                    borderRadius: 26,
                    marginBottom: 60,
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
                        }}>
                            {post.user.name}
                        </Text>
                    </View>

                    <View style={{ flex: 1 }} />

                    <View style={{
                        marginBottom: 31,
                        padding: 20,
                    }}>
                        <Text>{post.date}</Text>
                        <Text>{post.name}</Text>
                    </View>

                    <View style={{
                        position: 'absolute',
                        bottom: -31,
                        left: 0,
                        right: 0,
                        height: 62,
                    }}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            backgroundColor: 'yellow',
                            marginVertical: 2,
                            marginHorizontal: 20
                        }}>
                            <View style={{
                                width: 160,
                                backgroundColor: 'green',
                                borderRadius: 20,
                            }}>
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-evenly'
                                }}>
                                    <Text>Icon</Text>
                                    <Text>2,345</Text>
                                </View>
                            </View>

                            <View style={{
                                width: 64,
                                backgroundColor: 'green',
                                borderRadius: 20,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Text>Icon</Text>
                            </View>
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
            ))}
        </ScrollView>

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
            height: '30%'
        }}>
            <Header />
            <Stories />
            <TopTabs />
        </View>

        <View style={{
            height: '70%',
        }}>
            <Posts />
        </View>

        {/* <BottomTabs /> */}
    </View>
);

export default Home;
