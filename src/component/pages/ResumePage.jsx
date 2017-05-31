import React from 'react';
import Header from '../header';
import SideTable from '../sidetable';
import BodyTable from '../bodytable';
import './pages.scss';
class ResumePage extends React.Component {
    constructor(){
        super()

        this.state = {
            personal: {
                'Name': 'Khaled Maher',
                'Birthday': '23rd Apr 1995 (22)',
                'Relationship': 'Single',
                'Nationality': 'Egyptian',
                'Languages': 'English, Arabic',
                'Mobile Phone': '01119763188'
            },
            software: {
                // max rate is 10
                HTML5: 8,
                CSS3: 8,
                Javascript: 9,
                Ruby: 10,
                AWS: 3
            },

            skills: {
                'Teamwork': 5,
                'communication': 8,
                'management': 7
            },
            work: [
                    {
                        title: 'Design Director',
                        desc: 'nl;kasdf kf asldkf a;lksdfl asldkf ;laksdf;lkjasld '
                    },
                    {
                        title: 'hello world',
                        desc: 'go to hell'
                    }
            ],

            education: [
                    {
                        title: 'programming Director',
                        desc: 'nl;kasdf kf asldkf a;lksdfl asldkf ;laksdf;lkjasld '
                    },
                    {
                        title: 'hello world',
                        desc: 'go to hell'
                    }
            ],

            
        }
    }
    render(){
        return(
            <div>
                <div className='page-header'>
                    <div className='min-width'>
                        <div className='main-info'>
                            <h1 className='name'>Khaled Maher</h1>
                            <h3 className='title'>Full-Stack Web Developer</h3>
                        </div>
                        <img src='file:///home/images/Picture.jpeg'
                            className='profile-image'/>
                        
                    </div>
                </div>
                
                <div className='resume-summary'>
                        <div className='shadow'></div>      {/*shadow*/}
                        <div className='shadow light'></div>          {/*shadow*/}
                    <div className='min-width'>
                      <p>this is summary of resume this is summary of resume this is summary of resume this is summary of resume this is summary of resume this is summary of resume this is summary of resume this is summary of resume this is summary of resume this is summary of resume this is summary of resume this is summary of resume this is summary of resume this is summary of resume this is summary of resume this is summary of resume this is summary of resume this is summary of resume this is summary of resume this is summary of resume </p>
                    </div>
                </div> 
                  <div className='lean-box'></div>
                <div className='resume-body min-width'>
    {/*aside sections*/}
                    <div className='aside'>
                        <div className='aside-container'>
                {/*personal*/}
                            <div className='aside-section'>
                                <h2>Personal</h2>
                                <SideTable 
                                    data={this.state.personal} 
                                    classType='strips'
                                    type='raw' /> 
                            </div>
                            <div className='clear'></div>

                {/*software*/}
                            <div className='aside-section'>
                                <h2>Software</h2>
                                <SideTable 
                                    data={this.state.software}
                                    classType='pure' 
                                    type='progress-bar' />
                            </div>
                        </div> {/*aside container*/}
                    </div> {/*resume-aside*/}

    {/*resume-information*/}
                    <div className='resume-info'>
                        <h1>Work</h1>
                        <BodyTable data={this.state.work} />

                         <h1>Work</h1>
                        <BodyTable data={this.state.education} />
                        
                    </div>
                </div>{/*resume-body*/}
            </div>
        )
    }
}

export default ResumePage;
