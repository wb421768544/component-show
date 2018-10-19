import React, { Component } from 'react';
import './style/Table.css';

class Table extends Component {

  static defaultProps = {
    paramList: []
  };

  render() {
    return (
      <table>
        <thead>
          <tr>
          {
            ['参数', '说明', '类型', '可选值', '默认值'].map(item => <th key = {item}>{item}</th>)
          }
          </tr>
        </thead>
        <tbody>
        {
          this.props.paramList.map((item, index) => <tr key = {index}>{item.map((info, index) => <td key = {index}>{info}</td>)}</tr>)
        }
        </tbody>
      </table>
    );
  }
}

export default Table;