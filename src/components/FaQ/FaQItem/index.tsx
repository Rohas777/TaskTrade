import React, { useState } from 'react'

import styles from './FaQItem.module.scss'
import {ReactComponent as Arrow} from './../../../assets/image/arrow.svg'


const FaQ: React.FC = () => {

    const [isOpen, setOpen] = useState(false)

    return (
        <li onClick={() => setOpen(!isOpen)}>
            <div className={isOpen ? styles.header + ' ' + styles.open : styles.header}>
                <span>Question 1</span>
                <Arrow className={styles.arrow} />
            </div>
            <div className={isOpen ? styles.body + ' ' + styles.open : styles.body}>
                <p>Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Suspendisse sed nisi lacus sed viverra tellus in hac. Dictum non consectetur a erat nam at lectus. Risus quis varius quam quisque id diam vel quam. Gravida rutrum quisque non tellus orci ac auctor augue. Ante metus dictum at tempor commodo ullamcorper a lacus. Auctor eu augue ut lectus arcu bibendum at varius. Integer enim neque volutpat ac tincidunt. Nullam vehicula ipsum a arcu cursus. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat. Feugiat nisl pretium fusce id. Sed id semper risus in hendrerit gravida rutrum quisque non. Vitae turpis massa sed elementum tempus. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Ac turpis egestas maecenas pharetra convallis</p>
            </div>
        </li>
    )
}

export default FaQ