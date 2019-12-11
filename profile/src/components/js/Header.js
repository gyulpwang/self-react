import React from 'react';
import { Link } from 'react-router';
import Nav from './Nav';

const MenuItem = ({active, children, to}) => (
    <Link to={to} className={`menu-item ${active ? 'active': ''}`}>
        {children}
    </Link>
);

const Header = (props, context) => {
    const { router } = context;
    return (
        <div>
            <div className="logo">
                프로필 페이지 헤더
            </div>
            {/* <Nav /> */}
            <div className="menu">
                <MenuItem to={'/'} active={router.isActive('/', true)}>홈</MenuItem>
                <MenuItem to={'/about'} active={router.isActive('/about')}>소개</MenuItem>
                <MenuItem to={'/post'} active={router.isActive('/post')}>포스트</MenuItem>
                {/*
                <MenuItem to={'/about'} active={router.isActive('/about')}>About</MenuItem>
                <MenuItem to={'/experience'} active={router.isActive('/experience')}>Experience</MenuItem>
                <MenuItem to={'/education'} active={router.isActive('/education')}>Education</MenuItem>
                <MenuItem to={'/skills'} active={router.isActive('/skills')}>Skills</MenuItem>
                <MenuItem to={'/interests'} active={router.isActive('/interests')}>Interests</MenuItem>
                <MenuItem to={'/awards'} active={router.isActive('/awards')}>Awards</MenuItem>
                */}
            </div>
        </div>
    );
};

Header.contextTypes = {
    router: function () {
        return React.PropTypes.object;
    }
}

export default Header;