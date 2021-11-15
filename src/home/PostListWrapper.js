import React, { useState, useRef } from 'react';
import {
    ScrollView
} from 'react-native';
import { postsData } from '../data';
import PostList from './PostList';

const PostListWrapper = ({ }) => {

    const [posts, setPosts] = useState(postsData);

    const scrollViewRef = useRef();

    // useEffect(() => {
    //     setTimeout(() => {
    //         scrollViewRef.current.scrollTo({
    //             x: SCR_WIDTH,
    //             y: 0,
    //             animated: true
    //         });
    //     }, 3000);
    // }, []);


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
        <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            style={{
                flex: 1
            }}
        >
            <PostList
                posts={posts}
                handleLike={handleLike}
            />
            <PostList
                posts={posts}
                handleLike={handleLike}
            />
        </ScrollView>

    );
};

export default PostListWrapper;
