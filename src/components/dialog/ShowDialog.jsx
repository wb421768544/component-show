import React, { Component } from 'react';
import { Dialog, Button, Select } from 'wb-react-ui';
import Demo from '../demo';
import './style/ShowDialog.css';

class ShowDialog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible0: false,
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      params: [
        ['title', 'Dialog 的标题', 'string', '——', '——'],
        ['size', 'Dialog 的大小', 'string', 'tiny, small, large, full', 'tiny'],
        ['top', 'Dialog CSS 中的 top 值', 'string', '——', '15%'],
        ['modal', '是否需要遮罩层', 'boolean', 'true, false', 'true'],
        ['closeOnClickModal', '是否可以通过点击 modal 关闭 Dialog', 'boolean', 'true, false', 'false'],
        ['closeOnPressEscape', '是否可以通过按下 ESC 关闭 Dialog', 'boolean', 'true, false', 'true'],
      ],
      paramOfEvents: [
        ['onOpen', 'Dialog 关闭的回调', 'function', '——', '——'],
        ['onClose', 'Dialog 打开的回调, 必须提供', 'function', '——', '——'],
      ]
    };
  }

  componentDidMount() {
    document.title = 'Dialog';
  }

  render() {
    return <div className = "show-dialog">
      <h2>Dialog 对话框</h2>
      <p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>
      <h3>基本用法</h3>
      <p>Dialog 弹出一个对话框，适合需要定制性更大的场景。</p>
      <Demo
        code = {<div>
          <Button onClick = {() => this.setState({visible0: true})}>点击打开 Dialog</Button>
          <Dialog
            title = "提示"
            size = "tiny"
            visible = {this.state.visible0}
            onClose = {() => this.setState({visible0: false})}
          >
            <Dialog.Body>
              <span>这是一段消息</span>
            </Dialog.Body>
            <Dialog.Footer className="dialog-footer">
              <Button onClick={ () => this.setState({ visible0: false }) }>取消</Button>
              <Button type="primary" onClick={ () => this.setState({ visible0: false }) }>确定</Button>
            </Dialog.Footer>
          </Dialog>
        </div>}
        codeString = {`
  /** 
   * Dialog的visible是控制对话框显示/隐藏的唯一属性
   * 所以必须提供onClose回调属性， 手动去修改visible
  */
  <div>
    <Button onClick = {() => this.setState({visible: true})}>点击打开 Dialog</Button>
    <Dialog
      title = "提示"
      size = "tiny"
      visible = {this.state.visible}
      onClose = {() => this.setState({visible: false})}
    >
      <Dialog.Body>
        <span>这是一段信息</span>
      </Dialog.Body>
      <Dialog.Footer className="dialog-footer">
        <Button onClick={ () => this.setState({ visible: false }) }>取消</Button>
        <Button type="primary" onClick={ () => this.setState({ visible: false }) }>确定</Button>
      </Dialog.Footer>
    </Dialog>
  </div>
        `}
      />
      <h3>自定义内容</h3>
      <p>通过在Dialog.Body、Dialog.Footer自定义元素可以实现自己想要的对话框</p>
      <Demo
        code = {<div>
          <Button onClick = {() => this.setState({visible1: true})}>点击 选择笑容</Button>
          <Dialog
            title = "提示"
            size = "tiny"
            visible = {this.state.visible1}
            onClose = {() => this.setState({visible1: false})}
          >
            <Dialog.Body>
              <Select
                options = {[
                    {value: 'heihei', label: '嘿嘿'},
                    {value: 'hehe', label: '呵呵'},
                    {value: 'haha', label: '哈哈'}
                  ]}
                />
            </Dialog.Body>
            <Dialog.Footer className="dialog-footer">
              <Button onClick={ () => this.setState({ visible1: false }) }>取消</Button>
              <Button type="primary" onClick={ () => this.setState({ visible1: false }) }>确定</Button>
            </Dialog.Footer>
          </Dialog>
        </div>}
        codeString = {`
  /** 
   * Dialog.Body主题显示的东西
   * Dialog.Footer 一般用作确认、取消按钮的容身之处
  */
  <div>
    <Button onClick = {() => this.setState({visible1: true})}>点击 选择笑容</Button>
    <Dialog
      title = "提示"
      size = "tiny"
      visible = {this.state.visible1}
      onClose = {() => this.setState({visible1: false})}
    >
      <Dialog.Body>
        <Select
          options = {[
              {value: 'heihei', label: '嘿嘿'},
              {value: 'hehe', label: '呵呵'},
              {value: 'haha', label: '哈哈'}
            ]}
          />
      </Dialog.Body>
      <Dialog.Footer className="dialog-footer">
        <Button onClick={ () => this.setState({ visible1: false }) }>取消</Button>
        <Button type="primary" onClick={ () => this.setState({ visible1: false }) }>确定</Button>
      </Dialog.Footer>
    </Dialog>
  </div>
        `}
      />
      <h3>不同尺寸的Dialog</h3>
      <p>设置size属性即可</p>
      <Demo
        code = {<div>
          <Button onClick = {() => this.setState({visible2: true})}>点击打开 tiny Dialog</Button>
          <Button onClick = {() => this.setState({visible3: true})}>点击打开 small Dialog</Button>
          <Button onClick = {() => this.setState({visible4: true})}>点击打开 large Dialog</Button>
          <Dialog
            title = "提示"
            size = "tiny"
            visible = {this.state.visible2}
            onClose = {() => this.setState({visible2: false})}
          >
            <Dialog.Body>
              <span>这是一段消息</span>
            </Dialog.Body>
            <Dialog.Footer className="dialog-footer">
              <Button onClick={ () => this.setState({ visible2: false }) }>取消</Button>
              <Button type="primary" onClick={ () => this.setState({ visible2: false }) }>确定</Button>
            </Dialog.Footer>
          </Dialog>
          <Dialog
            title = "提示"
            size = "small"
            visible = {this.state.visible3}
            onClose = {() => this.setState({visible3: false})}
          >
            <Dialog.Body>
              <span>这是一段消息</span>
            </Dialog.Body>
            <Dialog.Footer className="dialog-footer">
              <Button onClick={ () => this.setState({ visible3: false }) }>取消</Button>
              <Button type="primary" onClick={ () => this.setState({ visible3: false }) }>确定</Button>
            </Dialog.Footer>
          </Dialog>
          <Dialog
            title = "提示"
            size = "large"
            visible = {this.state.visible4}
            onClose = {() => this.setState({visible4: false})}
          >
            <Dialog.Body>
              <span>这是一段消息</span>
            </Dialog.Body>
            <Dialog.Footer className="dialog-footer">
              <Button onClick={ () => this.setState({ visible4: false }) }>取消</Button>
              <Button type="primary" onClick={ () => this.setState({ visible4: false }) }>确定</Button>
            </Dialog.Footer>
          </Dialog>
        </div>}
        codeString = {`
  /** 
   * 除了以上三个size： small、tiny、large以外，还有一个full(全屏)
   * 具体其他属性请看页脚的Attributes
  */
  <div>
    <Button onClick = {() => this.setState({visible2: true})}>点击打开 tiny Dialog</Button>
    <Button onClick = {() => this.setState({visible3: true})}>点击打开 small Dialog</Button>
    <Button onClick = {() => this.setState({visible4: true})}>点击打开 large Dialog</Button>
    <Dialog
      title = "提示"
      size = "tiny"
      visible = {this.state.visible2}
      onClose = {() => this.setState({visible2: false})}
    >
      <Dialog.Body>
        <span>这是一段消息</span>
      </Dialog.Body>
      <Dialog.Footer className="dialog-footer">
        <Button onClick={ () => this.setState({ visible2: false }) }>取消</Button>
        <Button type="primary" onClick={ () => this.setState({ visible2: false }) }>确定</Button>
      </Dialog.Footer>
  </Dialog>
  <Dialog
    title = "提示"
    size = "small"
    visible = {this.state.visible3}
    onClose = {() => this.setState({visible3: false})}
  >
    <Dialog.Body>
      <span>这是一段消息</span>
    </Dialog.Body>
    <Dialog.Footer className="dialog-footer">
      <Button onClick={ () => this.setState({ visible3: false }) }>取消</Button>
      <Button type="primary" onClick={ () => this.setState({ visible3: false }) }>确定</Button>
    </Dialog.Footer>
  </Dialog>
  <Dialog
    title = "提示"
    size = "large"
    visible = {this.state.visible4}
    onClose = {() => this.setState({visible4: false})}
  >
    <Dialog.Body>
      <span>这是一段消息</span>
    </Dialog.Body>
    <Dialog.Footer className="dialog-footer">
      <Button onClick={ () => this.setState({ visible4: false }) }>取消</Button>
      <Button type="primary" onClick={ () => this.setState({ visible4: false }) }>确定</Button>
    </Dialog.Footer>
  </Dialog>
  </div>
        `}
      />
      <h3>Attributes</h3>
      <Demo.Table paramList = {this.state.params} />
      <h3>Events Attributes</h3>
      <Demo.Table paramList = {this.state.paramOfEvents} />
    </div>;
  }
}


export default ShowDialog;