import React, { useEffect, useRef, useState } from 'react';
import {
    View,
} from 'react-native';

import Spacer from './Spacer';
import TopTabs from './TopTabs';

import PostListWrapper from './PostListWrapper';
import Header from './Header';
import Stories from './Stories';


const Home = () => (
    <View style={{ flexGrow: 1, }}>
        <View style={{
            height: '40%',
        }}>
            <Header />
            <Spacer size={18} />
            <Stories />
            <Spacer size={20} />
            <TopTabs />
        </View>

        <View style={{
            height: '60%',
        }}>
            <PostListWrapper />
        </View>
    </View>
);

export default Home;
