import React, { useState,useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {
    Link,
    useHistory
  } from "react-router-dom";
import Auth from '../../Auth';

// import {Link, Switch, Route, Redirect } from 'react-router-dom';
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

  
  const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        "& label.Mui-focused": {
            color: "#017F8D"
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "#017F8D"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "purple"
          },
    },

    image: {
    //   backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '80%', // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    },
    color: {
        backgroundColor: 'darkgray'
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    signin: {
        color: 'gray',
        fontFamily: 'system-ui'
    },
    
  }));

const Login =() => {
    let history = useHistory();
    const classes = useStyles();

    const [useremail, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [openLogin, setLoginOpen] = useState(false);
    const [loginerror, setLoginError] = useState('');

    
    const handleuseremailChange = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleLoginValidation = () =>{
        if(!useremail){
            setLoginOpen(true);
            setLoginError('Email is required..!!!')
            return false;
        }else if(useremail){
            let lastAtPos = useremail.lastIndexOf('@');
            let lastDotPos = useremail.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && useremail.indexOf('@@') == -1 && lastDotPos > 2 && (useremail.length - lastDotPos) > 2)) {
                setLoginOpen(true);
                setLoginError('Please enter a valid email..!!!');
                return false;
            }
        }
        if(!password){
            setLoginOpen(true);
            setLoginError('Password is required..!!!')
            return false;
        }
        setLoginOpen(false);
        setLoginError('')
        return true;
    }

    const login = () => {
        if(handleLoginValidation())
        Auth.authenticate();
        if(Auth.getAuth()){
            history.push('/userdashboard');
        }
    }
    

    return (
        
        <div>
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={2} md={5} className={classes.color} />
                <Grid item xs={12} sm={10} md={7} component={Paper} elevation={6} square>
                    <div style={{ margin: "20em" }} className={classes.paper}>

                        <Typography className={classes.signin} component="h1" variant="h5">
                            Sign In
                    </Typography><br />
                        <p style={{ color: 'darkcyan' }}>Enter your email and password</p>
                        <form className={classes.form} noValidate>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Email"
                                name="useremail"
                                autoComplete="useremail"
                                autoFocus
                                data-testid='useremail'
                                onChange={handleuseremailChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                data-testid='password'
                                onChange={handlePasswordChange}
                            />
                            <br/>
                            <br/>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <br/>
                            <br/>
                            <br/>
                            <Button style={{ borderRadius: '1em' }}
                                fullWidth
                                variant="contained"
                                color="primary"
                                data-testid='signIn_btn'
                                className={classes.submit, 'submit-register-btn'}
                                onClick={login}
                            >
                                Sign In
                            </Button>
                            <br/>
                            <br/>
                            <Grid container>
                                <Grid item xs>
                                    {/* <Link data-testid='forgotPwdLink' variant="body2">
                                    Forgot password?
                                </Link> */}
                                </Grid>
                                <Grid item>
                                    <Link data-testid='signUpLink' to="/register" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Snackbar open={openLogin} autoHideDuration={6000} onClose={() => setLoginOpen(false)}>
                                <Alert data-testid='loginerrMsg' onClose={() => setLoginOpen(false)} severity="error">
                                    {loginerror}
                                </Alert>
                            </Snackbar>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </div>   
        
    )
}

export default Login;