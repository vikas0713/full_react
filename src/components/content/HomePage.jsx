var React = require('react');
var Header= require('../common/Header.jsx');
var Footer= require('../common/Footer.jsx');


var HomePage = React.createClass({
    getInitialState: function(){
        return {
            messages : [
            "hello from About page",
            "The Third Router"
            ]
        }
    },
    render: function(){
        
        return (
            
        <div> 
            <Header/>
        <div className="parallax-container">
        <div className="section no-pad-bot">
          <div className="container">
            <br/><br/>
            <h1 className="header center teal-text text-lighten-2">My First React Powered Page</h1>
            <div className="row center">
              <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
            </div>
            <div className="row center">
              <a href="#index" className="btn-large waves-effect waves-light teal lighten-1">Don't Click</a>
            </div>
          </div>
        </div>
        <div className="parallax"><img src="./img/background1.jpg"/></div>
    </div>
    <Footer/>
    </div>
        );
    }
});


module.exports = HomePage;
