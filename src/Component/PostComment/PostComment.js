import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PostPart from '../PostPart/PostPart';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CommentPart from '../CommentPart/CommentPart';
import './PostComment.css'


const PostComment = () => {
    const { id } = useParams();
    const useId = id;

    return (
        <div >
            <div className="post-body">
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="xm">
                    <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: 'auto' }}>
                        <PostPart id={id}></PostPart>
                    </Typography>
                </Container>
            </React.Fragment>
            </div>
            <p style={{fontWeight:'900',fontSize:'25px'}}>Comments...</p>
            <div  className="comment-body">
            <CommentPart id={id}></CommentPart>
            
            </div>
        </div>

    );
};

export default PostComment;