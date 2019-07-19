import React from 'react';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import {PrivateRoute} from './components/PrivateRoute';
import 'semantic-ui-css/semantic.min.css';
import {Route, Link} from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Route path="/login" component={Nav} />
      <Route exact path="/login" component ={Login}/>
      <PrivateRoute exact path='/friends' component={FriendsList} />
    </div>
  );
}

export default App;
