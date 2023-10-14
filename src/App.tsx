import React from 'react';
import { Routes, Route } from 'react-router-dom';

import styles from './App.module.scss'
import Header from './components/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';
import FullPost from './pages/FullPost';


const App: React.FC = () => {

    return (
        <div className={styles.App}>
            <Header />
                <div className={styles.wrapper}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/posts' element={<Blog />} />
                        <Route path='/posts/:id' element={<FullPost />} />
                    </Routes>
                </div>
            <footer></footer>
        </div>
    );
}

export default App;
