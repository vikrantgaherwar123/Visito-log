import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { loadCSS } from 'fg-loadcss';
import HomeIcon from '@material-ui/icons/Home';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DateFnsUtils from "@date-io/date-fns"; // import
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import {
  KeyboardDatePicker,
} from '@material-ui/pickers';
require('jquery-ui');
require('jquery-ui/ui/widgets/sortable');
require('jquery-ui/ui/disable-selection');
const axios = require('axios');

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  typography: {
    padding: theme.spacing(2),
  },
  root: {
    display: 'flex',
    '& > .fa': {
      margin: theme.spacing(2),
    },
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  nested: {
    paddingLeft: theme.spacing(4),
    backgroundColor: '#ADD8E6',
    color: 'blue'
  },
  nestedList: {
    paddingLeft: theme.spacing(4),
    backgroundColor: '#ccd4d6'
  },
  mar10px: {
    margin: '10px'
  },


  cardroot: {
    // maxWidth: 345,
    // margin: 'auto'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function VisitorLogContainer() {

  React.useEffect(() => {
    //componentDidmount
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
    return () => {
      //componentWillUnmount
      node.parentNode.removeChild(node);
    };
  }, []);

  const classes = useStyles();

  const [inputValue, setInputValue] = React.useState('');
  const [emailValue, setEmailValue] = React.useState('');
  const [PersonToVisitValue, setPersonToVisitValue] = React.useState('');
  const [selectedDate] = React.useState(new Date());
  const [EntryTime, setEntryTime] = React.useState('');
  const [ExitTime, setExitTime] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [Error, setError] = React.useState('');
  const [sideMenuValue, setsideMenuValue] = React.useState('Visitor Entry');
  const [opensidenav, setOpenSidenavContent] = React.useState(true);
  const [visitorList, setvisitorList] = React.useState([]);
  const [latestNews, setlatestNews] = React.useState(false);
  const [newsList, setnewsList] = React.useState([]);
  const [selectedVistorValue, setSelectedVistorValue] = React.useState('a');

 



  const sideMenuChange = (value) => {
    setOpen(false);
    setsideMenuValue(value);

    if (value === 'Visitor List') {
      let list = JSON.parse(localStorage.getItem('form'))
      setvisitorList(list);
      setlatestNews(false);
    }
    if (value === 'Latest News') {
      setlatestNews(true);
      axios.get('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json')
        .then(function (response) {
          // handle success
          response.data.articles.map(items => {items.expanded = false})
          setnewsList(response.data.articles);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }
  }

  const handleExpandClick = (news) => {
    news.expanded = !news.expanded
    setnewsList([...newsList, {expanded : news.expanded}])
  };

  const handleClick = () => {
    setOpenSidenavContent(!opensidenav);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value)
  }

  const handleVisitToChange = (event) => {
    setPersonToVisitValue(event.target.value)
  }

  const handleEntryTimeChange = (event) => {
    setEntryTime(event.target.value);
  }

  const handleExitTimeChange = (event) => {
    setExitTime(event.target.value);
  }

  const handleVistorChange = (visitor) => {
    setSelectedVistorValue(visitor.target.value);
  }

  const handleValidation = () => {
    if (!inputValue) {
      setError('Please Enter name')
      return false;
    }
    if (!emailValue) {
      setError('Please Enter Email')
      return false;
    } else if (emailValue) {
      let lastAtPos = emailValue.lastIndexOf('@');
      let lastDotPos = emailValue.lastIndexOf('.');
      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && emailValue.indexOf('@@') === -1 && lastDotPos > 2 && (emailValue.length - lastDotPos) > 2)) {
        setError('Email is not valid')
        return false;
      }
    }

    if (!PersonToVisitValue) {
      setError('Please Enter Person name to visit')
      return false;
    }
    if (!EntryTime) {
      setError('Please Enter Entry Time')
      return false;
    }
    if (!ExitTime) {
      setError('Please Enter Exit Time')
      return false;
    }
    setError('')
    return true
  }


  const onSubmit = () => {
    if (handleValidation()) {
      setOpen(true)
      const obj = {
        Name: inputValue,
        Email: emailValue,
        typeOfVisit: selectedVistorValue,
        PersonToVisit: PersonToVisitValue,
        date: selectedDate,
        entryTime: EntryTime,
        exitTime: ExitTime
      }

      visitorList.push(obj)
      localStorage.setItem('form', JSON.stringify(visitorList));
    } else {
      setOpen(true)
    }
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="container">
      <Card>
        <CardContent>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
            anchor="left"
          >
            <div className={classes.toolbar} />
            <Divider />
            <List>
              <ListItem button onClick={handleClick}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Main" />
                {opensidenav ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={opensidenav} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button onClick={() => sideMenuChange('Visitor Entry')} className={sideMenuValue === 'Visitor Entry' ? classes.nested : ''} divider>
                    <ListItemText primary='Visitor Entry' />
                  </ListItem>
                  <ListItem button onClick={() => sideMenuChange('Visitor List')} className={sideMenuValue === 'Visitor List' ? classes.nested : ''} divider>
                    <ListItemText primary='Visitor List' />
                  </ListItem>
                  <ListItem button onClick={() => sideMenuChange('Latest News')} className={sideMenuValue === 'Latest News' ? classes.nested : ''} divider>
                    <ListItemText primary='Latest News' />
                  </ListItem>
                </List>
              </Collapse>
            </List>
          </Drawer>
          {sideMenuValue === 'Visitor Entry' ? <form className="col-md-12">
            <div className="form-margin">
              <TextField label="Name" variant="outlined" type="text" name="name" onChange={handleInputChange} />
            </div>
            <div className="form-margin">
              <TextField label="Email" variant="outlined" type="email" name="email" onChange={handleEmailChange} />
            </div>
            <div className="form-margin">Type Of Visit : &nbsp;&nbsp;
          <FormControlLabel onChange={handleVistorChange} checked={selectedVistorValue === 'Meeting'} value="Meeting" control={<Radio color="primary" />} label="Meeting" />
              <FormControlLabel onChange={handleVistorChange} checked={selectedVistorValue === 'Delivery'} value="Delivery" control={<Radio color="primary" />} label="Delivery" />
              <FormControlLabel onChange={handleVistorChange} checked={selectedVistorValue === 'Personal'} value="Personal" control={<Radio color="primary" />} label="Personal" />
            </div>
            <div className="form-margin">Person To Visit : &nbsp;&nbsp;
          <TextField label="Visit to" variant="outlined" type="text" name="visitto" onChange={handleVisitToChange} />
            </div>
            <div className="form-margin">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                  <KeyboardDatePicker
                    disabled
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date"
                    value={selectedDate}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            </div>
            <div className="form-margin">
              Time of Entry : &nbsp;&nbsp;
          {/* <Time value={selectedDate} format="HH:mm:ss" /> */}
              <TextField id="time"
                label="Entry Time"
                type="time"
                // defaultValue={selectedDate.getHours()}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}

                onChange={handleEntryTimeChange} />
            </div>
            <div className="form-margin">
              Time of Exit : &nbsp;&nbsp;
          <TextField id="time"
                label="Exit Time"
                type="time"
                // defaultValue={selectedDate.getHours()}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}

                onChange={handleExitTimeChange} />
            </div>
            <Button onClick={onSubmit} variant="contained" color="primary">
              Submit
        </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity={Error ? "error" : "success"}>
                {Error ? Error : "success"}
              </Alert>
            </Snackbar>
          </form> :
            (!latestNews ? <TableContainer component={Paper}>
              {visitorList ? <Table style={{ marginLeft: '12em' }} className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Type Of Visit</TableCell>
                    <TableCell align="right">Person To Visit</TableCell>
                    <TableCell align="right">Date</TableCell>
                    <TableCell align="right">EntryTime</TableCell>
                    <TableCell align="right">Exit Time</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {visitorList ? visitorList.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell align="right">
                        {row.Name}
                      </TableCell>
                      <TableCell align="right">{row.Email}</TableCell>
                      <TableCell align="right">{row.typeOfVisit}</TableCell>
                      <TableCell align="right">{row.PersonToVisit}</TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                      <TableCell align="right">{row.entryTime}</TableCell>
                      <TableCell align="right">{row.exitTime}</TableCell>

                    </TableRow>
                  )) : ''}
                </TableBody>
              </Table> : <span style={{ textAlign: 'center' }}>No Visitors To Show</span>}
            </TableContainer> :
              <div className="row">
              <h1 style={{fontFamily: 'auto',marginLeft: '8em'}}>NEWS TODAY</h1><hr></hr>
                {newsList.map((news, index) => (news.description ? <Card key={index} className={classes.cardroot, "news-cards"}>
                
                  <CardMedia
                    component="img"
                    alt={news.author}
                    height="140"
                    image={news.urlToImage}
                    title={news.title}
                  />
                  <CardContent >
                    <Typography className="font-desc" variant="body2" color="textSecondary" component="p">
                      {news.description}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                    <IconButton
                      className={clsx(classes.expand, {
                        [classes.expandOpen]: news.expanded,
                      })}
                      onClick={() => handleExpandClick(news)}
                      aria-expanded={news.expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardActions>
                  <Collapse in={news.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    {news.content}
                    </CardContent>
                  </Collapse>
                </Card> : ''
                ))
                }
              </div>
            )
          }
        </CardContent>
      </Card>
    </div>
  );
}