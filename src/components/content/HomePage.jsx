var React = require('react');
var Header= require('./common/Header.jsx');
var Footer= require('./common/Footer.jsx');
var Link = require('react-router').Link;


var HomePage = React.createClass({
    getInitialState: function(){
      return {
        src : "./img/background1.jpg"
      };
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
              <Link to="feature" className="btn-large waves-effect waves-light teal lighten-1">Dont Click</Link>
            </div>
          </div>
        </div>
        <div className="parallax"><img src={this.state.src}/></div>
    </div>
    <Footer/>
    </div>
        );
    }
});


module.exports = HomePage;
