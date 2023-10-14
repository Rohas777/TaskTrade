import React, { useEffect } from 'react'

import {ReactComponent as Eye} from './../../assets/image/eye.svg'
import styles from './FullPost.module.scss'

const FullPost: React.FC = () => {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return (
        <div className={styles.fullpost}>
        <div className={styles.hero}>
                <span className={styles.blackout}></span>
                <img src="/img/card.png" alt="Post Preview" />
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</h1>
                <div className={styles.footer}>
                    <span>25 March</span>
                    <div className={styles.views}>
                        <Eye/>
                        <span>1489</span>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <h2>Header 1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed elementum tempus egestas sed. Cum sociis natoque penatibus et. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Tempor nec feugiat nisl pretium fusce id velit ut tortor. Enim facilisis gravida neque convallis a cras semper auctor. Mattis enim ut tellus elementum sagittis vitae et leo. Nisi lacus sed viverra tellus in hac. Tempor nec feugiat nisl pretium fusce id. Sem et tortor consequat id porta nibh venenatis cras sed. Neque vitae tempus quam pellentesque.</p>
                <p>Tortor dignissim convallis aenean et tortor. Tortor condimentum lacinia quis vel eros donec ac. Massa vitae tortor condimentum lacinia. Quam vulputate dignissim suspendisse in est ante in. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Euismod lacinia at quis risus sed vulputate odio ut. Nisi porta lorem mollis aliquam ut porttitor leo a. Sed cras ornare arcu dui vivamus arcu. Convallis aenean et tortor at risus viverra. Justo eget magna fermentum iaculis eu non diam phasellus. Ullamcorper eget nulla facilisi etiam dignissim diam quis. Nunc sed id semper risus in hendrerit. Eu consequat ac felis donec. Urna cursus eget nunc scelerisque viverra mauris in. Aenean pharetra magna ac placerat. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Quam elementum pulvinar etiam non quam. Habitant morbi tristique senectus et netus et malesuada fames ac.</p>
                <p>Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Suspendisse sed nisi lacus sed viverra tellus in hac. Dictum non consectetur a erat nam at lectus. Risus quis varius quam quisque id diam vel quam. Gravida rutrum quisque non tellus orci ac auctor augue. Ante metus dictum at tempor commodo ullamcorper a lacus. Auctor eu augue ut lectus arcu bibendum at varius. Integer enim neque volutpat ac tincidunt. Nullam vehicula ipsum a arcu cursus. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat. Feugiat nisl pretium fusce id. Sed id semper risus in hendrerit gravida rutrum quisque non. Vitae turpis massa sed elementum tempus. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Ac turpis egestas maecenas pharetra convallis.</p>
                <h2>Header 2</h2>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed elementum tempus egestas sed. Cum sociis natoque penatibus et. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Tempor nec feugiat nisl pretium fusce id velit ut tortor. Enim facilisis gravida neque convallis a cras semper auctor. Mattis enim ut tellus elementum sagittis vitae et leo. Nisi lacus sed viverra tellus in hac. Tempor nec feugiat nisl pretium fusce id. Sem et tortor consequat id porta nibh venenatis cras sed. Neque vitae tempus quam pellentesque.</li>
                    <li>Tortor dignissim convallis aenean et tortor. Tortor condimentum lacinia quis vel eros donec ac. Massa vitae tortor condimentum lacinia. Quam vulputate dignissim suspendisse in est ante in. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Euismod lacinia at quis risus sed vulputate odio ut. Nisi porta lorem mollis aliquam ut porttitor leo a. Sed cras ornare arcu dui vivamus arcu. Convallis aenean et tortor at risus viverra. Justo eget magna fermentum iaculis eu non diam phasellus. Ullamcorper eget nulla facilisi etiam dignissim diam quis. Nunc sed id semper risus in hendrerit. Eu consequat ac felis donec. Urna cursus eget nunc scelerisque viverra mauris in. Aenean pharetra magna ac placerat. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Quam elementum pulvinar etiam non quam. Habitant morbi tristique senectus et netus et malesuada fames ac.</li>
                    <li>Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Suspendisse sed nisi lacus sed viverra tellus in hac. Dictum non consectetur a erat nam at lectus. Risus quis varius quam quisque id diam vel quam. Gravida rutrum quisque non tellus orci ac auctor augue. Ante metus dictum at tempor commodo ullamcorper a lacus. Auctor eu augue ut lectus arcu bibendum at varius. Integer enim neque volutpat ac tincidunt. Nullam vehicula ipsum a arcu cursus. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat. Feugiat nisl pretium fusce id. Sed id semper risus in hendrerit gravida rutrum quisque non. Vitae turpis massa sed elementum tempus. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Ac turpis egestas maecenas pharetra convallis.</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed elementum tempus egestas sed. Cum sociis natoque penatibus et. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Tempor nec feugiat nisl pretium fusce id velit ut tortor. Enim facilisis gravida neque convallis a cras semper auctor. Mattis enim ut tellus elementum sagittis vitae et leo. Nisi lacus sed viverra tellus in hac. Tempor nec feugiat nisl pretium fusce id. Sem et tortor consequat id porta nibh venenatis cras sed. Neque vitae tempus quam pellentesque.</p>
            </div>
        </div>
    )
}

export default FullPost