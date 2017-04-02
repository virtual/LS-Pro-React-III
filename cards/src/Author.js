import React, { Component } from 'react';


class Author extends Component {
    render() {
    var d = new Date(this.props.time);
    
    var datestring = ("0"+(d.getMonth()+1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + "-" +
    d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);


        return (
            <div className='author'>
                <img src='http://satinflame.com/wp-content/uploads/2017/03/IMG_6606-768x512.jpg' alt='' />
                <p><a href={'https://www.instagram.com/'+this.props.author+'/?hl=en'}>
                    {this.props.author}
                </a> <span className='time-post'>{datestring}</span></p>
            </div>
        );
    }
}

export default Author;