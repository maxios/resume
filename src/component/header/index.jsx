import React from 'react';
import NavLink from './component/NavLink';
import './index.scss';
class Header extends React.Component{
    render(){
        return(
            <div className='nav'>
                <ul className='nav-links'>
                    <NavLink text='HELLO' linkto="/" />
                    <NavLink text='RESUME' linkto="/resume" />
                    <NavLink text='PORTFOLIO' linkto="/portfolio" />
                </ul>
            </div>
        )
    }
}

export default Header;
