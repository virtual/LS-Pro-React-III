const posts = [
    {
        time: ("2015-03-28"),
        author: 'satinflame',
        picture: 'http://satinflame.com/wp-content/uploads/2017/03/IMG_6606-768x512.jpg',
        content: 'mew mew mew'
    },
    {
        time: ("2015-03-25"),
        author: 'virtualreverie',
        picture: 'http://satinflame.com/wp-content/uploads/2017/03/IMG_0181-1024x683.jpg',
        content: 'mew mew mew'
    },
    {
        time: ("2015-03-23"),
        author: 'fancyfeast',
        picture: 'http://satinflame.com/wp-content/uploads/2017/03/IMG_0259-1024x683.jpg',
        content: 'mew mew mew'
    },
    {
        time: ("2015-03-21"),
        author: 'chiccleaning',
        picture: 'http://satinflame.com/wp-content/uploads/2017/03/IMG_5708-1024x683.jpg',
        content: 'mew mew mew'
    }
];

import React, { Component } from 'react';
import Card from './Card';

class Feed extends Component {
    render() {
        return (
            <div className='feed'>
                {posts.map((post, index)=>{
                    return <Card 
                    key={index}
                    time={post.time} 
                    author={post.author} 
                    content={post.content} 
                    picture={post.picture} 
                    />;
                })}
            </div>
        );
    } 
}

export default Feed;