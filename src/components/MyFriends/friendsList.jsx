import React from 'react';
import PropTypes from 'prop-types';
import styles from './friendList.module.css';


const FriendList = ({ friends }) => {
    const items = friends.map(({ avatar, name, isOnline, id }) => {
        return (<li className={styles.item} key={id}>
            <span className={ isOnline ? styles.online : styles.offline}></span>
            <img className={styles.avatar} src={avatar} alt={name} width="48" />
            <p className={styles.name}>{ name }</p>
        </li>)
    })
    return (<ul className={styles.friendList}>
        {items}
        </ul> );
}

FriendList.defaultProps = {
    avatar: './images/anonymousavatar.png',
    isOnline: false,
}

FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.any,
    id: PropTypes.number.isRequired,
}

export default FriendList;