import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const FinalComment = (props) => {
  
    const { name, email, body } = props.obj;
    
const [img,setImg]=useState([]);
useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/photos/`)
    .then(res => res.json())
    .then(data => {
        const newImg=data.slice(0,5);
        setImg(newImg)
    })
},[]);
const image=img.map(img=>img.url);

    return (
        <div>
            
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="xm">
                    <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: 'auto',padding:'10px',marginBottom:"20px" }}>
                        <img src={image} style={{width:'100px',height:'100px',borderRadius:'50%'}} alt=""/>
                        <p style={{color:"blue"}}>{name}</p>
                        <h4>{email}</h4>
                        
                        <h3 style={{backgroundColor:'#7C77D0',color:'#fff',padding:'10px',borderRadius:'10px'}}>{body}</h3>
                    </Typography>
                </Container>
            </React.Fragment>
        </div>
    );
};

export default FinalComment;