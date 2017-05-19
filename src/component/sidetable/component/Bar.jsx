import React from 'react';

class Bar extends React.Component{
    constructor(){
        super()

        
    }
    render(){
        return (
            <div className='progress-bar'>
                <div 
                    className='progress'
                    style={{width: 200 * (this.props.value/10)}}></div>
            </div>
        )
    }
}

export default Bar