import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {
    render() {
        var comments = this.props.comments;
        return (
            <div> 
           {comments.map((content, index)=>{
                    return <Comment 
                    key={index}
                    comment={content.comment}
                    user={content.user}
                    />;
                })}
            </div>
        );
    }
}

export default Comments;