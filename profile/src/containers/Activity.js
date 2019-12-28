import React, { Fragment } from 'react';

import Education from './activity/Education';
import External from './activity/External';
import Campus from './activity/Campus';

const Activity = ({params}) => {
    if(params.id === "education"){
        return (<Fragment><Education/></Fragment>);
    }else if(params.id === "external"){
        return (<Fragment><External/></Fragment>);
    }else if(params.id === "campus"){
        return (<Fragment><Campus/></Fragment>);
    }else{
        return (<Fragment>Sorry, Not Supported Page</Fragment>);
    }
};

export default Activity;