import React, { Fragment } from 'react';
import { Link } from 'react-router';

const MenuItem = ({active, children, to}) => (
    <Link to={to} className={`menu-item ${active ? 'active': ''}`}>
        {children}
    </Link>
);

const Nav = (props, context) => {
    const { router } = context;
    return (
        <Fragment>
            <div className="menu">{/* TODO Menu bootStrap Apply*/}}
                <MenuItem to={'/about'} active={router.isActive('/about')}>About</MenuItem>
                <MenuItem to={'/experience'} active={router.isActive('/experience')}>Experience</MenuItem>
                <MenuItem to={'/education'} active={router.isActive('/education')}>Education</MenuItem>
                <MenuItem to={'/skills'} active={router.isActive('/skills')}>Skills</MenuItem>
                <MenuItem to={'/interests'} active={router.isActive('/interests')}>Interests</MenuItem>
                <MenuItem to={'/awards'} active={router.isActive('/awards')}>Awards</MenuItem>
            </div>
        </Fragment>
    );
};

Nav.contextTypes = {
    router: function () {
        return React.PropTypes.object;
    }
}

export default Nav;