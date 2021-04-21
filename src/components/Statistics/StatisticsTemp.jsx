import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const randomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

const Statistics = ({ title, stats }) => {
    const markup = stats.map(({ id, label, percentage }) => (

        <li className={styles.item} key={id} style={{backgroundColor: randomColor()}}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
        </li>));

    return (<section className={styles.statistics}>
        {{ title } && <h2 className={styles.title}>{title}</h2>}
        <ul className={styles.statList}>
            {markup}
        </ul>
    </section>)
}

Statistics.defaultProps = {
    percentage: "no info",
}

Statistics.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
    percentage: PropTypes.number,
}

export default Statistics;