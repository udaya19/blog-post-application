import React from 'react';
import 'firebase/firestore'
import { useFormInput } from '../hooks';
import * as firebase from 'firebase'
// import classes from './Button.module.css';
import styled ,{css} from 'styled-components';
const StyledButton = styled.button`
    height: 33px;
    background: ${(props)=>props.primary?'#4caf50':'blue'};
    border: 0;
    color: #fff;
    padding: 8px;
    font-size: 15px;
    border-radius: 3px;
    cursor: pointer;
    ${(props)=>props.primary && css`
        border:1px solid ${props.borderColor};
    `}
`
function CreatePost() {
    const title = useFormInput('');
    const content = useFormInput('');
    const subTitle = useFormInput('');
    function handleSubmit(e){
        e.preventDefault();
        console.log("title",title);
        console.log("content",content);
        console.log("subTitle",subTitle);
        firebase.firestore().collection('posts').add({
            title:title.value,
            content:content.value,
            subTitle:subTitle.value,
            createdAt:new Date(),
        })
    }
    return (  
        <div className='create-post'>
            <h1>CreatePost</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-field'>
                    <label>Title</label>
                    <input {...title} />
                </div>
                <div className='form-field'>
                    <label>Sub Title</label>
                    <input {...subTitle} />
                </div>
                <div className='form-field'>
                    <label>Content</label>
                    <textarea value={content.value} onChange={content.onChange} ></textarea>
                </div>
                {/* <button className={classes.createPostBtn} >Create Post</button> */}
                <StyledButton primary borderColor="red" >Create Post</StyledButton>
            </form>
        </div>
    );
}

export default CreatePost;