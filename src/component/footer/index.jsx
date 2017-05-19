import React from 'react';
import './style.scss';

class Footer extends React.Component{
    render(){
        return(
            <footer>
                <div className='refs-container'>
                        <div className='refs-content'>
                            <div className='ref'>behance</div>
                            <div className='ref middle'>linkedin</div>
                            <div className='ref'>twitter</div>
                        </div>
                </div>
                <div className='copyrights-container'>
                    <p>This resume page is cloned from the design here designed by john jeff. </p>
                </div>
            </footer>
        )
    }
}

export default Footer;