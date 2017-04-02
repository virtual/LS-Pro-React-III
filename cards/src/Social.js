import React, { Component } from 'react';

class Social extends Component {
    render() {
        return (
            <div>
                <ul className='social-links'>
                    <li> <a href="#">Like</a> </li>
                    <li> <a href="#">Comment</a> </li>
                    <li> <a href="#">Share</a> </li>
                </ul>
            </div>
        );
    }
}

export default Social;