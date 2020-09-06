import React, { useState, useEffect } from 'react';

const [img,setImg]=useState([]);
useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/photos/`)
    .then(res => res.json())
    .then(data => console.log(data))
})
const Image = () => {
    return (
        <div>
            
        </div>
    );
};

export default Image;