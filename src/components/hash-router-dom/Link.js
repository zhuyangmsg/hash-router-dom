import React, {Component} from 'react';
import {Consumer} from './Context';

class Link extends Component {
  constructor(props){
    super(props);
    this.state={
      list:[]
    }
  };
  render() {
    let {to} = this.props;
    return (
      <Consumer>
        {value=><a onClick={()=>value.push(to)}>{this.props.children}</a>}
      </Consumer>
    )
  };
}

export default Link;
