import React, { Component } from 'react';
import { Notification, Button } from 'wb-react-ui';
import Demo from '../demo';
import './style/ShowNotification.css';

class ShowNotification extends Component {

  constructor(props) {
    super(props);
    this.state = {
      params: [
        ['title', '标题', 'string', '———', '———'],
        ['offset', '距离顶部的偏移距离，单位是px', 'number', '———', '———'],
        ['message', '内容信息', 'string', '———', '———'],
        ['duration', '关闭动画的过度时间， 单位是mm', 'number', '———', '4500'],
        ['type', 'Notification的类型', 'string', 'success、warning、 info、 error', '———'],
      ],
      paramsOfEvent: [
        ['onClose', '提示关闭时的回调', 'function', '———', '———'],
        ['onClick', '点击提示框的时候的click事件回调', 'function', '———', '———'],

      ]
    };
  }

  render() {
    return <div className = "show-notification">
      <h2>Notification 通知</h2>
      <p>悬浮出现在页面右上角，显示全局的通知提醒消息。</p>
      <h3>基本用法</h3>
      <p>适用性广泛的通知栏</p>
      <Demo
       code = {<div>
        <Button plain = {true} onClick = {() => Notification({title: '标题名称', message: '这是提示文案'})}>可自动关闭</Button>
        <Button plain = {true} onClick = {() => Notification({title: '标题名称', message: '这是一条不会自动关闭的消息', duration: 0})}>不会自动关闭</Button>
      </div>}
       codeString = {`
  /** 
   * title是标题
   * message是内容信息
   * duration是过度动画的时间，如果设为0，则不会被自动关闭
  */
  <div>
    <Button plain = {true} onClick = {() => Notification({title: '标题名称', message: '这是提示文案'})}>可自动关闭</Button>
    <Button plain = {true} onClick = {() => Notification({title: '标题名称', message: '这是一条不会自动关闭的消息', duration: 0})}>不会自动关闭</Button>
  </div>
       `}
      />
      <h3>带有倾向性</h3>
      <p>带有 icon，常用来显示「成功、警告、消息、错误」类的系统消息</p>
      <Demo
       code = {<div>
        <Button plain = {true} onClick = {() => Notification({title: '成功', message: '这是一条成功的提示消息', type: 'success'})}>成功</Button>
        <Button plain = {true} onClick = {() => Notification({title: '警告', message: '这是一条警告的提示消息', type: 'warning'})}>警告</Button>
        <Button plain = {true} onClick = {() => Notification({title: '消息', message: '这是一条消息的提示消息', type: 'info'})}>消息</Button>
        <Button plain = {true} onClick = {() => Notification({title: '错误', message: '这是一条错误的提示消息', type: 'error'})}>错误</Button>
      </div>}
       codeString = {`
  /** 
   * 设置type为需要的类型即可
   * 在这里提供四中success、warning、 info、 error
  */
  <div>
    <Button plain = {true} onClick = {() => Notification({title: '成功', message: '这是一条成功的提示消息', type: 'success'})}>成功</Button>
    <Button plain = {true} onClick = {() => Notification({title: '警告', message: '这是一条警告的提示消息', type: 'warning'})}>警告</Button>
    <Button plain = {true} onClick = {() => Notification({title: '消息', message: '这是一条消息的提示消息', type: 'info'})}>消息</Button>
    <Button plain = {true} onClick = {() => Notification({title: '错误', message: '这是一条错误的提示消息', type: 'error'})}>错误</Button>
  </div>
       `}
      />
      <h3>带有偏移</h3>
      <p>让 Notification 偏移一些位置</p>
      <Demo
       code = {<div>
        <Button plain = {true} onClick = {() => Notification({title: '成功', message: '这是一条成功的提示消息', offset: 100})}>偏移的通知</Button>
      </div>}
       codeString = {`
  /** 
   * 设置offset属性即可
   * 偏移指的是距离顶部的距离
   * offset为number  单位是px
  */
  <div>
    <Button plain = {true} onClick = {() => Notification({title: '成功', message: '这是一条成功的提示消息', offset: 100})}>偏移的通知</Button>
  </div>
       `}
      />
      <h3>Attribute</h3>
      <Demo.Table
       paramList = {this.state.params}
      />
      <h3>Events Attribute</h3>
      <Demo.Table
       paramList = {this.state.paramsOfEvent}
      />
    </div>;
  }
}

export default ShowNotification;