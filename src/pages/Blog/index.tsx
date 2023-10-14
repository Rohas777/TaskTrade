import React from 'react'

import styles from './Blog.module.scss'

import Title from '../../components/Title'
import ArticleCard from '../../components/ArticleCard'
import FaQ from '../../components/FaQ'

const Blog: React.FC = () => {
    return (
        <div className={styles.blog}>
            <div className={styles.container}>
                <Title>About Us</Title>
                <div className={styles.posts}>
                    <ArticleCard big />
                    <ArticleCard big />
                    <ArticleCard big />
                </div>
            </div>
        </div>
    )
}

export default Blog