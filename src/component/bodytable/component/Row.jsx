import React from 'react';

class Row extends React.Component {
    render(){
        return(
            <div className='bodyrow'>
                <div className='content'>
                <div className='title'>
                    <div className='node'></div>
                    <div className='node-border'></div>
                    <h2>{this.props.title}</h2>
                </div>
                    <p>{this.props.desc}</p>
                </div>
            </div>
        )
    }
}

export default Row;