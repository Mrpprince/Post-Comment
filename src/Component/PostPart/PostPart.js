import React, { useState, useEffect } from 'react';

const PostPart = (props) => {
    const id = props.id;
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data));
    }, [])
    return (
        <div>
            <h4 style={{marginLeft:'10px'}}>{post.title}</h4>
            <h3 style={{ backgroundColor: 'lightgray', textAlign: 'left', height: '150px', padding: '10px', margin: '50px', color: 'blue' }}>{post.body}</h3>
        </div>
    );
};

export default PostPart;