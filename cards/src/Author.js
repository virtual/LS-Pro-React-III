import React, {Component} from 'react';

class Author extends Component {
    render() {
        var d = new Date(this.props.time);

        var datestring = ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + "-" + d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);

        //var authorobj = this.props.author;

        return (
            <div className='author'>
                <img
                    src={this.props.authorpicture}
                    alt=''/>
                <p>
                    <a title={this.props.authorabout} 
                        href={'https://www.instagram.com/' +this.props.authorusername + '/?hl=en'}>
                    {this.props.authorusername}</a>
                    <span className='time-post'>{datestring}</span>
                </p>
 
            </div>
            
        );
    }
}

export default Author;