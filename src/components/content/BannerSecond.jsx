var React = require('react');
var Header =require('./common/Header.jsx');
var Footer =require('./common/Footer.jsx');
var CommentBox = require('./CommentBox.jsx');

var BannerSecond = React.createClass({
    getInitialState:function(){
      return {
             data :[]
      }
    },
    componentDidMount: function(){
      this.setState({
        data : [
          {id: 1, author: "Pete Hunt", text: "This is one comment"},
          {id: 2, author: "Jordan Walke", text: "This is *another* comment"},
          {id: 3, author: "Jordan Walke", text: "This is *another* comment2"},
          {id: 4, author: "Amy Walke", text: "This is *another* comment3"},
        ]
      });
    },
    render: function(){
    return (

    <div>
      <Header/>
        <div className="container">
          <CommentBox data={this.state.data} />
        </div>
     <Footer/>
     </div>
    );
    }
});


module.exports = BannerSecond;
