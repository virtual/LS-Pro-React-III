import React, { Component } from 'react';

class Time extends Component {
    render() {

          var d = new Date(this.props.time);

        var datestring = ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + "-" + d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);


        return (
            <div className='time-post'>
              {datestring}           
            </div>
        );
    }
}

export default Time;