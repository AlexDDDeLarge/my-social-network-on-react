import React from 'react';
import styles from './ContactItem.module.css'

const ContactItem = ({source, link}) => {
  return <div className={styles.item}>
    <span className={styles.title}>{source}</span>
    <span className={styles.link}>
      <a href={link}>{link}</a>
    </span>
  </div>
}

export default ContactItem;