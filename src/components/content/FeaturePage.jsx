var React = require('react');
var Header =require('./common/Header.jsx');
var Footer =require('./common/Footer.jsx');

var FeaturePage = React.createClass({
  getInitialState:function(){
    return { counter : 0}
  },
  increment: function(){
    this.setState({ counter: this.state.counter + 1});
  },
    render: function(){
        return (
        <div>
            <Header/>
        <div className="container">
            <div className="section">
              <div className="row">
                <div className="col s12 m4">
                  <div className="icon-block">
                    <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
                    <h5 className="center">Speeds up development</h5>

                    <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
                  </div>
                </div>

                <div className="col s12 m4">
                  <div className="icon-block">
                    <h2 className="center brown-text"><i className="material-icons">group</i></h2>
                    <h5 className="center">User Experience Focused</h5>

                    <p className="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
                  </div>
                </div>

                <div className="col s12 m4">
                  <div className="icon-block">
                    <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
                    <h5 className="center">This is power! click the button</h5>
                    <button className="btn-large waves-effect waves-light teal center" onClick={this.increment}>Click Me</button>
                    <h4 className="center">{this.state.counter}</h4>
                  </div>
                </div>
              </div>
              </div>

            </div>
            <Footer/>
  </div>
        );
    }
});

module.exports= FeaturePage;
