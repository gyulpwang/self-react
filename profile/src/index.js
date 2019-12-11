import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import * as serviceWorker from './serviceWorker';

import App from './App';
import Home from './containers/Home';
import About from './containers/About';
import Posts from './containers/Posts';
import Post from './containers/Post';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="post" component={Posts}>
        <Route path=":id" component={Post}/>
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);

/*
지금은 Post 컴포넌트가 Posts 내부에 위치하게 하고 싶기 때문에 이렇게 했지만, 
만약에 주소가 /post/:id 일 때 Posts 를 보여주지 않고 Post 만 보여주게 하고싶다면, 
이렇게 라우트를 다음과 같이 작성하면 된답니다.
*/
/*
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="post" component={Posts}/>
      <Route path="post/:id" component={Post}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
*/


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
