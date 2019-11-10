import React from 'react';
import {
    NavLink
  } from "react-router-dom";
import classes from './Home.module.css';
const Home=props=>{ 
    const className=[classes.button,classes.buttongray]
    return(
        <div>
            <div className={classes.backgroundimage}></div>
            <div className={classes.centered}>
                <h1>Hello, I'm Faizan Khan. I'm Web Developer.</h1>
                <h3>Working on Python and JavaScript Frameworks for Web</h3>
                <NavLink to='/about' className={className.join(' ')}>Know About me</NavLink>
            </div>
        </div>
);
}
export default Home;