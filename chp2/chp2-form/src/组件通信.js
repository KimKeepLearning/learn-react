import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 子组件向父组件通信
class ListItem extends React.Component{
  static defaultProps = {
    text: "",
    checked: false
  };
  render() {
    return (
      <li>
        <input type="checkbox" checked={this.props.checked} onChange={this.props.onChange} />
        <span>{ this.props.value}</span>
      </li>
    )
  }
}

class List extends React.Component{
  static defaultProps = {
    list: [],
    handleItemChange: {}
  }

  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list.map(entry => ({
        text: entry.text,
        checked: entry.checked
      }))
    }
  }

  onItemChange(entry) {
    const { list } = this.state;
    this.setState = ({
      list: list.map(prevEntry => ({
        text: prevEntry.text,
        checked: prevEntry.text === entry.text ? !prevEntry.checked : prevEntry.checked,
      }))
    });
    this.props.handleItemChange(entry);
  }


  render() {
    return (
      <div>
        {this.state.list.map((entry,index) => (
          <ListItem
            key={"list" + index}
            value={entry.text}
            checked={entry.checked}
            onChange={this.onItemChange.bind(this, entry)}/>
        )) }
      </div>  
    )
  }

}


class App extends React.Component{
  constructor(props) {
    super(props);
    this.handleItemChange = this.handleItemChange.bind(this);
  }

  handleItemChange(item) {
    console.log(item);
  }

  render() {
    return (
      <List
        list={[{ text: 1 },{ text: 2 }]}
        handleItemChange={this.handleItemChange}
      />
    )
  }

}


ReactDOM.render(<App/>, document.getElementById('root'))
