import React, {Component} from 'react';

class Author extends Component {
    render() {

        //var authorobj = this.props.author;

        return (
            <div className='author'>
                <img src={this.props.authorpicture} alt=''/>
                <p>
                    <a
                        title={this.props.authorabout}
                        href={'https://www.instagram.com/' + this.props.authorusername + '/?hl=en'}>
                        {this.props.authorusername}</a>
                </p>

            </div>

        );
    }
}

export default Author;