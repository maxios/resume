import React from 'react';
import { Link } from 'react-router-dom';
class NavLink extends React.Component{
    render(){
        return(
            <li><Link to={this.props.linkto}>{this.props.text}</Link></li>
        )
    }
}

export default NavLink;
