import React from 'react'

import styles from './ArticleCard.module.scss'
import {ReactComponent as Eye} from './../../assets/image/eye.svg'
import { Link } from 'react-router-dom'

type ArticleCardProps = {
    small?: boolean,
    big?: boolean,
}

const ArticleCard: React.FC<ArticleCardProps> = ({small, big}) => {

    return (
        <Link to='/full-post' className={styles.card}>
            <div className={styles.body}>
                <img src="/img/card.png" alt="Article" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
            <div className={styles.footer}>
                <span>25 March</span>
                <div className={styles.views}>
                    <Eye/>
                    <span>1489</span>
                </div>
            </div>
        </Link>
    )
}

export default ArticleCard