import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';




import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import QuickStart from './components/quick-start/QuickStart';
import ShowIcon from './components/icon/ShowIcon';
import ShowButton from './components/button/ShowButton';

// import {
//   Button, Radio, InputNumber, Select, Switch, Slider, Tag, Alert, Notification, Dialog
// } from 'wb-react-ui';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Route path = "/" component = {Header} />
            <div className = "container">
              <Sidebar />
              <div className = "view">
                <Route path = "/quick-start" component = {QuickStart} />
                <Route path = "/icon" component = {ShowIcon} />
                <Route path = "/button" component = {ShowButton} />
              </div>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;



//     <div className="highlight">
//         <pre>
//            <code className="language-markup">
//            {`
//           <label class="select">
//           <select class="selector">
//               <option value="1">1</option>
//               <option value="2">2</option>
//               <option value="3">3</option>
//               <option value="4">4</option>
//               <option value="5">5</option>
//            </select>
//           </label>
//            `}
//            </code>
//        </pre>
//    </div>