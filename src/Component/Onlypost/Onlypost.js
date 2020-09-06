import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const Onlypost = (props) => {
    const { title, body,id } = props.post;
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: 'auto', textAlign: 'center',border:'2px solid lightgray',marginBottom:'5px',borderRadius:'10px' }}>
                    <p>{title}</p>
                    <h4 style={{ backgroundColor:'#fff',textAlign:'left',height:'150px',padding:'10px',margin:'50px',color:'blue'}}>{body}</h4>
                    <Button color="primary" variant="contained" href={'/details/'+id} style={{marginBottom:"10px"}}>See More</Button>
                </Typography>
               
                  
                
            </Container>
        </React.Fragment>
    );
};

export default Onlypost;