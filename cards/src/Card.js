import React, { Component } from 'react';
import Social from './Social';
import Author from './Author';
import Comments from './Comments';
import './Card.css';

class Card extends Component {
    render() {
        return (
            <div className='card'>
                <Author
            authorusername={this.props.authorusername}
                authorpicture={this.props.authorpicture}
                authorabout={this.props.authorabout}
                 time={this.props.time}/>
                <img src={this.props.picture} alt={this.props.content} />
                <div className="card-content">
                    
                    <Social />
                    <p><strong>{this.props.author}</strong> {this.props.content}</p>
                    <Comments comments={this.props.comments} />
                </div>
            </div>
        );
    }
}

export default Card;