import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'pages/home/index';
import Search from 'pages/search/index';

export default function MainRouter(props) {

  return (
      <div>             
          <Switch>
            <Route exact path="/" component={Search} />                                                
            <Route exact path="/home" component={Home} />                        
          </Switch>               
      </div>
  );
}