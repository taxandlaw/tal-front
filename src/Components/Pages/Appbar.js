import React from 'react';
import { alpha, makeStyles, Box } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Link, useHistory } from 'react-router-dom';
import { path, paths } from '../Constants/Data'
import { grey } from '@material-ui/core/colors';
import { useOktaAuth } from '@okta/okta-react';
// import {Taxandlawlogo} from '../image';

const useStyles = makeStyles((theme) => ({



  container: {

    justifyContent: 'center',

    '& > *': {
      padding: 20
    }
  },

  link: {
    textDecoration: 'none',
    color: 'inherit'

  },








  hdr: {
    background: '#FFFFFF',
    color: 'black',
    position: 'fixed',
    fontWeight: 'bold'

  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },


  // home ICON@@@@@@@@@@@@
  root: {
    '& > svg': {
      margin: theme.spacing(2),
    },
  },

  image:{
    width:50,
    height: 50
  }



}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const history = useHistory();
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const url = "http://localhost:8000/api/file/1644421801685-blog-logo taxandlaw.png"

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>



    </Menu>
  );

  // const mobileMenuId = 'primary-search-account-menu-mobile';
  // const renderMobileMenu = (
  // <Menu
  //   anchorEl={mobileMoreAnchorEl}
  //   anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
  //   id={mobileMenuId}
  //   keepMounted
  //   transformOrigin={{ vertical: 'top', horizontal: 'right' }}
  //   open={isMobileMenuOpen}
  //   onClose={handleMobileMenuClose}
  // > 

  {/* <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem> */}
  {/* <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem> */}
  {/* <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem> */}
  //   </Menu>
  // );


  // DRAWERE@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // function HomeIcon(props) {
  //     return (
  //       <SvgIcon {...props}>
  //         <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  //       </SvgIcon>
  //     );
  //   }



  //   const [state, setState] = React.useState({
  //     top: false,
  //     left: false,
  //     bottom: false,
  //     right: false,
  //   });

  //   const toggleDrawer = (anchor, open) => (event) => {
  //     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //       return;
  //     }

  //     setState({ ...state, [anchor]: open });
  //   };

  //   const list = (anchor) => (
  //     <div
  //       className={clsx(classes.list, {
  //         [classes.fullList]: anchor === 'top' || anchor === 'bottom',
  //       })}
  //       role="presentation"
  //       onClick={toggleDrawer(anchor, false)}
  //       onKeyDown={toggleDrawer(anchor, false)}
  //     >

  //       <List>
  //         {['Home', 'Case Laws', 'Notices', 'Contact Us'].map((text, index) => (



  //            <ListItem button

  //              key={text}>
  //             <ListItemIcon>{index % 2 === 0 ? <HomeIcon color="primary" /> : <MailIcon />}</ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItem>

  //         ))}
  //       </List>



  {/* <Divider />

      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (

          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <HomeIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
  // </div>
  // );


// &&&&&&&&&&&&&&&&&&&&LOGIN LOGOUT


  // const { oktaAuth, authState } = useOktaAuth();

  // if (authState && authState.isPending)
  //   return null;

  // const login = async () => history.push('/login');
  // const logout = async () => oktaAuth.signOut();

  // const button = authState.isAuthenticated ? <button onClick={logout}>Logout</button> : <button onClick={login}>Login</button>;











  return (
    <>
      <div className={classes.grow}>
        <AppBar className={classes.hdr} >
          <Toolbar >
            {/* {[''].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(anchor, true)}>{anchor}
          
         
            <MenuIcon/>
          </IconButton>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
      {list(anchor)}
    </Drawer>

          </React.Fragment>

))} */}

            {/* <Typography className={classes.title} variant="h6" noWrap> */}
            <Link to='/' className={classes.link}>  <img src={url} alt='taxandlaw18' className={classes.image} /></Link>
            {/* </Typography> */}
            <Toolbar className={classes.container}  >
              <Link to='/' className={classes.link}><Typography>HOME</Typography></Link>
              <Link to='/acts' className={classes.link}><Typography>ACTS</Typography></Link>
              {/* <Link to= '/about' className = {classes.link}><Typography>About</Typography></Link> */}
              <Link to='/contactUs' className={classes.link}><Typography>CONTACT</Typography></Link>
              <Link to='/login' className={classes.link}><Typography>
                {/* {button} */}
                LOGIN
                </Typography></Link>


            </Toolbar>






            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              {/* <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
              {/* <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton> */}
            </div>
            {/* <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div> */}
          </Toolbar>
        </AppBar>
        {/* {renderMobileMenu} */}
        {renderMenu}
      </div>
    </>
  );
}
