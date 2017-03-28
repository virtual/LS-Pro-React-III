import React, { Component } from 'react';
import Social from './Social';
import Author from './Author';
import './Card.css';

class Card extends Component {
    render() {
        return (
            <div className='card'>
                <Author/>
                <img src='http://satinflame.com/wp-content/uploads/2017/03/IMG_6606-768x512.jpg' alt='' />

                <Social />
            </div>
        );
    }
}

export default Card;