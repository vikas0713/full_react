var React = require('react');
var Header =require('../common/Header.jsx');
var Footer =require('../common/Footer.jsx');

var BannerSecond = React.createClass({
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
        <div className="parallax-container valign-wrapper">
            <div className="section no-pad-bot">
              <div className="container">
                <div className="row center">
                  <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
                </div>
              </div>
            </div>
            <div className="parallax"><img src="./img/background2.jpg"/></div>
        </div>
     <Footer/>
     </div>
    );
    }
});


module.exports = BannerSecond;