var React = require('react');
var CommentList = require('./CommentList.jsx');
var CommentForm = require('./CommentForm.jsx');

var CommentBox = React.createClass({

  render: function(){
   return (
     <div className='container'>
     <h4>Comments</h4>
       <CommentList data={this.props.data}/><br/>
       <CommentForm/>
     </div>
   );
  }
});

module.exports = CommentBox;
