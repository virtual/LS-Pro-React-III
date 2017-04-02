import React, {Component} from 'react';

class Comment extends Component {
    render() {
        return (
            <div className='comment'>
                <span className='comment-user'>{this.props.user}</span>
                {this.props.comment}
            </div>
        );
    }
}

export default Comment;