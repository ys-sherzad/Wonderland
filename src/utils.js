import { Dimensions } from 'react-native';

export const SCR_HEIGHT = Dimensions.get('window').height;
export const SCR_WIDTH = Dimensions.get('window').width;

export const LAYOUT_HORIZONTAL_PADDING = 20;
export const HEADER_HEIGHT = 80;
export const ACTIONS_CONTAINER_HEIGHT = 48;

export const gradientColors = [
    'rgba(28, 28, 28, 0.3)',
    'rgba(28, 28, 28, 0.25)',
    'rgba(28, 28, 28, 0.3)',
];

export const numberWithCommas = (x) => {
    if (!x) return x;
    var parts = x.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
};


export const elevation = {
    ...Platform.select({
        ios: {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.15,
            shadowRadius: 4.65,
        },
        android: {
            elevation: 8,
        }
    })
};



export const animationDelay = {
    'header': 800,
    'story-container': 1000,
    'story-profileImg': 1100,
    'story-name': 1150,
    'tabs-container': 1300,
    'post': 1500,
};