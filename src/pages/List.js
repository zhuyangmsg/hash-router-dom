import React, {Component} from 'react';

class List extends Component {
  constructor(props){
    super(props);
    this.state={
      list:[]
    }
  };
  render() {
    return (
      <div>
        List
      </div>
    )
  };
}

export default List;
