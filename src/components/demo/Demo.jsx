import React, { Component } from 'react';
import Prism from 'prismjs';
import './style/Demo.css';

class Demo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: false
    };
    this.show = 'hide';
    this.ref = React.createRef();
    this.footerRef = React.createRef();
  }

  handleClick = () => {
    this.ref.current.style.height = this.state.status? '0px': '300px';
    this.setState({status: !this.state.status});

  }

  handleMouseEnter = () => {
    this.show = 'show';
    this.footerRef.current.style.animation = 'footer-in .2s linear';
    this.footerRef.current.style.visibility = 'visible';
  }

  handleMouseLeave = () => {
    this.show = 'hide';
    this.footerRef.current.style.animation = 'footer-in reverse .2s linear';
  }

  handleAnimationEnd = () => {
    if(this.show === 'hide') {

      this.footerRef.current.style.visibility = 'hidden';
    }
    this.footerRef.current.style.animation = 'none';
  }

  render() {
    return <div className = "demo-block">
      <header>{this.props.code}</header>
      <div className = "code-demo " ref = {this.ref}>
        <pre>
            <code className="language-markup">
            {this.props.codeString}
            </code>
        </pre>
      </div>
      <footer
        onClick = {this.handleClick}
        onMouseEnter = {this.handleMouseEnter}
        onMouseLeave = {this.handleMouseLeave}
        onAnimationEnd = {this.handleAnimationEnd}
      >
        <div className = "show-code" ref = {this.footerRef}>
          <i className = {'icon-caret-' + (this.state.status? 'top': 'bottom')} />
          {this.state.status? '隐藏代码': '显示代码'}
        </div>
      </footer>
    </div>;
  }
}

export default Demo;