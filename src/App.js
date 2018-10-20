import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import QuickStart from './components/quick-start/QuickStart';
import ShowIcon from './components/icon/ShowIcon';
import ShowButton from './components/button/ShowButton';
import ShowRadio from './components/radio/ShowRadio';
import ShowInput from './components/input/ShowInput';
import ShowInputNumber from './components/input-number/ShowInputNumber';
import ShowSelect from './components/select/ShowSelect';
import ShowSwitch from './components/switch/ShowSwitch';
import ShowSlider from './components/slider/ShowSlider';
import ShowTag from './components/tag/ShowTag';
import ShowAlert from './components/alert/ShowAlert';
import ShowNotification from './components/notification/ShowNotification';
import ShowDialog from './components/dialog/ShowDialog';
import ShowTooltip from './components/tooltip/ShowTooltip';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      components: [
        {path: '/quick-start', component: QuickStart},
        {path: '/icon', component: ShowIcon},
        {path: '/button', component: ShowButton},
        {path: '/radio', component: ShowRadio},
        {path: '/input', component: ShowInput},
        {path: '/input-number', component: ShowInputNumber},
        {path: '/select', component: ShowSelect},
        {path: '/switch', component: ShowSwitch},
        {path: '/slider', component: ShowSlider},
        {path: '/tag', component: ShowTag},
        {path: '/alert', component: ShowAlert},
        {path: '/notification', component: ShowNotification},
        {path: '/dialog', component: ShowDialog},
        {path: '/tooltip', component: ShowTooltip},
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Route path = "/" component = {Header} />
            <div className = "container">
              <Sidebar />
              <div className = "view">
              {
                this.state.components.map((item, index) => <Route key = {index} path = {item.path} component = {item.component} />)
              }
              </div>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;