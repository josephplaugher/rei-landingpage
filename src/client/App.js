import React from 'react'
import { Route } from 'react-router-dom'
import EB from 'Util/EB'
import Request from './mainmenu/Request'
import Nav from './mainmenu/Nav'
import NavMobile from './mainmenu/NavMobile'
import Routes from './Routes'
import Logo from './Logo.png'
import 'scss/main.scss'
import 'scss/main-desktop.scss'
import 'scss/main-mobile.scss'

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="container">
                <div id="image-header-mobile">
                    <img src={Logo} alt="Appreciate Logo" id="image-mobile" />
                </div>
                <EB comp="Nave in App.js">
                    <div className="nav-mobile" id="nav-container-mobile">
                        <NavMobile />
                    </div>
                </EB>
                <div id="image-header-desktop">
                    <img src={Logo} alt="Appreciate Logo" id="image-desktop" />
                </div>
                <EB comp="Nave in App.js">
                    <div id="nav-container">
                        <Nav />
                    </div>
                </EB>

                <EB comp="Router in App.js">
                    <div id="content">
                        {Routes.map(
                            ({ path, exact, component: C, ...rest }) => (
                                <Route
                                    key={path}
                                    path={path}
                                    exact={exact}
                                    render={props => <C {...props} {...rest} />}
                                />
                            )
                        )}
                    </div>
                </EB>
                <EB comp="Request in App">
                    <div id="request-box">
                        <Request />
                    </div>
                </EB>
            </div>
        )
    }
}

export default App
