import React from "react";

class TodoItem extends React.Component {

  constructor(props) {
    super(props);
    this.Del = this.Del.bind(this);
  
  }

  Del() {
    const { del, index } = this.props;
    
    del(index);
  }

  render() {
    const {  index , content} = this.props
    return (
    <li onClick={this.Del}>{content} {index}</li>
    )
  }
}

export default TodoItem;
