import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import * as serviceWorker from './serviceWorker';

import './components/vendor/bootstrap/css/bootstrap.min.css'
import './components/css/resume.min.css'
import './components/font/font.css'
import './components/vendor/fontawesome-free/css/all.css'

import App from './App';

import Home from './containers/Home';
import History from './containers/History';
import Career from './containers/Career';
import Skill from './containers/Skill';
import Experiences from './containers/Experiences';
import Experience from './containers/Experience';
import Activities from './containers/Activities';
import Activity from './containers/Activity';
import Certification from './containers/Certification';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
          <div class="container-fluid p-0">
              <IndexRoute component={Home}/>
              <hr class="m-0" />
              <Route path="history" component={History}/>
              <hr class="m-0" />
              <Route path="career" component={Career}/>
              <hr class="m-0" />
              <Route path="skill" component={Skill}/>
              <hr class="m-0" />
              <Route path="experience" component={Experiences}/>
              <Route path="experience/:id" component={Experience}/>
              <hr class="m-0" />
              <Route path="activity" component={Activities}/>
              <Route path="activity/:id" component={Activity}/>
              <hr class="m-0" />
              <Route path="certification" component={Certification}/>
          </div>
        </Route>
    </Router>,
    document.getElementById('root')
);

serviceWorker.unregister();
