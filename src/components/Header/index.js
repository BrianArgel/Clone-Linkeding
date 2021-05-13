import React from 'react'
import HeaderIcons from './HeaderIcons'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AppsIcon from '@material-ui/icons/Apps';
import SearchIcon from '@material-ui/icons/Search';
import './styles.css';
const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <LinkedInIcon className="logo" />

                <div className="header__buscar">
                    <SearchIcon />
                    <input type="text"
                        placeholder="buscar"
                    />
                </div>
                <HeaderIcons Icon={HomeIcon} title="home" />
                <HeaderIcons Icon={SupervisorAccountIcon} title="mi red" />
                <HeaderIcons Icon={BusinessCenterIcon} title="Empleos" />
                <HeaderIcons Icon={ChatIcon} title="Mensajes" />
                <HeaderIcons Icon={NotificationsActiveIcon} title="Notificaciones" />
                <HeaderIcons avatar title="Yo" />
                <HeaderIcons Icon={AppsIcon} title="Productos" />
                <HeaderIcons text="Prueba primium gratis durante 1 mes" />
                <HeaderIcons />
            </nav>
        </header>
    )
}

export default Header
