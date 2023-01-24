import classes from './Header.module.css';
import { Fragment } from 'react';
import Logo from '../Imagenes/Logo.jpg';

const Header = () => {
    return (
        <Fragment>
            <div className={classes.img}><img src = {Logo} alt = 'ENBOT NICARAGUA'></img></div>
            <div className={classes.header}></div>
            <div className={classes.header2}>
                    <button className={classes.button}>Home</button>
                    <button className={classes.button}>About us</button>
                    <button className={classes.button}>Service</button>
                    <button className={classes.button}>Contact</button>
                </div>

        </Fragment>
        
    )
}
export default Header;