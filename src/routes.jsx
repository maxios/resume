import React from 'react';
import {Router, Route, IndexRoute, BrowserRouter} from 'react-router-dom';
import HomePage from './component/pages/HomePage.jsx';
import ResumePage from './component/pages/ResumePage.jsx';
import Header from './component/header';
import Footer from './component/footer';
import PortfolioPage from './component/pages/PortfolioPage.jsx';
import './App.scss';
class Root extends React.Component{
  render(){
    return(
      <BrowserRouter>
      <div>
            <Header />

                <Route exact path='/' component={HomePage} />
                <Route path='/resume' component={ResumePage} />
                <Route path='/portfolio' component={PortfolioPage} />
           
            <div className='clear'></div>
            <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default Root;
