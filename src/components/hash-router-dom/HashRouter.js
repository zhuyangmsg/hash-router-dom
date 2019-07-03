import React, {Component} from 'react';
import {Provider} from './Context'

class HashRouter extends Component {
  constructor(props){
    super(props);
    this.state={
      history:{
        pathname:window.location.hash.slice(1) || "/",
        push(path){
            window.location.hash=path
        }
      }
    }
  };
  render() {
    let {history} = this.state;
    return (
      <Provider value={history}>
        {this.props.children}
      </Provider>
    )
  };
  componentDidMount(){
      const _that = this;
      let {history} = this.state;
      window.addEventListener("hashchange",function(data){
        _that.setState({
            history:{
                ...history,
                pathname:window.location.hash.slice(1)
            }
        })
      })
  }
}

export default HashRouter;
