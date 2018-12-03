import React, { Component } from 'react';
import { Switch, Tooltip, Notification } from 'wb-react-ui';
import Demo from '../demo';
import './style/ShowSwitch.css';

class ShowSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'true',
      params: [
        ['name', '原生表单name属性', 'string', '——', '——'],
        ['width', 'Switch的宽度', 'string', '——', '——'],
        ['disabled', '是否禁用', 'boolean', 'true，false', 'false'],
        ['allowFocus', '是否开启获取/失去焦点模式', 'boolean', 'true，false', 'false'],
        ['onValue', '开启时的值', 'boolean, string, number', '——', '——'],
        ['offValue', '关闭时的值', 'boolean, string, number', '——', '——'],
        ['onText', '开启时的文字', 'string', '——', '——'],
        ['offText', '关闭时的文字', 'string', '——', '——'],
        ['onColor', '开启时的颜色', 'string', '——', '#20a0ff'],
        ['offColor', '关闭时的颜色', 'string', '——', '#bfcbd9'],
      ],
      paramsOfEvents: [
        ['onChange', '开关状态改变时候的回调，提供onValue和offValue时，提供(当前开关状态的布尔值作为)参数', 'function', '——', '——'],
        ['onBlur', '失去焦点的回调，需要设置allowFocus为true', 'function', '——', '——'],
        ['onFocus', '失去焦点的回调，需要设置allowFocus为true', 'function', '——', '——'],
      ]
    };
  }

  updateTootipContent = (arg) => {
    this.setState({content: arg + ''});
  }

  componentDidMount() {
    document.title = 'Switch';
  }

  render() {
    return <div className = "show-switch">
      <h2>Switch 开关</h2>
      <p>就是个开关</p>
      <h3>基本用法</h3>
      <Demo
        code = {<div>
          <Switch />
          <Switch
            value = {!true}
            onText = "on"
            offText = "off"
            onColor = "#13ce66"
            offColor = "#ff4949"
          />
        </div>}
        codeString = {`
  /** 
   * value true开启 false关闭。。但是我好像写反了   等待修复
   * 其它属性看名称应该就知道了，我就不赘述了
  */
  <div>
    <Switch />
    <Switch
      value = {!true}
      onText = "on"
      offText = "off"
      onColor = "#13ce66"
      offColor = "#ff4949"
    />
  </div>
        `}
      />
      <h3>和Tootip组合使用</h3>
      <Demo
        code = {<div>
          <Tooltip placement = "top" content = {this.state.content}>
            <Switch
              value = {!true}
              onValue = {true}
              offValue = {false}
              onText = "on"
              offText = "off"
              onColor = "#13ce66"
              offColor = "#ff4949"
              onChange = {this.updateTootipContent}
            />
          </Tooltip>
        </div>}
        codeString = {`
  /** 
   * 在Switch的状态改变的时候，onChange事件被触发
   * 在提供了onValue和offValue的时候，onChange事件回调会传递一个表示现在开关状态的Boolean值
   * Tooltip的placement表示提示的位置，Content表示提示的内容 (详细请查看Tooltip的介绍)
  */
 <div>
 <Tooltip placement = "top" content = {this.state.content}>
   <Switch
     value = {!true}
     onValue = {true}
     offValue = {false}
     onText = "on"
     offText = "off"
     onColor = "#13ce66"
     offColor = "#ff4949"
     onChange = {this.updateTootipContent}
   />
 </Tooltip>
</div>
        `}
      />
      <h3>禁用状态的开关</h3>
      <Demo
        code = {<div>
          <Switch disabled />
          <Switch
            disabled
            onText = "on"
            offText = "off"
            onColor = "#13ce66"
            offColor = "#ff4949"
          />
        </div>}
        codeString = {`
  /** 
   * disabled = {true} 即可开启禁用状态
  */
  <div>
    <Switch disabled />
    <Switch
      disabled
      onText = "on"
      offText = "off"
      onColor = "#13ce66"
      offColor = "#ff4949"
    />
  </div>
        `}
      />
      <h3>开启焦点</h3>
      <Demo
        code = {<div>
          <Switch
            allowFocus
            onText = "on"
            offText = "off"
            onFocus = {() => Notification({type: 'success', title: 'Switch状态提示', message: 'Switch获得焦点'})}
            onBlur = {() => Notification({type: 'error', title: 'Switch状态提示', message: 'Switch失去焦点'})}
          />
        </div>}
        codeString = {`
  /** 
   * allowFocus = {true} 开启可出发onFocus、onBlur事件模式
  */
  <div>
    <Switch
      allowFocus
      onText = "on"
      offText = "off"
      onFocus = {() => Notification({type: 'success', title: 'Switch状态提示', message: 'Switch获得焦点'})}
      onBlur = {() => Notification({type: 'error', title: 'Switch状态提示', message: 'Switch失去焦点'})}
    />
  </div>
        `}
      />
      <h3>Attributes</h3>
      <Demo.Table 
        paramList = {this.state.params}
      />
      <h3>Events Attributes</h3>
      <Demo.Table 
        paramList = {this.state.paramsOfEvents}
      />
    </div>;
  }
}

export default ShowSwitch;