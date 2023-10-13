import React from 'react'

import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {

    return (
        <header>
            <div className={styles.container}>
                <nav className={styles.links}>
                    <div className={styles.left}>
                        <Link className={styles.logo} to='/'>TR</Link>
                        <Link to='/tasks'>Tasks</Link>
                        <Link to='/freelancers'>Freelancers</Link>
                        <Link to='/posts'>Blog</Link>
                    </div>
                    <div className={styles.right}>
                        <Link to='/sign-up'>Sign Up</Link>
                        <Link className={styles.button} to='/sign-in'><span>Sign In</span></Link>
                    </div>
                </nav>
            </div >
        </header >
    )
}

export default Header