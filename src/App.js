import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import PersonalPage from './pages/PersonalPage';
import MyInfoPage from './pages/MyInfoPage';
import UploadW2Page from './pages/Uploadw2Page';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import MaritalPage from './pages/MaritalPage';
import AboutPage from './pages/AboutPage';
import NavBar from './NavBar';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Switch>
              <Route path="/" component={PersonalPage} exact />
              <Route path="/myinfo" component={MyInfoPage} />
              <Route path="/articles-list" component={ArticlesListPage} />
              <Route path="/article/:name" component={ArticlePage} />
              <Route path="/uploadw2/:name" component={UploadW2Page} />
              <Route path="/marital/:name" component={MaritalPage} />
              <Route path="/about" component={AboutPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
