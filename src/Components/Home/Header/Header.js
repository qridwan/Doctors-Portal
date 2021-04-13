import React from 'react';
import HeaderMain from './HeaderMain/HeaderMain';
import NavigationBar from '../../Sheared/Navbar/Navbar';
import './Header.css';
import HeaderBussinessInfos from './HeaderBussinessInfos/HeaderBussinessInfos';
const Header = () => {
    return (
        <div className="header_container">
            <NavigationBar/>
            <HeaderMain/>
            <HeaderBussinessInfos/>
        </div>
    );
};

export default Header;