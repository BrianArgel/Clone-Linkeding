import React from 'react'
import { Avatar } from '@material-ui/core'
import './styles.css'
const HeaderIcons = ({ Icon, title, text, avatar }) => {
    return (
        <div className="header__icons">
            {Icon && <Icon className="header__box" />}
            {avatar && <Avatar className="header__box" />}
            {title ? <h3>{title}</h3> : <p className="header__primium">{text}</p>}
        </div>
    )
}

export default HeaderIcons
