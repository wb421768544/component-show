import React, { Component } from 'react';
import { Alert, Notification } from 'wb-react-ui';
import Demo from '../demo';

import './style/ShowAlert.css';

class ShowAlert extends Component {

  constructor(props) {
    super(props);
    this.state = {
      params: [
        ['title', '标题', 'string', '——', '——'],
        ['type', '主题', 'string', 'success, warning, info, error', 'info'],
        ['closable', '是否可关闭', 'boolean', 'true, false', 'true'],
        ['description', '辅助信息', 'string', '——', '——'],
      ],
      paramsOfEvent: [
        ['onClose', 'Alert被关闭时的回调函数', 'function', '——', '——'],
      ]
    };
  }

  render() {
    return <div className = "show-alert">
      <h2>Alert 警告</h2>
      <p>用于页面中展示重要的提示信息</p>
      <h3>基本用法</h3>
      <p>页面中的非浮层元素，不会自动消失。</p>
      <Demo
        code = { <div>
          <Alert title="成功提示的文案" type="success" />
          <Alert title="消息提示的文案" type="info" />
          <Alert title="警告提示的文案" type="warning" />
          <Alert title="错误提示的文案" type="error" />
        </div>}
        codeString = {`
  /** 
   * 通过type来设定Alert的类型
  */
  <div>
    <Alert title="成功提示的文案" type="success" />
    <Alert title="消息提示的文案" type="info" />
    <Alert title="警告提示的文案" type="warning" />
    <Alert title="错误提示的文案" type="error" />
  </div>
        `}
      />
      <h3>自定义关闭按钮</h3>
      <p>自定义关闭按钮为文字或其他符号。</p>
      <Demo
        code = { <div>
          <Alert title="不可关闭的 alert" type="success" closable = {false} />
          <Alert title="自定义 close-text" type="info" closeText = "知道了" />
          <Alert 
            title="设置了回调的 alert" 
            type="warning" 
            onClose = {() => Notification({type: 'info', title: '设置了回调的Alert', message: 'Hello World!'})}
          />
        </div>}
        codeString = {`
  /** 
   * 用closable来控制是否可以关闭
   * onClose是在Alert被关闭之后的回调
   * closeText则是点击关闭的自定义文字
  */
  <div>
    <Alert title="不可关闭的 alert" type="success" closable = {false} />
    <Alert title="自定义 close-text" type="info" closeText = "知道了" />
    <Alert 
      title="设置了回调的 alert" 
      type="warning" 
      onClose = {() => Notification({type: 'info', title: '设置了回调的Alert', message: 'Hello World!'})}
    />
  </div>
        `}
      />
      <h3>带有 icon</h3>
      <p>表示某种状态时提升可读性。</p>
      <Demo
        code = { <div>
          <Alert title="成功提示的文案" type="success" showIcon={true} />
          <Alert title="消息提示的文案" type="info" showIcon={true} />
          <Alert title="警告提示的文案" type="warning" showIcon={true} />
          <Alert title="错误提示的文案" type="error" showIcon={true} />
        </div>}
        codeString = {`
  /** 
   * 通过showIcon来显示Alert的icon
  */
  <div>
    <Alert title="成功提示的文案" type="success" showIcon={true} />
    <Alert title="消息提示的文案" type="info" showIcon={true} />
    <Alert title="警告提示的文案" type="warning" showIcon={true} />
    <Alert title="错误提示的文案" type="error" showIcon={true} />
  </div>
        `}
      />
      <h3>带有辅助性文字介绍</h3>
      <p>包含标题和内容，解释更详细的警告。</p>
      <Demo
        code = { <div>
          <Alert
            type="success"
            title="带辅助性文字介绍"
            description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
          />
        </div>}
        codeString = {`
  /** 
   * 通过description来说明额外的辅助信息 
  */
  <div>
    <Alert
      type="success"
      title="带辅助性文字介绍"
      description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
    />
  </div>
        `}
      />
      <h3>带有 icon 和辅助性文字介绍</h3>
      <Demo
        code = { <div>
          <Alert title="成功提示的文案" type="success" description="文字说明文字说明文字说明文字说明文字说明文字说明"  showIcon={true} />
          <Alert title="消息提示的文案" type="info" description="文字说明文字说明文字说明文字说明文字说明文字说明" showIcon={true} />
          <Alert title="警告提示的文案" type="warning" description="文字说明文字说明文字说明文字说明文字说明文字说明" showIcon={true} />
          <Alert title="错误提示的文案" type="error" description="文字说明文字说明文字说明文字说明文字说明文字说明" showIcon={true} />
        </div>}
        codeString = {`
  /** 
   * 通过description来说明额外的辅助信息 
  */
  <div>
    <Alert title="成功提示的文案" type="success" description="文字说明文字说明文字说明文字说明文字说明文字说明"  showIcon={true} />
    <Alert title="消息提示的文案" type="info" description="文字说明文字说明文字说明文字说明文字说明文字说明" showIcon={true} />
    <Alert title="警告提示的文案" type="warning" description="文字说明文字说明文字说明文字说明文字说明文字说明" showIcon={true} />
    <Alert title="错误提示的文案" type="error" description="文字说明文字说明文字说明文字说明文字说明文字说明" showIcon={true} />
  </div>
        `}
      />
      <h3>Attributes</h3>
      <Demo.Table
        paramList = {this.state.params}
      />
      <h3>Events Attributes</h3>
      <Demo.Table
        paramList = {this.state.paramsOfEvent}
      />
    </div>;
  }
}

export default ShowAlert;