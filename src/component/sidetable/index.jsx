import React from 'react';
import Row from './component/Row.jsx';
import './index.scss';
class SideTable extends React.Component{
    constructor(){
        super();
        
    }
    render(){
        return(
            <div className='sidetable'>
                {Object.keys(this.props.data).map(head =>
                        <Row key={head}
                        thead={head}
                        value={this.props.data[head]}
                        classType={this.props.classType}
                        type={this.props.type} />
                    )}
                
            </div>
        )
    }
}

export default SideTable;