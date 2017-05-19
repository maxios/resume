import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import HomePage from './component/pages/HomePage.jsx';
import ResumePage from './component/pages/ResumePage.jsx';
import Header from './component/header';
import Footer from './component/footer';
import PortfolioPage from './component/pages/PortfolioPage.jsx';
import './App.scss';
const Root = () => {
    return(
        <div>
            <Header />

            <Router history={browserHistory}>
                <Route path='/' component={HomePage} />
                <Route path='resume' component={ResumePage} />
                <Route path='portfolio' component={PortfolioPage} />
            </Router>
           
            <div className='clear'></div>
            <Footer />
        </div>
    )
}

export default Root;