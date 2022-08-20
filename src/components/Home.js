import { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase'
function Home() {
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        firebase.firestore().collection('posts').get().then((snapshot)=>{
            const posts = snapshot.docs.map((doc)=>{
                const data = doc.data();
                data['id'] = doc.id;
                return data;
            })
            console.log('posts',posts)
            setPosts(posts)
        })
    },[])
    return (  
        <div className='home'>
            <div id='blog-by'>
                {/* {posts.map((post,index)=>{
                    <div className='post' key={`post-${index}`}>
                        <Link to={`/post/${post.id}`} >
                            <h3>{post.title}</h3>
                        </Link>
                        <p>{post.subtitle}</p>
                    </div>
                })} */}
                {posts.map((post, index) => (
                    <div className="post" key={`post-${index}`}>
                        <Link to={`/post/${post.id}`}>
                            <h3>{post.title}</h3>
                        </Link>

                        <p>{post.subTitle}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;