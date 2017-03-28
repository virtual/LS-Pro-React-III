import React, { Component } from 'react';

class Author extends Component {
    render() {
        return (
            <div className='author'>
                <img src='http://satinflame.com/wp-content/uploads/2017/03/IMG_6606-768x512.jpg' alt='' />
                <p><a href=''>Authorname</a> <span className='time-post'>3m</span></p>
            </div>
        );
    }
}

export default Author;