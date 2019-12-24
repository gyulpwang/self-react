import React, {Component, Fragment} from 'react';
//import { Button } from 'reactstrap';
import Menu from './containers/Menu';

class App extends Component{
  render() {
    return (
        <Fragment>
            <Menu/>
            {this.props.children}
        </Fragment>
    );
  }
}

export default App;
