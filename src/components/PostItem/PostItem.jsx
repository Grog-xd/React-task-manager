import React, {useState} from 'react';
import classes from "./PostItem.module.css";

const PostItem = ({post, removePost, updatePost}) => {


    return (
        <div className={classes.post}>
            <textarea className={classes.input}  value={post.value} onChange={(e)=> updatePost(post, e.target.value)}/>
            <div>
                <p>{post.id}</p>
                <button onClick={()=> removePost(post)}  className={classes.btn}>Удалить</button>
            </div>

        </div>
    );
};

export default PostItem;