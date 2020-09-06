import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Post from './Component/Post/Post';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostComment from './Component/PostComment/PostComment';
import NotFound from './Component/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>

      <Router>
        <Switch>
          <Route path="/home">
            <Post></Post>

          </Route>
          <Route exact path="/">
            <Post></Post>
          </Route>
          <Route path="/details/:id">
            <PostComment></PostComment>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
