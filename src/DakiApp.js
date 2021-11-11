import React from 'react'
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import { LoginScreen } from './components/auth/LoginScreen'
import { DakiScreen } from './components/daki/DakiScreen'
import { AppRouter } from './routers/AppRouter'

export const DakiApp = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/login' component={ LoginScreen }/>
                    <Route exact path='/' component={ DakiScreen }/>

                    <Redirect to='/' />
                </Switch>
            </div>
        </Router>
    )
}
