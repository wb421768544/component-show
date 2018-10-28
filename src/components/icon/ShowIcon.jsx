import React, { Component } from 'react';
import './style/ShowIcon.css';
import { Button, Tooltip } from 'wb-react-ui';

import Demo from '../demo/Demo';

class ShowIcon extends Component {

  constructor(props) {
    super(props);
    this.state = {
      iconList: [
        'arrow-down', 'arrow-up','arrow-left','arrow-right',
        'caret-top', 'caret-bottom', 'caret-right', 'caret-left', 'caret',
        'circle-close', 'circle-cross', 'close',
        'upload-cloud', 'upload2', 'menu', 'time', 
        'document',  'staroff', 
         'view', 'delete', 'delete2',
        'information',  'share', 'loading',
         'minus', 'plus',
        'msg',  'picture', 'circle-check',
        'date', 'star-on', 'moreread', 'warning', 'tick',
        'edit', 'setting', 'search','d-arrow-right', 'd-arrow-left'
      ]
    };
  }

  render() {
    return <div className = "show-icon">
      <h2>Icon 可爱的小图标</h2>
      <p>我(阿里图标库)提供了一套可爱的小图标</p>
      <h3>使用方法</h3>
      <p>
        直接给i标签设置类名 icon-iconName 来使用即可。
        它的颜色、大小的处理方式和字体相同。 例如
      </p>
      <Demo
        code = {
          <div>
            <i className = "icon-edit" />
            <i className = "icon-search" />
            <i className = "icon-picture" />
            <i className = "icon-msg" />
            <i className = "icon-staroff" />
            <Button type = "primary" icon = "icon-search">搜索</Button>
          </div>
        }
        codeString = {`
        <div>
         <i className = "icon-edit" />
         <i className = "icon-search" />
         <i className = "icon-picture" />
         <i className = "icon-msg" />
         <i className = "icon-staroff" />
         <Button type = "primary" icon = "icon-search">搜索</Button>
       </div>
        `}
      />
      <h3>图标集合</h3>
      <div className = "icon-list">
        <ul>
          {this.state.iconList.map(icon => (
              <Tooltip key = {icon} content = {'icon-' + icon} placement = "bottom">
                <li><i className = {'icon-' + icon} /></li>
              </Tooltip>
            ))}
        </ul>
      </div>
    </div>;
  }
}

export default ShowIcon;