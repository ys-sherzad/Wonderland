import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { categories } from '../data';
import { LAYOUT_HORIZONTAL_PADDING } from '../utils';
import Tab from './Tab';

const TopTabs = ({ }) => {
    const [tabs, setTabs] = useState(categories);
    const isLastTab = tabs === categories.length - 1;

    const handleSelectedTab = (category) => {
        const newTabs = tabs.map(tab => {
            if (tab.name === category.name) {
                return {
                    ...tab,
                    selected: true
                };

            }
            return {
                ...tab,
                selected: false
            };
        });
        setTabs(newTabs);
    };

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: LAYOUT_HORIZONTAL_PADDING - 8,
            }}
        >
            {tabs.map((category, index) => (
                <Tab
                    name={category.name}
                    selected={category.selected}
                    key={index}
                    isLastTab={isLastTab}
                    onPress={() => handleSelectedTab(category)}
                />
            ))}
        </ScrollView>
    );
};

export default TopTabs;