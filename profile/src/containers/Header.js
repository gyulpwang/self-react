import React, { Fragment } from 'react';
import { Link } from 'react-router';
import { UncontrolledCollapse, CardBody, Card } from 'reactstrap';

import ExperienceLinks from '../containers/experience/ExperienceLinks'
import profile from '../components/img/profile.jpg';

const MenuItem = ({active, children, to, id}) => (
    <Link id={id} to={to} className="nav-link js-scroll-trigger">
        {children}
    </Link>
);

const Header = (props, context) => {
    const { router } = context;
    
    const toggleBackgroundStyle = {
        backgroundColor : '#007bff',
        borderColor : '#007bff',
        color : 'rgba(255,255,255,.75)'
    };

    const SubMenuStyle = {
        textAlign: 'left',
        marginLeft: '50px',
        fontSize: 'smaller'
    };    

    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    <span className="d-block d-lg-none">GYULPWANG!</span>
                    <span className="d-none d-lg-block">
                        <MenuItem to={'/'} active={router.isActive('/')}>
                            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profile} alt="profile" />
                        </MenuItem>
                    </span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <MenuItem to={'/about'} active={router.isActive('/about')}>About</MenuItem>
                        </li>
                        <li className="nav-item">
                            <MenuItem id={'toggler'}>Experience</MenuItem>
                            <UncontrolledCollapse toggler="#toggler">
                                <Card style={toggleBackgroundStyle}>
                                    <CardBody style={SubMenuStyle}>
                                        <ExperienceLinks/>
                                    </CardBody>
                                </Card>
                            </UncontrolledCollapse>
                        </li>
                        <li className="nav-item">
                            <MenuItem to={'/education'} active={router.isActive('/education')}>Education</MenuItem>
                        </li>
                        <li className="nav-item">
                            <MenuItem to={'/skills'} active={router.isActive('/skills')}>Skills</MenuItem>
                        </li>
                        <li className="nav-item">
                            <MenuItem to={'/interests'} active={router.isActive('/interests')}>Interests</MenuItem>
                        </li>
                        <li className="nav-item">
                            <MenuItem to={'/awards'} active={router.isActive('/awards')}>Awards</MenuItem>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    );
};

Header.contextTypes = {
    router: function () {
        return React.PropTypes.object;
    }
}

export default Header;