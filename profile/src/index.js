import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css'
import './components/css/resume.min.css'
import './components/css/resume.css'
import './components/vendor/bootstrap/css/bootstrap.min.css'
import './components/font/font.css'
import './components/vendor/fontawesome-free/css/all.css'

/*
import jquery from 'jquery';
window.$ = window.jQuery = jquery;
const $ = window.$;
*/
/*
import './components/vendor/jquery/jquery.min.js'
import './components/vendor/bootstrap/js/bootstrap.bundle.min.js'
import './components/vendor/jquery-easing/jquery.easing.min.js'  // Plugin JavaScript
import './components/js/resume.min.js' // Custom scripts for this template
*/
import App from './App';

import Home from './containers/Home';
import About from './containers/About';
import Awards from './containers/Awards';
import Education from './containers/Education';
import Experiences from './containers/Experiences';
import Experience from './containers/Experience';
import Interests from './containers/Interests';
import Skills from './containers/Skills';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
          <div class="container-fluid p-0">
              <IndexRoute component={Home}/>
              <hr class="m-0" />
              <Route path="about" component={About}/>
              <hr class="m-0" />
              <Route path="awards" component={Awards}/>
              <hr class="m-0" />
              <Route path="education" component={Education}/>
              <hr class="m-0" />
              <Route path="experience" component={Experiences}/>
              <Route path="experience/:id" component={Experience}/>
              <hr class="m-0" />
              <Route path="interests" component={Interests}/>
              <hr class="m-0" />
              <Route path="skills" component={Skills}/>
          </div>
        </Route>
    </Router>,
    document.getElementById('root')
);

/* AS-IS */
/*ReactDOM.render(
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
);*/

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

serviceWorker.unregister();
