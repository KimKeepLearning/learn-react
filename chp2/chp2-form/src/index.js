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
// class App extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       coffee: []
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(e) {
//     const { checked,value } = e.target;
//     let {coffee} = this.state;

//     if(checked && coffee.indexOf(value) < 0) {
//       coffee.push(value);
//     } else {
//       coffee = coffee.filter((item) => item !== value);
//     }

//     this.setState({
//       coffee,
//     })
//   }

//   render() {
//     const { coffee } = this.state;
//     return (
//       <div>
//         <p>请选择你最爱的IDOL</p>
//         <label>
//           <input type="checkbox" value="Joshua" checked={coffee.indexOf('Joshua') >= 0} onChange={ this.handleChange }/> Joshua
//         </label>
//         <br />
//         <label>
//           <input type="checkbox" value="Hoshi" checked={coffee.indexOf('Hoshi') >= 0} onChange={ this.handleChange }/> Hoshi
//         </label>
//         <br />
//         <label>
//           <input type="checkbox" value="Vernon" checked={coffee.indexOf('Vernon') >= 0} onChange={ this.handleChange }/> Vernon
//         </label>
//         <br />
//         <label>
//           <input type="checkbox" value="Boo" checked={coffee.indexOf('Boo') >= 0} onChange={ this.handleChange }/> Boo
//         </label>
//       </div>
//     )
//   }

// }

// 3. 子组件向父组件通信=>回调函数传参
// class ListItem extends React.Component{
//   static defaultProps = {
//     text: "",
//     checked: false
//   };
//   render() {
//     // console.log('ListItem',this.props)
//     return (
//       <li>
//         <input type="checkbox" checked={this.props.checked} onChange={this.props.onChange} />
//         <span>{ this.props.value}</span>
//       </li>
//     )
//   }
// }

// class List extends React.Component{
//   static defaultProps = {
//     list: [],
//     handleItemChange: () => {},
//   }

//   constructor(props) {
//     super(props);
//     this.state = {
//       list: this.props.list.map(entry => ({
//         text: entry.text,
//         checked: entry.checked===undefined ? false : entry.checked,
//       }))
//     }
//   }

//   onItemChange(entry) {
//     const { list } = this.state;
//     this.setState({
//       list: list.map(prevEntry => ({
//         text: prevEntry.text,
//         checked:  entry.text===prevEntry.text ? !prevEntry.checked : prevEntry.checked,
//       }))
//     });
//     this.props.handleItemChange(entry);
//   }


//   render() {
//     return (
//       <div>
//         {this.state.list.map((entry,index) => (
//           <ListItem
//             key={"list" + index}
//             value={entry.text}
//             checked={entry.checked}
//             onChange={this.onItemChange.bind(this, entry)}/>
//         )) }
//       </div>  
//     )
//   }

// }


// class App extends React.Component{
//   constructor(props) {
//     super(props);
//     this.handleItemChange = this.handleItemChange.bind(this);
//   }

//   handleItemChange(item) {
//     console.log(item);
//   }

//   render() {
//     return (
//       <List
//         list={[{ text: 1 },{ text: 2 }]}
//         handleItemChange={this.handleItemChange}
//       />
//     )
//   }

// }

// 4. 跨级组件通信
import PropTypes from 'prop-types'
class ListItem extends React.Component{
  static contextTypes = {
    color: PropTypes.string,
  };
  render() {
    const { value } = this.props;
    return (
      <li style={{background: this.context.color}}>
        <span>{ value}</span>
      </li>

    )
  }
}
class List extends React.Component{
  static childContextTypes = {
    color: PropTypes.string,
  };
  getChildContext() {
    return {
      color: 'red'
    }
  }
  render() {
    const { list } = this.props;
    return (
      <ul>
        {list.map((entry,index) => (
          <ListItem key={"list" + index} value={ entry.text}/>
        ))}
      </ul>
    )
    
  }
}


class App extends React.Component{
  handleItemChange(item) {
    console.log(item);
  }

  render() {
    return (
      <List
        list={[{ text: 1 },{ text: 2 }]}
      />
    )
  }

}

ReactDOM.render(<App/>, document.getElementById('root'))
