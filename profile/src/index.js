import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import * as serviceWorker from './serviceWorker';

//import 'bootstrap/dist/css/bootstrap.css'
import './components/vendor/bootstrap/css/bootstrap.min.css'
import './components/css/resume.min.css'
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
import Abouts from './containers/Abouts';
import About from './containers/About';
import Awards from './containers/Awards';
import Education from './containers/Education';
import Experiences from './containers/Experiences';
import Experience from './containers/Experience';
import Certifications from './containers/Certifications';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
          <div class="container-fluid p-0">
              <IndexRoute component={Home}/>
              <hr class="m-0" />
              <Route path="about" component={Abouts}/>
              <Route path="about/:id" component={About}/>
              <hr class="m-0" />
              <Route path="awards" component={Awards}/>
              <hr class="m-0" />
              <Route path="education" component={Education}/>
              <hr class="m-0" />
              <Route path="experience" component={Experiences}/>
              <Route path="experience/:id" component={Experience}/>
              <hr class="m-0" />
              <Route path="certifications" component={Certifications}/>
          </div>
        </Route>
    </Router>,
    document.getElementById('root')
);

serviceWorker.unregister();
