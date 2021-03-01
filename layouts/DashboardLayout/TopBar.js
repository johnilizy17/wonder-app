import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  Drawer,
  ListItemIcon,
  Button,
  List,
  ListItemText
} from '@material-ui/core';
import {
  BarChart as BarChartIcon,
  Lock as LockIcon,
  UserPlus as UserPlusIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
} from 'react-feather';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import Logo from 'src/components/Logo';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    width: 60,
    height: 60
  },
  aboveDrawer: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawers: {
    width: '40%',
    height: '65%',
    color: 'black',
    backgroundColor: 'white'
  },
  list: {
    display: 'flex',
    textDecoration: 'None',
    color: 'black',
  }
}));

const TopBar = ({
  className,
  onMobileNavOpen,
  ...rest
}) => {
  const classes = useStyles();
  const [notifications] = useState([]);
  const [open, setOpen] = useState(false);
  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar>
        <RouterLink to="/home">
          <Logo />
        </RouterLink>
        <Box flexGrow={1} />
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <Drawer
              variant="secondary"
              className={classes.drawer}
              open={open}
              anchor="right"
              onClick={() => { setOpen(false); }}
            >
              <AppBar
                className={classes.drawers}
              >
                <RouterLink to="/home" onClick={() => { setOpen(false); }}>
                  <List
                    className={classes.list}
                  >
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText>Home</ListItemText>
                  </List>
                </RouterLink>
                <RouterLink to="/home/dashboard" onClick={() => { setOpen(false); }}>
                  <List className={classes.list}>
                    <ListItemIcon><BarChartIcon /></ListItemIcon>
                    <ListItemText>Dashboard</ListItemText>
                  </List>
                </RouterLink>
                <RouterLink to="/home/products" onClick={() => { setOpen(false); }}>
                  <List className={classes.list}>
                    <ListItemIcon><ShoppingBagIcon /></ListItemIcon>
                    <ListItemText>Products</ListItemText>
                  </List>
                </RouterLink>
                <RouterLink to="/home/store" onClick={() => { setOpen(false); }}>
                  <List className={classes.list}>
                    <ListItemIcon><ShoppingBasketIcon /></ListItemIcon>
                    <ListItemText>Store</ListItemText>
                  </List>
                </RouterLink>
                <RouterLink to="/home/account" onClick={() => { setOpen(false); }}>
                  <List className={classes.list}>
                    <ListItemIcon><UserIcon /></ListItemIcon>
                    <ListItemText>Account</ListItemText>
                  </List>
                </RouterLink>
                <RouterLink to="/home/settings" onClick={() => { setOpen(false); }}>
                  <List className={classes.list}>
                    <ListItemIcon><SettingsIcon /></ListItemIcon>
                    <ListItemText>Settings</ListItemText>
                  </List>
                </RouterLink>
                <RouterLink to="/login" onClick={() => { setOpen(false); }}>
                  <List className={classes.list}>
                    <ListItemIcon><LockIcon /></ListItemIcon>
                    <ListItemText>Login</ListItemText>
                  </List>
                </RouterLink>
                <RouterLink to="/register" onClick={() => { setOpen(false); }}>
                  <List className={classes.list}>
                    <ListItemIcon><UserPlusIcon /></ListItemIcon>
                    <ListItemText>Register</ListItemText>
                  </List>
                </RouterLink>
              </AppBar>
            </Drawer>
            <Button onClick={() => setOpen(!open)}>
              <MenuIcon />
            </Button>
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
