import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style/List.css';

class List extends Component {

  render() {
    return (
      <div className = "list">
        <div className = "list-tip">{this.props.name}</div>
        <ul className = "list-ul">
        {
          this.props.list.map(item => (
            <li key = {item.path}>
              <Link to = {item.path}>
                {item.introduce}
              </Link>
            </li>)
          )
        }
        </ul>
      </div>
    );
  }
}

export default List;