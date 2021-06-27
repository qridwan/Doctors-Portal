import React from 'react';
import HeaderMain from './HeaderMain/HeaderMain';
import './Header.css';
import HeaderBussinessInfos from './HeaderBussinessInfos/HeaderBussinessInfos';
const Header = () => {
    return (
        <div className="header_container">
            <HeaderMain/>
            <HeaderBussinessInfos/>
        </div>
    );
};

export default Header;