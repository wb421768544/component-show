import React, { Component } from 'react';
import { Slider } from 'wb-react-ui';
import Demo from '../demo';
import './style/ShowSlider.css';

class ShowSlider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      params: [
        ['name', '表单原生name, 但是这个我忘了写了。。。等我修复', 'string', '——', '——'],
        ['max', '最大值', 'number', '——', 0],
        ['min', '最小值', 'number', '——', 100],
        ['step', '步数', 'number', '——', 1],
        ['value', '默认位置', 'number', '——', 0],
        ['width', '滚动条的长度，单位是px', 'number', '——', 400],
        ['disabled', '是否禁用', 'boolean', 'true, false', 'false'],
        ['buttonColor', '滚动条按钮的颜色', 'string', '——', '#20a0ff'],
        ['selectedColor', '滚动条选中区域的颜色', 'string', '——', '#20a0ff'],
        ['unselectedColor', '滚动条未选中区域的颜色', 'string', '——', '#e4e8f1'],
      ],
      paramsOfEvents: [
        ['onChange', '拖动的时候触发，也就是值改变的时候, 改变后的值作为参数', 'function', '——', '——'],
      ]
    }
  }

  componentDidMount() {
    document.title = 'Slider';
  }

  render() {
    return <div className = "show-slider">
      <h2>Slider 滑动条</h2>
      <h3>基础用法</h3>
      <p>拖动滑动条的时候显示当前值</p>
      <Demo
        code = {<div>
          <Slider />
          <Slider value = {20} />
          <Slider value = {200} max = {500} />
        </div>}
        codeString = {`
  /** 
   * value设置默认值
   * max 为最大值
   * min 为最小值，不过这个属性暂时存在bug 请等待修复
  */
  <div>
    <Slider />
    <Slider value = {50} />
    <Slider value = {200} max = {500} />
  </div>
        `}
      />
      <h3>有Step的滑动条</h3>
      <p>设置step属性可以调整滑动的步数</p>
      <Demo
        code = {<div>
          <Slider step = {10} />
          <Slider step = {10} value = {20} />
          <Slider step = {10} value = {200} max = {500} />
        </div>}
        codeString = {`
  /** 
   * step默认值为1
  */
  <div>
    <Slider step = {10} />
    <Slider step = {10} value = {20} />
    <Slider step = {10} value = {200} max = {500} />
  </div>
        `}
      />
      <h3>禁用状态的Slider</h3>
      <p>设置disabled属性为true开启禁用</p>
      <Demo
        code = {<div>
          <Slider disabled />
          <Slider disabled value = {20} />
          <Slider disabled value = {200} max = {500} />
        </div>}
        codeString = {`
  /** 
   * 设置disabled属性为true开启禁用
  */
  <div>
    <Slider disabled />
    <Slider disabled value = {50} />
    <Slider disabled value = {200} max = {500} />
  </div>
        `}
      />
      <h3>自定义长度</h3>
      <p>设置width自定义滚动条的长度</p>
      <Demo
        code = {<div>
          <Slider width = {300} />
          <Slider />
          <Slider width = {500} />
        </div>}
        codeString = {`
  /** 
   * 给width属性传递一个数字(单位是px)来定义Slider的长度
   * 默认是400
  */
  <div>
    <Slider width = {300} />
    <Slider />
    <Slider width = {500} />
  </div>
        `}
      />
      <h3>自定义Slider颜色</h3>
      <p>通过设置buttonColor、selectedColor、unselectedColor来自定义颜色</p>
      <Demo
        code = {<div>
          <Slider buttonColor = "red" selectedColor = "#FF00FF" unselectedColor = "#FFE1FF" />
          <Slider buttonColor = "#7CFC00" selectedColor = "#00F5FF" unselectedColor = "#CDCD00" />
          <Slider buttonColor = "black" selectedColor = "black" />
        </div>}
        codeString = {`
  /** 
   * buttonColor为滚动按钮的颜色
   * selectedColor为滚动条已滚动区域的颜色
   * unselectedColor为滚动条未滚动区域的颜色
  */
  <div>
    <Slider buttonColor = "red" selectedColor = "#FF00FF" unselectedColor = "#FFE1FF" />
    <Slider buttonColor = "#7CFC00" selectedColor = "#00F5FF" unselectedColor = "#CDCD00" />
    <Slider buttonColor = "black" selectedColor = "black" />
  </div>
        `}
      />
      <h3>Attribute</h3>
      <Demo.Table
        paramList = {this.state.params}
      />
      <h3>Events Attribute</h3>
      <Demo.Table
        paramList = {this.state.paramsOfEvents}
      />
    </div>;
  }
}

export default ShowSlider;