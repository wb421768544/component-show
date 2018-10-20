import React, { Component } from 'react';
import { Tooltip, Button } from 'wb-react-ui';
import Demo from '../demo';
import './style/ShowTooltip.css';

class ShowTooltip extends Component {

  constructor(props) {
    super(props);
    let placement = [
      'top-start', 'top', 'top-end',
      'left-start', 'left', 'left-end',
      'right-start', 'right', 'right-end',
      'bottom-start', 'bottom', 'bottom-end'
    ];
    this.state = {
      params: [
        ['placement', 'Tooltip的位置', 'string', placement.join(', '), 'top'],
        ['disabled', '是否禁用', 'boolean', 'true, false', 'false'],
        ['content', '提示框的信息(内容)', 'string, Node', '——', '——'],
      ]
    };
  }

  render() {
    return <div className = "show-tooltip">
      <h2>Tooltip 文字提示</h2>
      <p>常用于展示鼠标 hover 时的提示信息。</p>
      <h3>基础用法</h3>
      <p>提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。</p>
      <Demo
        code = {<div>
          <div className = "top">
            <Tooltip content = "Top Left 提示文字" placement = "top-start">
              <Button>上左</Button>
            </Tooltip>
            <Tooltip content = "Top Center 提示文字" placement = "top">
              <Button>上边</Button>
            </Tooltip>
            <Tooltip content = "Top Right 提示文字" placement = "top-end">
              <Button>上右</Button>
            </Tooltip>
          </div>
          <div className = "left-block">
            <Tooltip content = "Left Top 提示文字" placement = "left-start">
              <Button>左上</Button>
            </Tooltip>
            <Tooltip content = "Left Center 提示文字" placement = "left">
              <Button>左边</Button>
            </Tooltip>
            <Tooltip content = "Left Bottom 提示文字" placement = "left-end">
              <Button>左下</Button>
            </Tooltip>
          </div>
    
          <div className = "right-block">
            <Tooltip content = "Right Top 提示文字" placement = "right-start">
              <Button>右上</Button>
            </Tooltip>
            <Tooltip content = "Right Center 提示文字" placement = "right">
              <Button>右边</Button>
            </Tooltip>
            <Tooltip content = "Right Bottom 提示文字" placement = "right-end">
              <Button>右下</Button>
            </Tooltip>
          </div>
          <div className = "bottom">
            <Tooltip content = "Bottom Left 提示文字" placement = "bottom-start">
              <Button>下左</Button>
            </Tooltip>
            <Tooltip content = "Bottom Center 提示文字" placement = "bottom">
              <Button>下边</Button>
            </Tooltip>
            <Tooltip content = "Bottom Right 提示文字" placement = "bottom-end">
              <Button>下右</Button>
            </Tooltip>
          </div>
        </div>}
        codeString = {`
  /** 
   * @param {content} 提示文字
   * @param {placement} 提示框的位置
   * placement 具体取值见Attributes
  */
  <div>
    <div className = "top">
    <Tooltip content = "Top Left 提示文字" placement = "top-start">
      <Button>上左</Button>
    </Tooltip>
    <Tooltip content = "Top Center 提示文字" placement = "top">
      <Button>上边</Button>
    </Tooltip>
    <Tooltip content = "Top Right 提示文字" placement = "top-end">
      <Button>上右</Button>
    </Tooltip>
  </div>
  <div className = "left-block">
    <Tooltip content = "Left Top 提示文字" placement = "left-start">
      <Button>左上</Button>
    </Tooltip>
    <Tooltip content = "Left Center 提示文字" placement = "left">
      <Button>左边</Button>
    </Tooltip>
    <Tooltip content = "Left Bottom 提示文字" placement = "left-end">
      <Button>左下</Button>
    </Tooltip>
  </div>

  <div className = "right-block">
    <Tooltip content = "Right Top 提示文字" placement = "right-start">
      <Button>右上</Button>
    </Tooltip>
    <Tooltip content = "Right Center 提示文字" placement = "right">
      <Button>右边</Button>
    </Tooltip>
    <Tooltip content = "Right Bottom 提示文字" placement = "right-end">
      <Button>右下</Button>
    </Tooltip>
  </div>
  <div className = "bottom">
    <Tooltip content = "Bottom Left 提示文字" placement = "bottom-start">
      <Button>下左</Button>
    </Tooltip>
    <Tooltip content = "Bottom Center 提示文字" placement = "bottom">
      <Button>下边</Button>
    </Tooltip>
    <Tooltip content = "Bottom Right 提示文字" placement = "bottom-end">
      <Button>下右</Button>
    </Tooltip>
  </div>
  </div>
        `}
      />
      <h3>多行 Content</h3>
      <p>展示多行文本或者是设置文本内容的格式</p>
      <Demo
        code = {<div>
          <Tooltip
            placement = "top"
            content={<div>多行信息<br/>第二行信息</div>}
          >
            <Button>Top center</Button>
          </Tooltip>
        </div>}
        codeString = {`
  /** 
   * 直接给content里面传递DOM，手动<br />实现多行的提示框
  */
  <div>
    <Tooltip
      placement = "top"
      content={<div>多行信息<br/>第二行信息</div>}
    >
      <Button>Top center</Button>
    </Tooltip>
  </div>
        `}
      />
      <h3>Attributes</h3>
      <Demo.Table
        paramList = {this.state.params}
      />
    </div>;
  }
}


export default ShowTooltip;