import { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase'
import styled from 'styled-components'; 
const BlogHeading =  styled.h1`
    text-align: center;
    color: #2196f3;
    margin-bottom: 2px;
`;
const PostSubTitle = styled.p`
    font-size:13px;
`;
const Post = styled.div`
    border: 1px solid #e1e1e1;
    padding: 10px 10px;
    border-radius: 5px;
    margin-top: 10px;

    h3:hover{
        color: #2196f3;
    }
    h3{
        margin: 0;
        padding: 0;
        font-size: 25px;
        font-weight: bold;
        color: black;
    }
    a{
        text-decoration: none;
    }
`
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
            <BlogHeading>Tech Blog</BlogHeading>
            <div id='blog-by'>
                Udaya
            </div>
            <button className='createPostBtn'>This is a Button</button>
                {/* {posts.map((post,index)=>{
                    <div className='post' key={`post-${index}`}>
                        <Link to={`/post/${post.id}`} >
                            <h3>{post.title}</h3>
                        </Link>
                        <p>{post.subtitle}</p>
                    </div>
                })} */}
                {posts.map((post, index) => (
                    <Post className="post" key={`post-${index}`}>
                        <Link to={`/post/${post.id}`}>
                            <h3>{post.title}</h3>
                        </Link>

                        <PostSubTitle>{post.subTitle}</PostSubTitle>
                    </Post>
                ))}
            
        </div>
    );
}

export default Home;
const styles = {
    heading:{
        marginTop:30
    }
}