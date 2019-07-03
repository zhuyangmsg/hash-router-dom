import React, {Component} from 'react';
import {Consumer} from './Context';
import pathToRegexp from 'path-to-regexp';

class Route extends Component {
  constructor(props){
    super(props);
    this.state={
      list:[]
    }
  };
  render() {
    let {path} = this.props;
    let Component = this.props.component;
    let exact = false; //是否精确匹配
    return (
      <Consumer>
        {value=>pathToRegexp(path,[],{end:exact}).test(value.pathname)?<Component history={value}/>:null}
      </Consumer>
    )
  };
}

export default Route;
