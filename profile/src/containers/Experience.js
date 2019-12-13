import React, { Fragment } from 'react';

import W from './experience/w';
import B from './experience/b';
import K from './experience/k';

const Experience = ({params}) => {
    if(params.id === "w"){
        return (<Fragment><W/></Fragment>);
    }else if(params.id === "b"){
        return (<Fragment><B/></Fragment>);
    }else if(params.id === "k"){
        return (<Fragment><K/></Fragment>);
    }else{
        return (<Fragment>Sorry, Not Supported Page</Fragment>);
    }
};

export default Experience;