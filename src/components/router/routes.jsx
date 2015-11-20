var React =require('react');
var Header = require('../content/common/Header.jsx');
var Header = require('../content/common/Footer.jsx');
var HomePage =require('../content/HomePage.jsx');
var AboutMe =require('../content/AboutMe.jsx');
var BannerSecond =require('../content/BannerSecond.jsx');
var Routers = require('react-router');
var Router = Routers.Router;
var Route =Routers.Route;
var FeaturePage =require('../content/FeaturePage.jsx');
var History = require('history/lib/createBrowserHistory');


module.exports = (
  <Router history={History()}>
     <Route path="/" component={HomePage} />
     <Route name="home" path="/home" component={HomePage} />
     <Route name="about" path="/about" component={AboutMe} />
     <Route name="feature" path="/banner" component={BannerSecond} />
     <Route name="banner" path="/feature" component={FeaturePage} />
  </Router>

)
