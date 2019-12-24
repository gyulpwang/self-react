import React, { Fragment } from 'react';

import Career from './about/Career';
import History from './about/History';
import Skills from './about/Skills';
import Activities from './about/Activities';

const About = ({params}) => {
    if(params.id === "career"){
        return (<Fragment><Career/></Fragment>);
    }else if(params.id === "history"){
        return (<Fragment><History/></Fragment>);
    }else if(params.id === "skills"){
        return (<Fragment><Skills/></Fragment>);
    }else if(params.id === "activities"){
        return (<Fragment><Activities/></Fragment>);
    }else{
        return (<Fragment>Sorry, Not Supported Page</Fragment>);
    }
};

export default About;