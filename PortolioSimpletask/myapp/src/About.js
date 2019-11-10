import React from 'react';
import classes from './about.module.css';
import boyImage from './images/boy.png';
const About=props=>{

    let whatIcando=props.Service[0]
    return(
        <div>
            <div className={classes.styling}>
                <img alt="developer icon" className={classes.centered} src={boyImage}></img>
                <h1><span>Hi  .</span></h1>
                <div className={classes.intro}>
                    <h2>{props.intro}</h2>
                </div>
            </div>
            <div className={classes.styling}>
            <h1 >{whatIcando}</h1>
            <div className={classes.intro}>
                    <h2>{props.Service[1]}</h2>
            </div>
            </div>

            <div className={classes.styling}>
            <h1 >{props.Service[2]}</h1>
            <div className={classes.intro}>
                    <h2>{props.Service[3]}</h2>
            </div>
            </div>
        </div>
    )
}

export default About;