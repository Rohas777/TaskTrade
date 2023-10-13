import React from 'react'

import styles from './FaQ.module.scss'
import FaQItem from './FaQItem'


const FaQ: React.FC = () => {

    return (
        <ul className={styles.faq}>
            <FaQItem />
            <FaQItem />
            <FaQItem />
            <FaQItem />
            <FaQItem />
        </ul>
    )
}

export default FaQ