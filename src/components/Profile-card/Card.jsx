import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => {
    const { followers, views, likes } = stats;

  return (<div className={styles.profile}>
  <div className={styles.description}>
    <img
      src={avatar}
      alt="Аватар пользователя"
      className={styles.avatar}
    />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
  </div>

  <ul className={styles.stats}>
    <li className={styles.item}>
      <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>{followers}</span>
    </li>
    <li className={styles.item}>
      <span className={styles.label}>Views</span>
      <span className={styles.quantity}>{views}</span>
    </li>
    <li className={styles.item}>
      <span className={styles.label}>Likes</span>
      <span className={styles.quantity}>{likes}</span>
    </li>
  </ul>
</div>)
};

Profile.defaultProps = {
    avatar: './images/anonymousavatar.png',
}

Profile.propTypes = {
  avatar: PropTypes.string,
  tag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: {
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
    }
}


export default Profile;