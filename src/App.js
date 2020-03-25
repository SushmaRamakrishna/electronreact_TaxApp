import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from './components/pages/PersonalPage';
import MyInfoPage from './components/pages/MyInfoPage';
import UploadW2Page from './components/pages/Uploadw2Page';
import ArticlesListPage from './components/pages/ArticlesListPage';
import ArticlePage from './components/pages/ArticlePage';
import NotFoundPage from './components/pages/NotFoundPage';
import MaritalPage from './components/pages/MaritalPage';
import AboutPage from './components/pages/AboutPage';
import NavBar from './components/layout/NavBar';
import HealthInsurancePage from './components/pages/HealthInsurancePage';
import StaffPage from './components/pages/StaffPage';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>       
          <div className="App">
          <NavBar />
          <div id="page-body">       
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/myinfo" component={MyInfoPage} exact />
              <Route path="/articles-list" component={ArticlesListPage} exact />
              <Route path="/article/:name" component={ArticlePage} exact/>
              <Route path="/uploadw2/:name" component={UploadW2Page} exact />
              <Route path="/marital/:name" component={MaritalPage} exact />
              <Route path="/about" component={AboutPage} exact />
              <Route path="/healthinsurance" component={HealthInsurancePage} exact />
              <Route path="/staff" component={StaffPage} exact />
              <Route component={NotFoundPage} />
            </Switch>               
           </div>
           </div>
      </Router>
    );
  }
}

export default App;
