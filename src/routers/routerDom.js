import React, {Component} from 'react';
import {
    //BrowserRouter as Router,
    HashRouter as Router,
    Route,
    Link,
    Redirect,
    Switch
} from '../components/hash-router-dom';

import Home from '../pages/Home';
import Detail from '../pages/Detail';
import List from '../pages/List';

class BasicRoute extends Component {
    render() {
        return (
        <div>
            <Router>
                <ul>
                    <li><Link to="/home">主页</Link></li>
                    <li><Link to="/detail">热门</Link></li>
                    <li><Link to="/list">专栏</Link></li>
                </ul>
                <div>
                    <Switch>
                        <Route exact path='/home' component={Home} />
                        <Route path='/detail' component={Detail} />
                        <Route path='/list' component={List} />
                        <Redirect to='/home' />
                    </Switch>
                </div>
            </Router>
        </div>
        )
    }
}

export default BasicRoute;