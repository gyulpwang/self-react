import React, { Fragment } from 'react';
import { Link } from 'react-router';
import { UncontrolledCollapse, CardBody, Card } from 'reactstrap';

import ActivityLinks from './activity/ActivityLinks'
import ExperienceLinks from './experience/ExperienceLinks'
import profile from '../components/img/profile.jpg';
import '../components/css/custom.css';

const MenuItem = ({active, children, to, id}) => (
    <Link id={id} to={to} className={(id === 'home') ? 'navbar-brand js-scroll-trigger' : 'nav-link js-scroll-trigger'}>
        {children}
    </Link>
);

const Menu = (props, context) => {
    const { router } = context;
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <MenuItem to={'/'} active={router.isActive('/')} id={'home'}>
                    <span className="d-block d-lg-none">GYULPWANG!</span>
                    <span className="d-none d-lg-block">
                        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profile} alt="profile" />
                    </span>
                </MenuItem>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <MenuItem to={'/history'} active={router.isActive('/history')}>History</MenuItem>
                        </li>
                        <li className="nav-item">
                            <MenuItem to={'/career'} active={router.isActive('/career')}>Career</MenuItem>
                        </li>
                        <li className="nav-item">
                            <MenuItem to={'/skill'} active={router.isActive('/skill')}>Skill</MenuItem>
                        </li>
                        <li className="nav-item">
                            <MenuItem id={'togglerExperience'}>Experience</MenuItem>
                            <UncontrolledCollapse toggler="#togglerExperience">
                                <Card className="toggle-background-style">
                                    <CardBody className="sub-menu-style">
                                        <ExperienceLinks/>
                                    </CardBody>
                                </Card>
                            </UncontrolledCollapse>
                        </li>
                        <li className="nav-item">
                            <MenuItem id={'togglerActivity'}>Activity</MenuItem>
                            <UncontrolledCollapse toggler="#togglerActivity">
                                <Card className="toggle-background-style">
                                    <CardBody className="sub-menu-style">
                                        <ActivityLinks/>
                                    </CardBody>
                                </Card>
                            </UncontrolledCollapse>
                        </li>
                        <li className="nav-item">
                            <MenuItem to={'/certification'} active={router.isActive('/certification')}>Certification</MenuItem>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    );
};

Menu.contextTypes = {
    router: function () {
        return React.PropTypes.object;
    }
}

export default Menu;