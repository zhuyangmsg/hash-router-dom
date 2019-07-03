import React, {Component} from 'react';

class Detail extends Component {
  constructor(props){
    super(props);
    this.state={
      list:[]
    }
  };
  render() {
    return (
      <div>
        <div onClick={()=>this.props.history.push("/home")}>Detail1</div>
        <div onClick={()=>this.props.history.push("/home")}>Detail2</div>
        <div onClick={()=>this.props.history.push("/home")}>Detail3</div>
      </div>
    )
  };
}

export default Detail;
