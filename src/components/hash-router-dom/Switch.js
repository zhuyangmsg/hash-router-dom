import React, {Component} from 'react';
import {Consumer} from './Context';
import pathToRegexp from 'path-to-regexp';

class Switch extends Component {
  constructor(props){
    super(props);
    this.state={
      status:false
    }
  };
  render() {
    let exact = false; //是否精确匹配
    return (
      <Consumer>
        {value=>{
          let children = this.props.children;
          for(var i=0;i<children.length;i++){
            let path = children[i].props.path || "";
            if(pathToRegexp(path,[],{end:exact}).test(value.pathname)){
              return children[i];
            }
          }
          return null;
        }}
      </Consumer>
    )
  };
}

export default Switch;
