import React from 'react';
import Bar from './Bar.jsx';
class Row extends React.Component{
    render(){
        return(
            <div className={'table-row ' + this.props.classType}>
                <div className="thead">
                    <p>{this.props.thead}</p>
                </div>
                <div className='table-cell'>
                    { this.props.type == 'progress-bar' ? (
                        <Bar value={this.props.value}/>
                    ) : (
                        <p>{this.props.value}</p>
                    ) }
                </div>
            </div>
        )
    }
}

export default Row;