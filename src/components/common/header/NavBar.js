import React, { useState } from 'react';
import './NavBar.css';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Data } from '../../assets';
import NotesIcon from '@material-ui/icons/Notes';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  },
  root: {
    color: theme.palette.text.primary
  }
}));

function NavBar() {
  const classes = useStyles();

  return (
    <div className="navBar_container">
      <div className="navBar_container_main">
        <div className="navBar_links navBar_logo">
          <div style={{ margin: 10 }}>
            <img src={Data.logoIcon} alt="" className="navBar_logo" />
          </div>
        </div>
        <div className="navBar_links navBar">
          <div>SOLUTIONS</div>
          <div>CATEGORIES</div>
          <div>RESOURCES</div>
          <div>USECASES</div>
          <div>SIGNIN</div>

          <div>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              SIGN UP
            </Button>
          </div>
          <div className="navBar-Icon">
            <NotesIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
