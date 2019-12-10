import React from 'react';
import TodoItem from './toItem'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list : [
        "one",
        "two",
        "three"
      ],
      inVal : ""
    }
  }


  Add() {
   this.setState({
     list:[...this.state.list, this.state.inVal],
     inVal : ""
   })
  }

  Del(index) {
    const ll = [...this.state.list];
    ll.splice(index, 1);
    this.setState({
      list : ll 
    })

    //不建议使用这种
    // this.state.list.splice(index, 1);
    // this.setState({
    //   list: this.state.list
    // })
  }

  InputValue(e) {
    this.setState({
      inVal : e.target.value
    })
  }

  todoItems() {
    return(
      this.state.list.map((item,index)=>{
        // return <li>{item} <button onClick={this.Del.bind(this, index)}>del</button></li>
          return <TodoItem del={this.Del.bind(this)} content={item} index={index}/>
        })
    );
    
  }
  render() {
    return (
      <React.Fragment>
        <input value={this.state.inVal} onChange={this.InputValue.bind(this)}/>
        <button onClick={this.Add.bind(this)}>add</button>
        <div>
          <ul>
            {this.todoItems()}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
