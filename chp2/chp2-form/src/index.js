import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import reportWebVitals from './reportWebVitals';

// 1.单选框
/*
class App extends React.Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      radioValue: "",
    };
  }
  handleChange(e) {
    this.setState({
      radioValue: e.target.value,
    })
  }
  render() {
    
    const { radioValue } = this.state;
    return (
      <div>
        <p>gender:</p>
        <label>
          male: <input type="radio" value="male" checked={radioValue==='male'} onChange={this.handleChange} />
        </label>
        <label>
          female: <input type="radio" value="female" checked={radioValue==='female'} onChange={this.handleChange} />
        </label>
      </div>
    )
  }
}
*/
//2. 复选框
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      coffee: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { checked,value } = e.target;
    let {coffee} = this.state;

    if(checked && coffee.indexOf(value) < 0) {
      coffee.push(value);
    } else {
      coffee = coffee.filter((item) => item !== value);
    }

    this.setState({
      coffee,
    })
  }

  render() {
    const { coffee } = this.state;
    return (
      <div>
        <p>请选择你最爱的IDOL</p>
        <label>
          <input type="checkbox" value="Joshua" checked={coffee.indexOf('Joshua') >= 0} onChange={ this.handleChange }/> Joshua
        </label>
        <br />
        <label>
          <input type="checkbox" value="Hoshi" checked={coffee.indexOf('Hoshi') >= 0} onChange={ this.handleChange }/> Hoshi
        </label>
        <br />
        <label>
          <input type="checkbox" value="Vernon" checked={coffee.indexOf('Vernon') >= 0} onChange={ this.handleChange }/> Vernon
        </label>
        <br />
        <label>
          <input type="checkbox" value="Boo" checked={coffee.indexOf('Boo') >= 0} onChange={ this.handleChange }/> Boo
        </label>
      </div>
    )
  }

}



ReactDOM.render(<App/>, document.getElementById('root'))
