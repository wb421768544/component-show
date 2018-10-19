import React, { Component } from 'react';
import { InputNumber } from 'wb-react-ui';
import Demo from '../demo';
import './style/ShowInputNumber.css';

class ShowInputNumber extends Component {

  constructor(props) {
    super(props);
    this.state = {
      params: [
        ['name', '原生name', 'string', '——', '——'],
        ['max', '最大值', 'number', '——', Number.POSITIVE_INFINITY],
        ['min', '最小值', 'number', '——', Number.NEGATIVE_INFINITY],
        ['step', '步数', 'number', '——', 1],
        ['disabled', '是否禁用', 'boolean', 'true、false', 'false'],
        ['size', '尺寸', 'string', 'large, normal, small, mini', 'normal'],
        ['defaultValue', '默认值', 'number', '——', 0],
      ]
    }
  }

  render() {
    return <div className = "show-input-number">
      <h2>Input Number 数字输入框</h2>
      <p>仅允许通过 + - 按钮来修改数字值，可以定义范围</p>
      <h3>基础用法</h3>
      <Demo
        code = {<div>
          <InputNumber value={10} min = {1} max = {10} />
        </div>}
        codeString = {`
/** 
 * 通过min、mx来设置取值范围
 * defaultValue设置初始值
 * 和input一样，它的默认宽度也是100%，
 * 通过设置container的width来调整
 */
<div>
  <InputNumber defaultValue={10} min = {1} max = {10} />
</div>
        `}
      />
      <h3>禁用状态</h3>
      <Demo
        code = {<div>
          <InputNumber disabled defaultValue = {10} min = {1} max = {10} />
        </div>}
        codeString = {`
/** 
 * disabled设置为true禁用
 */
<div>
  <InputNumber disabled defaultValue = {10} min = {1} max = {10} />
</div>
        `}
      />
      <h3>Step</h3>
      <p>可以定义递增、递减的部署</p>
      <Demo
        code = {<div>
          <InputNumber step = {2} defaultValue = {1} min = {1} max = {10} />
        </div>}
        codeString = {`
/** 
 * 同个设置step来设置步数
 * 这个目前有点bug。。
 */
<div>
  <InputNumber step = {2} defaultValue = {10} min = {1} max = {10} />
</div>
        `}
      />
      <h3>尺寸</h3>
      <p>提供'large', 'normal', 'small', 'mini'4种尺寸</p>
      <Demo
        code = {<div className = "input-number-size">
          <InputNumber size = "large" />
          <InputNumber size = "normal" />
          <InputNumber size = "small" />
          <InputNumber size = "mini" />
        </div>}
        codeString = {`
/** 
 * 提供'large', 'normal', 'small', 'mini'4种尺寸
 */
<div className = "input-number-size">
  <InputNumber size = "large" />
  <InputNumber size = "normal" />
  <InputNumber size = "small" />
  <InputNumber size = "mini" />
</div>
        `}
      />
      <Demo.Table 
        paramList = {this.state.params}
      />
      <h3>Events</h3>
      <p>除此之外还有一个onChange事件, 当InputNumber的值改变时调用，参数为新的值</p>
    </div>;
  }
}

export default ShowInputNumber;