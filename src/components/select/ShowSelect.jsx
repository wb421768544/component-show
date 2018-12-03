import React, { Component } from 'react';
import { Select} from 'wb-react-ui';
import Demo from '../demo';
import './style/ShowSelect.css';

class ShowSelect extends Component {

  constructor(props) {
    super(props);
    this.state = {
      params: [
        ['name', 'Select的name', 'string', '——', '——'],
        ['options', '选项', `必须是一个{value: '', label:''}形式的对象数组`, '——', '[]'],
        ['multiple', '是否多选', 'boolean', 'true， false', 'false'],
        ['disabled', '是否禁用', 'boolean', 'true， false', 'false'],
        ['clearable', '单选时是否可以清空选项，多选自动开启', 'boolean', 'true， false', 'false'],
        ['placeholder', 'Select的输入提示', 'string', '——', '请选择'],
        ['maxHeight', 'options列表的最大高度， 超出会显示滚动条', 'string', '——', '310px'],

      ],
      options: [
        {value: '0', label: '呵呵'},
        {value: '1', label: '哈哈'},
        {value: '2', label: '(ノ｀Д)ノ'},
      ]
    };
  }

  componentDidMount() {
    document.title = 'Select';
  }

  render() {
    return <div className = "show-select">
      <h2>Select 选择器</h2>
      <p>可以将多个选项合并到下拉菜单中， 并选择其内容</p>
      <h3>基础用法</h3>
      <p>最简单的用法</p>
      <Demo
        code = {<div>
          <Select
            options = {[
              {value: '0', label: '呵呵'},
              {value: '1', label: '哈哈'},
              {value: '2', label: '(ノ｀Д)ノ'},
            ]}
          />
        </div>}
        codeString = {`
/** 
 * 传入的options是一个对象数组
 * 它的元素必须是包含value和label的对象
 * value是对应option的value，label是显示的内容
*/
<Select options = {[
    {value: '0', label: '呵呵'},
    {value: '1', label: '哈哈'},
    {value: '2', label: '(ノ｀Д)ノ'},
  ]}
/>
        `}
      />
      <h3>禁用状态</h3>
      <p>选择器不可用状态</p>
      <Demo
        code = {<div>
          <Select
            disabled
            options = {[
              {value: '0', label: '呵呵'},
              {value: '1', label: '哈哈'},
              {value: '2', label: '(ノ｀Д)ノ'},
            ]}
          />
        </div>}
        codeString = {`
/** 
 * 设置disabled为true禁用Select
*/
<div>
  <Select
    disabled
    options = {[
      {value: '0', label: '呵呵'},
      {value: '1', label: '哈哈'},
      {value: '2', label: '(ノ｀Д)ノ'},
    ]}
  />
</div>
        `}
      />
      <h3>可清空单选</h3>
      <p>点击x按钮清空</p>
      <Demo
        code = {<div>
          <Select
            clearable
            options = {[
              {value: '0', label: '呵呵'},
              {value: '1', label: '哈哈'},
              {value: '2', label: '(ノ｀Д)ノ'},
            ]}
          />
        </div>}
        codeString = {`
/** 
 * 设置clearable为true来开启
*/
<div>
  <Select
    clearable
    options = {[
      {value: '0', label: '呵呵'},
      {value: '1', label: '哈哈'},
      {value: '2', label: '(ノ｀Д)ノ'},
    ]}
  />
</div>
        `}
      />
      <h3>多选</h3>
      <Demo
        code = {<div>
          <Select
            multiple
            options = {[
              {value: '0', label: '呵呵'},
              {value: '1', label: '哈哈'},
              {value: '2', label: '(ノ｀Д)ノ'},
            ]}
          />
        </div>}
        codeString = {`
/** 
 * 设置multiple为true来开启多选
 * 多选会开启clearable
*/
<div>
  <Select
    multiple
    options = {[
      {value: '0', label: '呵呵'},
      {value: '1', label: '哈哈'},
      {value: '2', label: '(ノ｀Д)ノ'},
    ]}
  />
</div>
        `}
      />
      <Demo.Table
        paramList = {this.state.params}
      />
    </div>;
  }
}

export default ShowSelect;