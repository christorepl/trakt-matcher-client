import React from 'react'
import { Route, Redirect, Link, withRouter } from 'react-router-dom'
import Authorization from './Components/Authorization/Authorization'
import Home from './Components/Home/Home'

class App extends React.Component {
    render() {
        return(
            <>
                <Route exact path="/">
                    <Redirect to="/home"/>
                </Route>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/authorization" component={Authorization}/>
            </>
        )
    }
}

export default withRouter(App)