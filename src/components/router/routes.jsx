var React =require('react');
var Routers = require('react-router');
var Router = Routers.Router;
var Route =Router.Route;
var History = require('history/lib/createBrowserHistory');
var HomePage =require('../content/HomePage.jsx');
var AboutMe =require('../content/AboutMe.jsx');
var BannerSecond =require('../content/BannerSecond.jsx');

var FeaturePage =require('../content/FeaturePage.jsx');



module.exports = (
   <Router history={new History()}>
     <Route name="home" path="/" component={HomePage} /> 
     <Route name="about" path="/about" component={AboutMe} />
     <Route name="feature" path="/feature" component={BannerSecond} />
     <Route name="banner" path="/banner" component={FeaturePage} />
   </Router>    
)