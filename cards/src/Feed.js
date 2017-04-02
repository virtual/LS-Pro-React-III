const posts = [
    {
        time: ("2015-03-28"),
        author: {
            "_id": "58e165cb39b522f2a44d0a1d",
            "picture": "http://placehold.it/32x32",
            "name": {
                "first": "Bentley",
                "last": "Mathis"
            },
            "about": "Deserunt adipisicing et exercitation cupidatat.",
            "username": "comtest"
        },
        picture: 'http://satinflame.com/wp-content/uploads/2017/03/IMG_6606-768x512.jpg',
        content: 'mew mew mew',
        comments: [
            {
                user: 'catsmeow',
                comment: 'wow that is great'
            }, {
                user: 'catsmeow',
                comment: 'wow that is great'
            }, {
                user: 'catsmeow',
                comment: 'wow that is great'
            }
        ]
    }, {
        time: ("2015-03-25"),
        author: {
            "_id": "58e165cb53df5525e044ddbc",
            "picture": "http://placehold.it/32x32",
            "name": {
                "first": "Moon",
                "last": "Moore"
            },
            "about": "Excepteur ut labore eiusmod quis.",
            "username": "zenolux"
        },
        picture: 'http://satinflame.com/wp-content/uploads/2017/03/IMG_0181-1024x683.jpg',
        content: 'mew mew mew',
        comments: [
            {
                user: 'catsmeow',
                comment: 'wow that is great'
            }, {
                user: 'catsmeow',
                comment: 'wow that is great'
            }, {
                user: 'catsmeow',
                comment: 'wow that is great'
            }
        ]
    }, {
        time: ("2015-03-23"),
        author: {
            "_id": "58e165cbac898763c156801a",
            "picture": "http://placehold.it/32x32",
            "name": {
                "first": "Riley",
                "last": "Norman"
            },
            "about": "Incididunt Lorem deserunt reprehenderit ipsum reprehenderit labore.",
            "username": "zytrac"
        },
        picture: 'http://satinflame.com/wp-content/uploads/2017/03/IMG_0259-1024x683.jpg',
        content: 'mew mew mew',
        comments: [
            {
                user: 'catsmeow',
                comment: 'wow that is great'
            }, {
                user: 'catsmeow',
                comment: 'wow that is great'
            }, {
                user: 'catsmeow',
                comment: 'wow that is great'
            }
        ]
    }, {
        time: ("2015-03-21"),
        author: {
            "_id": "58e165cb02c7078afc80fbc0",
            "picture": "http://placehold.it/32x32",
            "name": {
                "first": "Stark",
                "last": "Flowers"
            },
            "about": "Irure ipsum incididunt proident in qui culpa fugiat deserunt deserunt pariatur s" +
                    "unt ut ad mollit.",
            "username": "unia"
        },
        picture: 'http://satinflame.com/wp-content/uploads/2017/03/IMG_5708-1024x683.jpg',
        content: 'mew mew mew',
        comments: [
            {
                user: 'catsmeow',
                comment: 'wow that is great'
            }, {
                user: 'catsmeow',
                comment: 'wow that is great'
            }, {
                user: 'catsmeow',
                comment: 'wow that is great'
            }
        ]
    }
];

import React, {Component} from 'react';
import Card from './Card';

class Feed extends Component {
    render() {
        return (
            <div className='feed'>
                {posts.map((post, index) => {
                    return <Card
                        key={index}
                        time={post.time}
                        authorusername={post.author.username}
                        authorpicture={post.author.picture}
                        authorabout={post.author.about}
                        content={post.content}
                        picture={post.picture}
                        comments={post.comments}/>;
                })}
            </div>
        );
    }
}

export default Feed;