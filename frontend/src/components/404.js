import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core';


class ErrorPage extends Component {
 
    render() {
        return (
            <div>
            <img style = {{marginTop: '10%', marginBottom: '10px'}} src={'https://coverager.com/wp-content/uploads/2017/02/oh-no.jpg'} alt={'Man in shock'}></img>
            <h2> Are you sure you are looking for the right page? </h2>
            <Typography variant='h1'>h1 Are you sure you are looking for the right page</Typography>
            <Typography variant='h2'>h2 Are you sure you are looking for the right page</Typography>
            <Typography variant='h3'>h3 Are you sure you are looking for the right page</Typography>

            <Typography variant='h4'>h4 Are you sure you are looking for the right page</Typography>

            <Typography variant='h5'>h5 Are you sure you are looking for the right page</Typography>

            <Typography variant='h6'>h6 Are you sure you are looking for the right page</Typography>
            <Typography variant='subtitle1'>Are you sure you are looking for the right page</Typography>
            <Typography variant='subtitle2'>Are you sure you are looking for the right page</Typography>
            <Typography variant='body1'>Are you sure you are looking for the right page</Typography>
            <Typography variant='body2'>Are you sure you are looking for the right page</Typography>
            <Typography variant='caption'>Are you sure you are looking for the right page</Typography>
            <Typography variant='button'>Are you sure you are looking for the right page</Typography>
            <Typography variant='overline'>Are you sure you are looking for the right page</Typography>
            <Typography variant='srOnly'>Are you sure you are looking for the right page</Typography>
            <Typography variant='inherit'>Are you sure you are looking for the right page</Typography>


            <Button><Link style ={{color:'black', textDecoration: 'none'}} to='/landing'> Travel back to Homepage</Link></Button>
            </div>
        );
    }
}

export default ErrorPage; 