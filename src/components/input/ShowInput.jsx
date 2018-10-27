import React, { Component } from 'react';
import { Input } from 'wb-react-ui';
import Demo from '../demo';
import './style/ShowInput.css';

class ShowInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      params: [
        ['name', '原生name属性', 'string', '———', '———'],
        ['type', '类型', 'string', 'text, textarea', 'text'],
        ['value', '同原生input的value', '同原生value取值', '———', '———'],
        ['placeholder', '提示文字', 'string', '———', '———'],
        ['disabled', '是否禁用', 'boolean', 'true, false', 'false'],
        ['size', '尺寸，在textarea上无效', 'string', 'large, normal, small, mini', 'normal'],
        ['icon', '图标', '图标对应的类名', '———', '———'],
        ['autosize', 'textare的大小调整范围', 'object', '{minRows: number,maxRows: number}', 'minRows默认是4'],
      ]
    };
  }

  render() {
    return <div className = "show-input">
      <h2>Input 输入框</h2>
      <p>通过键盘或鼠标输入字符</p>
      <h3>基础用法</h3>
      <Demo
        code = {<div>
          <Input placeholder="请输入内容" />
        </div>}
        codeString = {`
/** 
 * Input输入框默认width为100%(实际比100%略小)
 * 可以通过在Input外层增加一层container
 * 设置containe的width来调整Input的宽度
*/
<div>
  <Input placeholder="请输入内容" />
</div>
        `}
      />
      <h3>禁用状态</h3>
      <Demo
        code = {<div>
          <Input nativeProps = {{disabled: true}} placeholder="请输入内容" />
        </div>}
        codeString = {`
/** 
 * 和其他组件类似，通过设置disabled属性为true来禁用
*/
<div>
  <Input placeholder="请输入内容" />
</div>
        `}
      />
      <h3>带icon的Input</h3>
      <Demo
        code = {<div>
          <Input icon = "icon-time" placeholder="请输入内容" />
        </div>}
        codeString = {`
/** 
 * 设置icon为对应图标的类名即可，，貌似有点bug
*/
<div>
  <Input icon = "icon-time" placeholder="请输入内容" />
</div>
        `}
      />
      <h3>textare</h3>
      <p>可以调整大小，用于多行文本的输入</p>
      <Demo
        code = {<div>
          <Input
            type="textarea"
            autosize={{ minRows: 2, maxRows: 4}}
            placeholder="请输入内容"
          />
        </div>}
        codeString = {`
/** 
 * type设置为textare来调用
 * autosize是可以调整的行数范围
 * 如果没有autosize属性，则可以不限制高度
 * 注意：size在textare上无效
*/
<div>
  <Input
    type="textarea"
    autosize={{ minRows: 2, maxRows: 4}}
    placeholder="请输入内容"
  />
</div>
        `}
      />
      <h3>不同尺寸的Input</h3>
      <Demo
        code = {<div className="size-input">
        <Input placeholder="请输入内容" size="large" />
        <Input placeholder="请输入内容" />
        <Input placeholder="请输入内容" size="small" />
        <Input placeholder="请输入内容" size="mini" />
      </div>}
        codeString = {`
/** 
 * size的取值有large、normal(defalut)、small、mini
*/
<div className="size-input">
  <Input placeholder="请输入内容" size="large" />
  <Input placeholder="请输入内容" />
  <Input placeholder="请输入内容" size="small" />
  <Input placeholder="请输入内容" size="mini" />
</div>
        `}
      />
      <Demo.Table
        paramList = {this.state.params}
      />
      <p>除以上属性外，其他input的原生属性可以直接加到Input的上，最终会直接添加到原生input上。</p>
    </div>;
  }
}

export default ShowInput;