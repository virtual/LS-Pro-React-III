import React, { Component } from 'react';
import Social from './Social';
import Author from './Author';
import './Card.css';

class Card extends Component {
    render() {
        return (
            <div className='card'>
                <Author author={this.props.author} time={this.props.time}/>
                <img src={this.props.picture} alt='' />
                <div className="card-content">
                    <p><strong>{this.props.author}</strong> {this.props.content}</p>
                    <Social />
                </div>
            </div>
        );
    }
}

export default Card;