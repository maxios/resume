import React from 'react';
import {Link} from 'react-router';
class NavLink extends React.Component{
    render(){
        return(
            <Link to='/'><li>{this.props.text}</li></Link>
        )
    }
}

export default NavLink;