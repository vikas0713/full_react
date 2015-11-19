var React = require('react');

var Header = React.createClass({
    render: function(){
        return (
        <nav className="white" role="navigation">
         <div className="nav-wrapper container">
          <a id="logo-container" href="#" className="brand-logo">React</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="#">Home</a></li>
            <li><a href="#">First Banner</a></li>
            <li><a href="#">Secon Banner</a></li>
          </ul>

          <ul id="nav-mobile" className="side-nav">
            <li><a href="#">Contact</a></li>
          </ul>
          <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
         </div>
        </nav>
        );
    }
});

module.exports = Header;