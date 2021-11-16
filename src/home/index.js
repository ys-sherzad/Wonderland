import React, { useState } from 'react';
import {
    View,
} from 'react-native';

import Spacer from './Spacer';
import TopTabs from './TopTabs';

import PostListWrapper from './PostListWrapper';
import Header from './Header';
import Stories from './Stories';
import { SCR_HEIGHT } from '../utils';

const Home = () => {

    const [selectedTabIndex, setSelectedTabIndex] = useState(0);

    return (
        <View style={{ flexGrow: 1, }}>
            <View style={{
                height: 330
            }}>
                <Header />
                <Spacer size={10} />
                <Stories />
                <Spacer size={5} />
                <TopTabs
                    selectedTabIndex={selectedTabIndex}
                    setSelectedTabIndex={setSelectedTabIndex}
                />
            </View>

            <View style={{
                height: SCR_HEIGHT - 330
            }}>
                <PostListWrapper
                    selectedTabIndex={selectedTabIndex}
                />
            </View>
        </View>
    );
};

export default Home;
