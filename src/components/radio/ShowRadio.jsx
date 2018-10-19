import React, { Component } from 'react';
import { Radio } from 'wb-react-ui';
import Demo from '../demo';

import './style/ShowRadio.css';

class ShowRadio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      paramsOfRadio: [
        ['name', 'radio的name', 'string', '——', '——'],
        ['size', '尺寸', 'string', 'normal, large, small', 'normal'],
        ['disabled', '是否禁用', 'boolean', 'true, false', 'false'],
        ['checked', '是否默认选中', 'boolean', 'true, false', 'false'],
        ['value', 'radio的value', 'boolean, string, number', '——', '——'],
      ],
      paramsOfRadioGroup: [
        ['name', '全组radio的name', 'string', '——', 'wb-default-name'],
        ['size', '全组radio的尺寸', 'string', 'normal, large, small', 'normal'],
        ['disabled', '是否禁用全组radio', 'boolean', 'true, false', 'false'],
      ]
    };
  }

  render() {
    return <div className = "show-radio">
      <h2>Radio 单选框</h2>
      <p>就是个单选按钮</p>
      <h3>基础用法</h3>
      <p>跟原生用法差不多</p>
      <Demo
        code = {<div>
          <Radio value="hehe1" name = "hehe" checked={true} onChange={() => console.log('变变变')}>备选项</Radio>
          <Radio value="hehe2" name = "hehe" checked={false} onChange={() => console.log('变你妹')}>备选项</Radio>
        </div>}
        codeString = {`
/** 
 * 注意，和原生radio一样，想要达到单选的效果，必须给多个Radio传入相同的name
 * 它也可以和原生radio一样被提交，value就是你传入的value
 * 其他新添属性请看页脚参数说明表
*/
<div>
  <Radio value="hehe1" name = "hehe" checked={true} onChange={() => console.log('变变变')}>备选项</Radio>
  <Radio value="hehe2" name = "hehe" checked={false} onChange={() => console.log('变你妹')}>备选项</Radio>
</div>
        `}
      />
      <h3>禁用状态</h3>
      <p>单选框的禁用状态</p>
      <Demo
        code = {<div>
          <Radio value="1" disabled={true}>备选项</Radio>
          <Radio value="2" disabled={true}>备选项</Radio>
        </div>}
        codeString = {`
/** 
 * disabled属性设置为false即可
*/
<div>
  <Radio value="1" disabled={true}>备选项</Radio>
  <Radio value="2" disabled={true}>备选项</Radio>
</div>
        `}
      />
      <h3>单选框组</h3>
      <p>适用于在多个互斥的选项中选择的场景</p>
      <Demo
        code = {<Radio.Group name = "radio_group">
        <Radio checked value="3">备选项0</Radio>
        <Radio value="6">备选项1</Radio>
        <Radio value="9">备选项2</Radio>
      </Radio.Group>}
        codeString = {`
/** 
 * 由于互斥单选按钮必须提供name属性
 * 但是有时候并非用作表单提交，仅仅是为了互斥或者其他用途
 * 所以如果没有传入name属性， 默认name为wb-default-name
 * 
 * 单选组可以给整体添加某些属性，例如：disabled会使所有单选都禁用
 * size会调整全体大小等等，具体请看页脚属性表
*/

<Radio.Group name = "radio_group">
  <Radio checked value="3">备选项0</Radio>
  <Radio value="6">备选项1</Radio>
  <Radio value="9">备选项2</Radio>
</Radio.Group>
        `}
      />
      <h3>按钮单选框</h3>
      <p>按钮样式的单选框组合</p>
      <Demo
        code = {<div className = "radio-button-group">
          <Radio.Group>
            <Radio.Button checked value="好好">好好</Radio.Button>
            <Radio.Button value="学习">学习</Radio.Button>
            <Radio.Button value="天天">天天</Radio.Button>
            <Radio.Button value="向上">向上</Radio.Button>
          </Radio.Group>
          <Radio.Group name = "group-button">
            <Radio.Button value="好好">好好</Radio.Button>
            <Radio.Button checked value="学习">学习</Radio.Button>
            <Radio.Button disabled = {true} value="天天">天天</Radio.Button>
            <Radio.Button value="向上">向上</Radio.Button>
          </Radio.Group>
          <Radio.Group disabled = {true}>
            <Radio.Button value="好好">好好</Radio.Button>
            <Radio.Button value="学习">学习</Radio.Button>
            <Radio.Button value="天天">天天</Radio.Button>
            <Radio.Button value="向上">向上</Radio.Button>
          </Radio.Group>
        </div>}
        codeString = {`
/** 
 * 用法同Radio.Group，只不过样式是button的radio
*/

<div className = "radio-button-group">
  <Radio.Group>
    <Radio.Button checked value="好好">好好</Radio.Button>
    <Radio.Button value="学习">学习</Radio.Button>
    <Radio.Button value="天天">天天</Radio.Button>
    <Radio.Button value="向上">向上</Radio.Button>
  </Radio.Group>
  <Radio.Group name = "group-button">
    <Radio.Button value="好好">好好</Radio.Button>
    <Radio.Button checked value="学习">学习</Radio.Button>
    <Radio.Button disabled = {true} value="天天">天天</Radio.Button>
    <Radio.Button value="向上">向上</Radio.Button>
  </Radio.Group>
  <Radio.Group disabled = {true}>
    <Radio.Button value="好好">好好</Radio.Button>
    <Radio.Button value="学习">学习</Radio.Button>
    <Radio.Button value="天天">天天</Radio.Button>
    <Radio.Button value="向上">向上</Radio.Button>
  </Radio.Group>
</div>
        `}
      />
      <h3>不同尺寸的Radio</h3>
      <p>可以通过size属性设置Radio的尺寸</p>
      <Demo
        code = {<div>
        <Radio name = "size" size = "small" checked value="3">备选项0</Radio>
        <Radio name = "size" size = "normal" value="6">备选项1</Radio>
        <Radio name = "size" size = "large" value="9">备选项2</Radio>
      </div>}
        codeString = {`
/** 
 * 通过设置size来改变大小，提供三种：small、large、normal（default）
*/

<div>
  <Radio name = "size" size = "small" checked value="3">备选项0</Radio>
  <Radio name = "size" size = "normal" value="6">备选项1</Radio>
  <Radio name = "size" size = "large" value="9">备选项2</Radio>
</div>
        `}
      />
      <h3>Radio Attributes</h3>
      <Demo.Table paramList = {this.state.paramsOfRadio} />
      <h3>Radio-group Attributes</h3>
      <Demo.Table paramList = {this.state.paramsOfRadioGroup} />
      <h3>Other Attributes</h3>
      <p>除以上属性以外， 一些原生的事件(或者原生属性)可以直接加到Radio(Radio.Button)上。</p>
    </div>;
  }
}

export default ShowRadio;