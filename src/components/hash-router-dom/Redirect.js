import React, {Component} from 'react';
import {Consumer} from './Context';

class Redirect extends Component {
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
        {value=>value.push(to)}
      </Consumer>
    )
  };
}

export default Redirect;
