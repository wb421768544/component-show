import React, { Component } from 'react';
import { Button } from 'wb-react-ui';
import Demo from '../demo';
import './styel/ShowButton.css';


class ShowButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      params: [
        ['size', '尺寸', 'string', 'normal, large, small, mini', 'normal'],
        ['type', '类型', 'string', 'primary,success,warning,danger,info,text', 'default'],
        ['plain', '是否朴素按钮', 'boolean', 'true, false', 'false'],
        ['disabled', '是否禁用', 'boolean', 'true, false', 'false'],
        ['icon', '按钮图标对应图标的类名', 'string', '——', '——'],
        ['nativeType', '原生 type 属性', 'string', 'button, submit, reset', 'button'],
      ]
    }
  }

  render() {
    return <div className = "show-button">
      <h2>Button 按钮</h2>
      <p>常用的操作按钮</p>
      <h3>基础用法</h3>
      <p>按钮的基本用法</p>
      <Demo
        code = {<div>
          <Button>默认按钮</Button>
          <Button type="primary">主要按钮</Button>
          <Button type="text">文字按钮</Button>
        </div>}
        codeString = {`
      /** 
       * 按钮提供7种样式, 通过设置属性type来修改
       * 默认的type为default
       */
      <div>
        <Button>默认按钮</Button>
        <Button type="primary">主要按钮</Button>
        <Button type="text">文字按钮</Button>
      </div>`}
      />
      <h3>禁用状态</h3>
      <p>按钮的禁用状态</p>
      <Demo
        code = {<div>
          <Button plain={true} disabled={true}>默认按钮</Button>
          <Button type="primary" disabled={true}>主要按钮</Button>
          <Button type="text" disabled={true}>文字按钮</Button>
        </div>}
        codeString = {`
      /** 
       * 通过属性disabled来设置按钮是否禁用
       * 其中plain属性是用来设置按钮是否为普索按钮
       * （我也不知道element为什么取这么个名字，就是背景颜色是否透明）
       */
      <div>
        <Button plain={true} disabled={true}>默认按钮</Button>
        <Button type="primary" disabled={true}>主要按钮</Button>
        <Button type="text" disabled={true}>文字按钮</Button>
      </div>`}
      />
      <h3>有颜色的按钮</h3>
      <p>不同颜色的按钮可以用作不同的提示</p>
      <Demo
        code = { <div className = "color-button">
        <div>
          <span>默认显示颜色</span>
          <span className = "button-group">
            <Button type="success">成功按钮</Button>
            <Button type="warning">警告按钮</Button>
            <Button type="danger">危险按钮</Button>
            <Button type="info">信息按钮</Button>
          </span>
        </div>
        <div>
          <span>hover 显示颜色</span>
          <span className = "button-group">
            <Button plain={true} type="success">成功按钮</Button>
            <Button plain={true} type="warning">警告按钮</Button>
            <Button plain={true} type="danger">危险按钮</Button>
            <Button plain={true} type="info">信息按钮</Button>
          </span>
        </div>
      </div>}
        codeString = {`
      /** 
       * 通过type来设置按钮的样式
       */
      <div className = "color-button">
        <div>
          <span>默认显示颜色</span>
          <span className = "button-group">
            <Button type="success">成功按钮</Button>
            <Button type="warning">警告按钮</Button>
            <Button type="danger">危险按钮</Button>
            <Button type="info">信息按钮</Button>
          </span>
        </div>
        <div>
          <span>hover 显示颜色</span>
          <span className = "button-group">
            <Button plain={true} type="success">成功按钮</Button>
            <Button plain={true} type="warning">警告按钮</Button>
            <Button plain={true} type="danger">危险按钮</Button>
            <Button plain={true} type="info">信息按钮</Button>
          </span>
          </div>
      </div>`}
      />
      <h3>图标按钮</h3>
      <p>可以设置Button的icon属性为对应图标的类名来设置图标按钮的样式</p>
      <Demo
        code = {<div className = "icon-button">
          <Button type="primary" icon="icon-delete"></Button>
          <Button type="primary" icon="icon-share"></Button>
          <Button type="primary" icon="icon-circle-close"></Button>
          <Button type="primary" icon="icon-search">搜索</Button>
          <Button type="primary">上传<i className="icon-upload-cloud" /></Button>
        </div>}
        codeString = {`
      /** 
       * 推荐使用icon来将图标设置在文字的左边
       * 也可以在Button里面嵌套<i />来实现
       * 不过大家也看到了，暂时有点小bug -..-
       */
      <div className = "icon-button">
        <Button type="primary" icon="icon-delete"></Button>
        <Button type="primary" icon="icon-share"></Button>
        <Button type="primary" icon="icon-circle-close"></Button>
        <Button type="primary" icon="icon-search">搜索</Button>
        <Button type="primary">上传<i className="icon-upload-cloud" /></Button>
      </div>`}
      />
      <h3>按钮组</h3>
      <p>以一组按钮的形式呈现，用于类似的一组操作对应的按钮</p>
      <Demo
        code = { <div className = "button-groups">
          <Button.Group>
              <Button type="primary" icon="icon-arrow-left">上一页</Button>
              <Button type="primary" icon="icon-arrow-right">下一页</Button>
          </Button.Group>
          <Button.Group>
              <Button type="primary" icon="icon-edit"></Button>
              <Button type="primary" icon="icon-share"></Button>
              <Button type="primary" icon="icon-delete"></Button>
          </Button.Group>
        </div>}
        codeString = {`
      /** 
       * 通过Button.Group来将多个Button组合为一个ButtonGroup，
       * 貌似还有点小问题
       */
      <div className = "button-groups">
        <Button.Group>
            <Button type="primary" icon="icon-arrow-left">上一页</Button>
            <Button type="primary" icon="icon-arrow-right">下一页</Button>
        </Button.Group>
        <Button.Group>
            <Button type="primary" icon="icon-edit"></Button>
            <Button type="primary" icon="icon-share"></Button>
            <Button type="primary" icon="icon-delete"></Button>
        </Button.Group>
      </div>`}
      />
      <h3>不同尺寸</h3>
      <p>Button提供四种尺寸</p>
      <Demo
        code = {<div>
          <Button type="primary" size="large">大型按钮</Button>
          <Button type="primary">正常按钮</Button>
          <Button type="primary" size="small">小型按钮</Button>
          <Button type="primary" size="mini">超小按钮</Button>
        </div>}
        codeString = {`
      /** 
       * 通过设置Button的size属性来设置大小
       */
      <div>
        <Button type="primary" size="large">大型按钮</Button>
        <Button type="primary">正常按钮</Button>
        <Button type="primary" size="small">小型按钮</Button>
        <Button type="primary" size="mini">超小按钮</Button>
      </div>`}
      />
      <Demo.Table paramList = {this.state.params} />
    </div>;
  }
}

export default ShowButton;

/*
<h2>Button 按钮</h2>
<p>常用的操作按钮</p>
<h3>基础用法</h3>
<p>按钮的基本用法</p>
<Demo
  code = {<div>
    <Button>默认按钮</Button>
    <Button type="primary">主要按钮</Button>
    <Button type="text">文字按钮</Button>
  </div>}
  codeString = {`
/** 
 * 按钮提供7种样式, 通过设置属性type来修改
 * 默认的type为default
 */
/*
<div>
  <Button>默认按钮</Button>
  <Button type="primary">主要按钮</Button>
  <Button type="text">文字按钮</Button>
</div>`}
/>*/