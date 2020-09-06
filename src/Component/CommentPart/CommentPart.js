import React, { useState, useEffect } from 'react';
import FinalComment from '../FinalComment/FinalComment';

const CommentPart = (props) => {
    console.log(props);
    const id = parseFloat(props.id) ;
    const [comment, setComment] =useState([]);
    
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments`)
            .then(response => response.json())
            .then(data => setComment(data))
    }, []);
    const comments = comment.filter(comment=>comment.postId===id);

    return (
        
       <div>
           {
               comments.map(obj=> <FinalComment  obj={obj}></FinalComment>)
               
           }
           
       </div>
    );
};

export default CommentPart;