import React from 'react';
import { ScrollView } from 'react-native';
import { categories } from '../data';
import { LAYOUT_HORIZONTAL_PADDING } from '../utils';
import Tab from './Tab';

const TopTabs = ({
    selectedTabIndex,
    setSelectedTabIndex
}) => {

    console.log('THIS RUNNING TOP TABS');

    const isLastTab = categories === categories.length - 1;

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: LAYOUT_HORIZONTAL_PADDING - 8,
            }}
        >
            {categories.map((category, index) => (
                <Tab
                    name={category.name}
                    selected={index === selectedTabIndex}
                    key={index}
                    isLastTab={isLastTab}
                    onPress={() => setSelectedTabIndex(index)}
                />
            ))}
        </ScrollView>
    );
};

export default TopTabs;