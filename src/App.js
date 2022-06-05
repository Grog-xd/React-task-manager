import './App.css';
import {useEffect, useState} from "react";
import CreateBlock from "./components/createBlock/createBlock";
import PostList from "./components/PostList/PostList";

function App() {

  const [posts, setPosts] = useState([])

    useEffect(()=>{
        localPosts()
    }, [])

    // дима ты сделал гениальную вещь в функциях updatePosts removePost updatePost я закоментил основную логику и поставил в конце ее функцию localPosts(которая перебирает значения localStorage и выжает данные на их основе)

    function localPosts(){
        let localPosts = []
        for(let i=0; i<localStorage.length; i++) {
            let key = localStorage.key(i);
            localPosts = [...localPosts, {
                id:key,
                value:localStorage.getItem(key)
            }]
        }
        setPosts(localPosts)
    }

    function updatePosts(post){
      // setPosts([...posts, post])
      localStorage.setItem(post.id, post.value)
        localPosts()
    }

    function removePost(post){
      // setPosts(posts.filter(p => p.id !== post.id))
      localStorage.removeItem(post.id)
        localPosts()
    }

    function updatePost(post, value){
        // const pos = [...posts]
        // pos.map(e=>{
        //     if (e.id === post.id){
        //       return e.value = value
        //     }
        // })
        // setPosts(pos)
        localStorage.removeItem(post.id)
        localStorage.setItem(post.id, value)
        localPosts()
    }

  return (
    <div className="App">
        <CreateBlock updatePosts={updatePosts} />
        <PostList updatePost={updatePost} removePost={removePost} posts={posts} />
    </div>
  );
}

export default App;
