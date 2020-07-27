import React from 'react'
import { NavLink } from 'react-router-dom'
import Routes from '../Routes'
import { Menu, MenuButton } from 'menu-appco'

class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = { showMenu: false }
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu() {
        if (this.state.showMenu === true) {
            this.setState({ showMenu: false })
        } else {
            this.setState({ showMenu: true })
        }
    }

    render() {
        const NavBar = Routes.map(({ name, path }) => (
            <p className="nav-mobile" key={path} onClick={this.toggleMenu}>
                <NavLink to={path}>{name}</NavLink>
            </p>
        ))

        return (
            <>
                <div id="menu-button">
                    <MenuButton
                        style={{ bordercolor: '#2665C4' }}
                        barStyle={{ backgroundColor: '#2665C4' }}
                        onClick={this.toggleMenu}
                    />
                </div>
                <Menu
                    showMenu={this.state.showMenu}
                    closeHandler={this.toggleMenu}
                    style={{
                        backgroundColor: '#007fbf',
                        height: 'auto',
                        width: '95%',
                        margin: '0px 0px 0px 0px',
                    }}
                    closeStyle={{ color: 'white', fontSize: '25px' }}
                >
                    {NavBar}
                </Menu>
            </>
        )
    }
}

export default Nav
