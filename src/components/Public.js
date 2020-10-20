import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {
    useHistory
  } from "react-router-dom";
import Auth from '../Auth';
// import {Link, Switch, Route, Redirect } from 'react-router-dom';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
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
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
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
    }
  }));



const Public =() => {
    let history = useHistory();
    {/* Create a registration and login page here */}
    const login = () => {
        Auth.authenticate();
        if(Auth.getAuth()){
            history.push('/protected');
        }
    }

    const logout = () => {
        Auth.signout();
    }
    const [newUser, setNewUser] = useState(false);
    const classes = useStyles();

    return (
        // <div>
        //     <Link to='/'>Public</Link><br/>
        //     <Link to='protected'>Protected</Link><br/>
        //     <button onClick={login}>
        //     Login</button><br />
        // </div>
        <div>
        {!newUser ? <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={2} md={5} className={classes.color} />
            <Grid  item xs={12} sm={10} md={7} component={Paper} elevation={6} square>
                <div style={{margin:"20em"}} className={classes.paper}>
                    {/* <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar> */}
                    <Typography className={classes.signin} component="h1" variant="h5">
                        Sign In
                    </Typography><br/>
                    <p style={{color: 'darkcyan'}}>Enter Your Username And Password</p>
                    <form className={classes.form} noValidate>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button style={{borderRadius: '1em'}}
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit,'submit-register-btn'}
                            onClick={login}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link onClick={() => setNewUser(true)} variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        {/* <Box mt={5}>
                            <Copyright />
                        </Box> */}
                    </form>
                </div>
            </Grid>
        </Grid> :
        
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid  item xs={12} sm={10} md={7} component={Paper} elevation={6} square>
                <div style={{margin:"20em"}} className={classes.paper}>
                    {/* <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar> */}
                    <Typography className={classes.signin} component="h1" variant="h5">
                            Sign Up
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="firstname"
                            label="First Name"
                            name="firstname"
                            autoComplete="firstname"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="lastname"
                            label="Last Name"
                            type="text"
                            id="lastname"
                            autoComplete="lastname"
                        />
                       <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="mobnumber"
                            label="Mobile Number"
                            type="text"
                            id="mobnumber"
                            autoComplete="mobnumber"
                        />
                       <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="organization"
                            label="Organization"
                            type="text"
                            id="organization"
                            autoComplete="organization"
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="orgemail"
                            label="Organization Email"
                            name="orgemail"
                            autoComplete="orgemail"
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="signuppassword"
                            label="Password"
                            type="password"
                            id="signuppassword"
                            autoComplete="current-password"
                        />
                       
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit,'submit-register-btn'}
                        >
                            Register
                        </Button>
                        <Grid style={{justifyContent: "center"}} container>
                            <Grid item>
                                <Link onClick={() => setNewUser(false)} variant="body2">
                                    {"Already a Member? Sign In"}
                                </Link>
                            </Grid>
                        </Grid>
                        {/* <Box mt={5}>
                            <Copyright />
                        </Box> */}
                    </form>
                </div>
            </Grid>
            <Grid item xs={false} sm={2} md={5} className={classes.color} />
        </Grid>
        
        }
        </div>   
        
    )
}

export default Public;