import React, { useState, useEffect } from 'react';
import Onlypost from '../Onlypost/Onlypost';


const Post = () => {

    const [post,setPost]=useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res=>res.json())
        .then(data=>setPost(data));
    },[])
    return (
        <div>
             {
                 post.map(post=> <Onlypost post={post}></Onlypost>)
             }           
        </div>
    );
};

export default Post;