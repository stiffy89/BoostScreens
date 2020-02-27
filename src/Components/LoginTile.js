import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';

import Button from '../ReUsableComponents/Button.js';

import {
    Paper,
    Grid,
    FormControl,
    InputLabel,
    Input,
    InputAdornment,
    IconButton,
    CardMedia,
    Card
} from '@material-ui/core';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles(theme=> ({

    paper: {
        marginTop: theme.spacing.unit * 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fffef7",
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 3,
        paddingBottom: theme.spacing.unit * 3,
        paddingTop: theme.spacing.unit * 3,
        width: theme.spacing (30),
        height: theme.spacing (50)
    },

    button: {
        marginTop: "10px",
        marginLeft: "170px"
    },

    cardMedia: {
        height: 140,
        opacity: 0.8
    }
}));

function LoginTile () 
{
    //use styles
    const classes = useStyles();

    const [values, setValues] = useState({
        password: " ",
        showPassword: false
    });

    const showPasswordHandler = () => {
        setValues({...values, showPassword: !values.showPassword});
    }

    const handlePassword = (e) => {
        setValues({...values, password: e.target.value});
    }

    return (
        <div>
        <Grid container justify="center" alignItems="center">
            <Grid item>
                <Paper className = {classes.paper} >

                    <Card>
                        <CardMedia
                            className = {classes.cardMedia}
                            component="img"
                            src = "https://source.unsplash.com/800x450/?fire"
                        />
                    </Card>
                    
                
                    <FormControl 
                    margin="normal"
                    required
                    fullWidth
                    >
                        <InputLabel>
                            User Name
                        </InputLabel>
                        <Input
                            id="username"
                            name="username"
                            autoFocus
                        />
                    </FormControl>

                    <FormControl 
                    margin="normal"
                    required
                    fullWidth
                    >
                        <InputLabel>
                            Password
                        </InputLabel>
                        <Input
                            id="password"
                            name="password"
                            type={values.showPassword? "text" : "password"}
                            onChange = {handlePassword}
                            autoFocus
                            endAdornment = {
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={showPasswordHandler}
                                        edge="end"
                                    >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    
                    <div className = {classes.button}>
                        <Button
                            buttonName = "Login"
                            variant = "contained"
                            color = "primary"
                            component = "button"
                        />
                    </div>
                </Paper>
            </Grid>
        </Grid>
        </div>
    )
}

export default LoginTile;