import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 1. 属性代理
const Mycontainer = (WapperComponent) =>
  class extends React.Component{
    render() {
      const newProps = {
        text: 'hahah'
      }
      return <WapperComponent {...this.props}{...newProps}/>
    }
  }
