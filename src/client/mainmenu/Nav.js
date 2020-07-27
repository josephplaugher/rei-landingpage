import React from 'react'
import { NavLink } from 'react-router-dom'
import Routes from './../Routes'

class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const NavBar = Routes.map(({ name, path }) => (
            <p className="nav" key={path}>
                <NavLink activeStyle={{ fontWeight: 'bold' }} to={path}>
                    {name}
                </NavLink>
            </p>
        ))

        return NavBar
    }
}

export default Nav
