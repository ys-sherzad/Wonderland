import React from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
} from 'react-native';
import {
    HEADER_HEIGHT,
    LAYOUT_HORIZONTAL_PADDING
} from '../utils';
import { stories } from '../data';

const Header = ({
}) => {
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            height: HEADER_HEIGHT,
            borderWidth: 1,
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
        <ScrollView horizontal contentContainerStyle={{
            // flexDirection: 'row',
            paddingHorizontal: LAYOUT_HORIZONTAL_PADDING,
            paddingVertical: 4,
            borderWidth: 1,
        }}>
            {stories.map((story, index) => (
                <View key={index} style={{
                    height: 120,
                    width: 80,
                    backgroundColor: 'red',
                    marginRight: 8,
                    borderRadius: 10,
                }}>

                </View>
            ))}
        </ScrollView>
    );
};

const TopTabs = ({
}) => {
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            height: 60,
            borderWidth: 1,
        }}>
            <Text>TopTabs</Text>
        </View>
    );
};

const Posts = ({ }) => {
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            height: 60,
            borderWidth: 1,
        }}>
            <Text>Posts</Text>
        </View>
    );
};

const BottomTabs = ({ }) => {
    return (
        <View style={{
            display: 'flex',
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
    <View>
        <Header />
        <Stories />
        <TopTabs />
        <Posts />
        <BottomTabs />
    </View>
);

export default Home;
