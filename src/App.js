import './App.css';
import {useEffect, useState} from "react";
import CreateBlock from "./components/createBlock/createBlock";
import PostList from "./components/PostList/PostList";

function App() {

  const [posts, setPosts] = useState([])

    useEffect(()=>{
        localPosts()
    }, [])

    function localPosts(){
        let localPosts = []
        for(let i=0; i<localStorage.length; i++) {
            let key = localStorage.key(i);
            localPosts = [...localPosts, {
                id:key,
                value:localStorage.getItem(key)
            }]
            setPosts(localPosts)
        }
    }

    function updatePosts(post){
      setPosts([...posts, post])
      localStorage.setItem(post.id, post.value)
    }

    function removePost(post){
      setPosts(posts.filter(p => p.id !== post.id))
      localStorage.removeItem(post.id)
    }

    function updatePost(post, value){
        const pos = [...posts]
        pos.map(e=>{
            if (e.id === post.id){
              return e.value = value
            }
        })
        setPosts(pos)
        localStorage.removeItem(post.id)
        localStorage.setItem(post.id, value)
    }

  return (
    <div className="App">
        <CreateBlock updatePosts={updatePosts} />
        <PostList updatePost={updatePost} removePost={removePost} posts={posts} />
    </div>
  );
}

export default App;
