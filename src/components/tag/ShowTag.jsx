import React, { Component } from 'react';
import { Tag, Notification } from 'wb-react-ui';
import Demo from '../demo';
import './style/ShowTag.css';


class ShowTag extends Component {

  constructor(props) {
    super(props);
    this.state = {
      params: [
        ['color', '背景颜色', 'string', '——', '——'],
        ['closable', '是否是可关闭标签', 'boolean', 'true, false', 'false'],
        ['closeTransition', '是否开启关闭动画', 'boolean', 'true, false', 'true'],
        ['type', '标签类型', 'string', 'default, primary, gray, success, warning, danger', 'default'],
      ],
      paramsOfEvent: [
        ['onClose', '标签关闭的回调', 'function', '——', '——'],
      ]
    };
  }

  componentDidMount() {
    document.title = 'Tag';
  }

  render() {
    return <div className = "show-tag">
      <h2>Tag 标签</h2>
      <p>用于标签和选择。</p>
      <h3>基础用法</h3>
      <Demo
        code = {<div>
          <Tag>标签一</Tag>
          <Tag type="gray">标签二</Tag>
          <Tag type="primary">标签三</Tag>
          <Tag type="success">标签四</Tag>
          <Tag type="warning">标签五</Tag>
          <Tag type="danger">标签六</Tag>
        </div>}
        codeString = {`
  /** 
   * 由type属性来选择tag的类型
   * 或者传入color直接定义background-color
  */
  <div>
    <Tag>标签一</Tag>
    <Tag type="gray">标签二</Tag>
    <Tag type="primary">标签三</Tag>
    <Tag type="success">标签四</Tag>
    <Tag type="warning">标签五</Tag>
    <Tag type="danger">标签六</Tag>
  </div>
        `}
      />
      <h3>可移除标签</h3>
      <Demo
        code = {<div>
          <Tag closable onClose = {() => Notification({type: 'success', title: 'Tag Close', message: '标签一已关闭'})}>标签一</Tag>
          <Tag closable onClose = {() => Notification({type: 'success', title: 'Tag Close', message: '标签二已关闭'})} type="gray">标签二</Tag>
          <Tag closable onClose = {() => Notification({type: 'success', title: 'Tag Close', message: '标签三已关闭'})} type="primary">标签三</Tag>
          <Tag closable onClose = {() => Notification({type: 'success', title: 'Tag Close', message: '标签四已关闭'})} type="success">标签四</Tag>
          <Tag closable onClose = {() => Notification({type: 'success', title: 'Tag Close', message: '标签五已关闭'})} type="warning">标签五</Tag>
          <Tag closable onClose = {() => Notification({type: 'success', title: 'Tag Close', message: '标签六已关闭'})} type="danger">标签六</Tag>
        </div>}
        codeString = {`
  /** 
   * 设置closable为true，tag即可以关闭了
   * onClose是关掉的时候的回调函数
  */
  <div>
    <Tag closable onClose = {() => Notification({type: 'success', title: 'Tag Close', message: '标签一已关闭'})}>标签一</Tag>
    <Tag closable onClose = {() => Notification({type: 'success', title: 'Tag Close', message: '标签二已关闭'})} type="gray">标签二</Tag>
    <Tag closable onClose = {() => Notification({type: 'success', title: 'Tag Close', message: '标签三已关闭'})} type="primary">标签三</Tag>
    <Tag closable onClose = {() => Notification({type: 'success', title: 'Tag Close', message: '标签四已关闭'})} type="success">标签四</Tag>
    <Tag closable onClose = {() => Notification({type: 'success', title: 'Tag Close', message: '标签五已关闭'})} type="warning">标签五</Tag>
    <Tag closable onClose = {() => Notification({type: 'success', title: 'Tag Close', message: '标签六已关闭'})} type="danger">标签六</Tag>
  </div>
        `}
      />
      <h3>Attributes</h3>
      <Demo.Table
        paramList = {this.state.params}
      />
      <h3>Event Attributes</h3>
      <Demo.Table
        paramList = {this.state.paramsOfEvent}
      />
    </div>;
  }
}

export default ShowTag;