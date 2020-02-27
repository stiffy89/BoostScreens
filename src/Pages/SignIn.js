import React from 'react';
import AppBarComponent from '../ReUsableComponents/AppBar';
import LoginTile from '../Components/LoginTile';

function SignIn (props)
{
    return (
        <>
        <AppBarComponent name = "Sign In"/>
        <LoginTile/>
        </>
    )
}

export default SignIn;
