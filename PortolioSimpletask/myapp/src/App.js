
import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Home from './Home';
import About from './About';
import classes from './App.module.css';

class App extends Component {

  state={
    'intro':"I'm a web designer developer based in Attock, Pakistan. I have a passion for web design and love to create for web and mobile devices.",
    'service':['Design What You Want','I like to keep it simple. My goals are to focus on typography, content and conveying the message that you want to send.','Develop what you need.',"I'm a developer, so I know how to create your website to run across devices using the latest technologies available."]
  }


  gotoAbout=()=>{
    this.props.history.push('/about');
  }
  render(){

  return (
    <Router>
      <div>
        <div className={classes.Nav}>
        <ul className={classes.ul}>
          <li className={classes.li} >
          <NavLink exact={true}  className={classes.link } activeClassName={classes.active} to='/'>Home</NavLink>
          </li>
          <li className={classes.li}>
          <NavLink exact={true}  className={classes.link } activeClassName={classes.active} to='/about'>About</NavLink>
          </li>
        </ul>
        </div>

        <Switch>
          <Route exact path="/">
            <Home click={this.gotoAbout} />
          </Route>
          <Route exact path="/about">
            <About skills={this.state.skills} intro={this.state.intro} Service={this.state.service}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );

  }
}


export default App;
