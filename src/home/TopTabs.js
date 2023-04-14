import React from 'react';
import { ScrollView } from 'react-native';
import { categories } from '../data';
import { animationDelay, LAYOUT_HORIZONTAL_PADDING } from '../utils';
import ScaleAnimation from './ScaleAnimation';
import Tab from './Tab';

const TopTabs = ({
    selectedTabIndex,
    setSelectedTabIndex
}) => {

    return (
        <ScaleAnimation delay={animationDelay['tabs-container']}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: LAYOUT_HORIZONTAL_PADDING - 8,
                }}
            >
                {categories.map((category, index) => {
                    return (
                        <Tab
                            name={category.name}
                            selected={index === selectedTabIndex}
                            key={index}

                            onPress={() => setSelectedTabIndex(index)}
                        />
                    );
                })}
            </ScrollView>
        </ScaleAnimation>
    );
};

export default TopTabs;