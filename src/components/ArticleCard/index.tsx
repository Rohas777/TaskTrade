import React from 'react'

import styles from './ArticleCard.module.scss'
import {ReactComponent as Eye} from './../../assets/image/eye.svg'
import { Link } from 'react-router-dom'

type ArticleCardProps = {
    small?: boolean,
    big?: boolean,
}

const ArticleCard: React.FC<ArticleCardProps> = ({small, big}) => {

    const footer = (<div className={styles.footer}>
        <span>25 March</span>
        <div className={styles.views}>
            <Eye/>
            <span>1489</span>
        </div>
    </div>)

    return (
        <Link to='/posts/:id' className={small ? styles.card : styles.cardBig}>
            <div className={styles.body}>
                <div className={styles.image}><img src="/img/card.png" alt="Article" /></div>
                {big && footer}
                <p className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                {big && <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed elementum tempus egestas sed.</p>}
            </div>
            {small && footer}
        </Link>
    )
}

export default ArticleCard