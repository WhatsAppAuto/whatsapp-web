import React, { Component } from 'react';
import './Heading.css';

class Heading extends Component {
  render() {
    return (
        <div className="Heading row">
            <div className="Heading__avatar col-sm-2 col-md-1 col-xs-3">
                <div className="Heading__avatar-icon">
                    <img src="http://shurl.esy.es/y" alt="sdfsdf" />
                </div>
            </div>
            <div className="Heading__name col-sm-8 col-xs-7">
                <a className="Heading__name-meta">Ankit Jain
                </a>
                <span className="Heading__online">Online</span>
            </div>
            <div className="Heading__dot col-sm-1 col-xs-1 pull-right">
                <i className="fa fa-ellipsis-v pull-right" aria-hidden="true"></i>
            </div>
        </div>
    );
  }
}

export default Heading;
