var React = require('react');

var Comment = React.createClass({
 render: function(){
    return (
      <div className='comment'>
        <h4 clasName="CommentAuthor">
        {this.props.author}
        </h4>
        <p className="Comment">
        {this.props.comment}
        </p>
      </div>
    )
 }
});

module.exports = Comment;
