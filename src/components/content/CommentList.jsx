var React = require('react');
var Comment = require('./Comment.jsx');

var CommentList = React.createClass({
  render: function(){
    var data = this.props.data.map(function(message){
      return (
        <div>
          <Comment author={message.author} comment={message.text} />
        </div>
      );
    });
    return (
      <div className="commentList">
        {data}
      </div>
    );

  }
});

module.exports = CommentList;
