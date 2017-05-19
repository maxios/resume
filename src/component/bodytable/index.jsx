import React from 'react';
import Row from './component/Row.jsx';
import './index.scss';
class BodyTable extends React.Component{
   
    render(){
        return (
             <div className='bodytable'>
                 {this.props.data.map(row => 
                    <Row 
                        key={row.title}
                        title={row.title}
                        desc={row.desc}
                        /> 
                    )}
            </div>
        )
    }
}

export default BodyTable;