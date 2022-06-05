import React from 'react';
import classes from "./PostList.module.css";
import PostItem from "../PostItem/PostItem";

const PostList = ({posts, removePost, updatePost}) => {
    //Снизу два варианта оба рабочих

    // if(!posts.length)
    //     return <h1>Заметок пока нет</h1>
    //
    // return (
    //     <div className={classes.postsBlock}>
    //         {posts.map((post) =>
    //             <PostItem updatePost={updatePost} removePost={removePost} key={post.id} post={post}/>
    //         )}
    //     </div>
    // );

    return (!posts.length)
        ?   <h1>Заметок пока нет</h1>
        :   <div className={classes.postsBlock}>
                {posts.map((post) =>
                    <PostItem updatePost={updatePost} removePost={removePost} key={post.id} post={post}/>
                )}
            </div>
};

export default PostList;