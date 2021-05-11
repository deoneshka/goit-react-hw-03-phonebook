import React from 'react';
import styles from './ContactList.module.css'

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul className={styles.list}>
            {
                contacts.map(({ id, name, number }) =>
                    <li className={styles.item} key={id}>{name}: {number}
                        <button className={styles.button} type='button' onClick={() => onDeleteContact(id)}>Delete</button>
                    </li>
                )
            }
        </ul>
    )
}

export default ContactList;