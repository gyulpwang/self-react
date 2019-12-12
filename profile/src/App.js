import React, {Component, Fragment} from 'react';
//import { Button } from 'reactstrap';
import Header from './containers/Header';

class App extends Component{
  render() {
    return (
        <Fragment>
            <Header/>
            {this.props.children}
        </Fragment>
    );
  }
}

export default App;
