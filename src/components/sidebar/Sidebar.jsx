import React, { Component } from 'react';
import List from './List';
import './style/Sidebar.css';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          name: '开发指南',
          list: [
            {introduce: '快速上手', path: '/quick-start'}
          ]
        },
        {
          name: 'Basic',
          list: [
            {introduce: 'Icon 图标', path: '/icon'},
            {introduce: 'Button 按钮', path: '/button'},
          ]
        },
        {
          name: 'Form',
          list: [
            {introduce: 'Radio 单选框', path: '/radio'},
            {introduce: 'Input 输入框', path: '/input'},
            {introduce: 'Input Number 计数器', path: '/input-Number'},
            {introduce: 'Select 选择器', path: '/select'},
            {introduce: 'Switch 开关', path: '/switch'},
            {introduce: 'Slider 滑动条', path: '/slider'},
          ]
        },
        {
          name: 'Data',
          list: [
            {introduce: 'Tag 标签', path: '/tag'}
          ]
        },
        {
          name: 'Notice',
          list: [
            {introduce: 'Alert 警告', path: '/alert'},
            {introduce: 'Notification 通知', path: '/notification'},
          ]
        },
        {
          name: 'Others',
          list: [
            {introduce: 'Dialog 对话框', path: '/dialog'}
          ]
        }
      ]
    }
  }

  render() {
   return <aside className = "sidebar">
     {
       this.state.list.map(item => <List key = {item.name} name = {item.name} list = {item.list} />)
     }
     </aside>;
  }
}

export default Sidebar;