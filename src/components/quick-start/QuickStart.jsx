import React, { Component } from 'react';
import './style/QuickStart.css';

class QuickStart extends Component {
  render() {
    return (
      <div className = "quick-start">
        <h2>快速上手</h2>
        <Block
          title = "安装"
          introduce = "推荐(只能)使用 npm 的方式安装，它能更好地和webpack打包工具配合使用。"
          code = "npm install wb-react-ui --save"
        />
        <Block
          title = "主题"
          introduce = "开始前, 你还需要一个主题包, 这里我们推荐使用...好像没写主题包，你就引默认的css吧。"
          code = "import 'wb-react-ui/build/css/index.css';"
        />
        <Block
          title = "使用"
        />
        <pre>
          <code className="language-markup">
          {`
          import React from 'react';
          import ReactDOM from 'react-dom';
          import { Button } from 'wb-react-ui';
      
          import 'wb-react-ui/build/css/index.css';
      
          ReactDOM.render(<Button type="primary">Hello</Button>, document.getElementById('app'));
          `}
          </code>
        </pre>
      </div>
    )
  }
}

function Block(props) {
  return (
    <div className = "quick-start-block">
      {props.title? <h3>{props.title}</h3>: null}
      {props.introduce? <p>{props.introduce}</p>: null}
      {props.code? <code>{props.code}</code>: null}
    </div>
  )
}

export default QuickStart;