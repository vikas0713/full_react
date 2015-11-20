var React = require('react');
var Link = require('react-router').Link;

var Header = React.createClass({


    render: function(){
        return (
        <div>
        <nav className="white" role="navigation">
         <div className="nav-wrapper container">
          <Link to="home" className="red">REACT</Link>
          <ul className="right hide-on-med-and-down">
          <li><Link to="about">About</Link></li>
          <li><Link to="feature">Feature</Link></li>
          <li><Link to="banner">Banner</Link></li>
          </ul>

          <ul id="nav-mobile" className="side-nav">
          <li><Link to="about">About</Link></li>
          <li><Link to="feature">Feature</Link></li>
          <li><Link to="banner">Banner</Link></li>
          </ul>
          <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
         </div>
        </nav>
        </div>
        );
    }
});

module.exports = Header;
