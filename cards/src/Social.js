import React, {Component} from 'react';
import {Icon} from 'react-fa';

class Social extends Component {
    render() {
        return (
            <div>
                <ul className='social-links'>
                    <li>
                        <a href="#" title='Like'><Icon size='2x' name="heart-o"/></a>
                    </li>
                    <li>
                        <a href="#" title='Comment'><Icon size='2x' name="comment-o"/></a>
                    </li>
                    <li>
                        <a href="#" title='Share'><Icon size='2x' name="share"/></a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Social;