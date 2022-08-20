import { useState,useEffect } from 'react';
import React from 'react';
import * as firebase from 'firebase'
import { useParams } from 'react-router-dom';

function PostDetail() {
    const [post,setPost] = useState({});
    const {postId} = useParams();
    useEffect(()=>{
        firebase.firestore().collection('posts').doc(postId).get().then((snapshot)=>{
          const post = snapshot.data();
          setPost(post)  
        })
    },[])
    return (  
        <div className='post-detail' >
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}

export default PostDetail;