import React, {Component} from 'react';
import {Provider} from './Context';
class BrowserRouter extends Component {
    constructor(props){
        super(props);
        this.state = {
            history:{
                pathname:window.location.pathname,
                push:(to)=>{
                    console.log("pushState:",this.pushState);
                    this.pushState(null,null,to) 
                }
            },
            queue:[]
        }
        this.pushState = this.pushState.bind(this)
    }
    pushState = (state="",title="",path="")=>{
        let queue  = this.state.queue
        let {history}  = this.state 
        let historyInfo ={state,title,path}
        queue.push( historyInfo)
        this.setState({
         ...this.state,
         history:{
           ...history,
           pathname:path,
         },
         queue,
       })
       window.history.pushState(historyInfo,"",path)
    }
    componentDidMount(){
        window.addEventListener("popstate",(e)=>{
            this.setState({
                ...this.state,
                history:{
                    ...this.state.history,
                    pathname: e.state.path
                },
                queue:this.state.queue,
            })
        })
    }
    render(){
        let {history} = this.state;
        return (
            <Provider value={history}>
                {this.props.children}
            </Provider>
        )
    }
}
export default BrowserRouter;