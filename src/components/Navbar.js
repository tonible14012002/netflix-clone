import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'


function Navbar(props){
    return (
        <div className={styles.header}>
            <Link className={styles.header_logo} to='#'></Link>
            <HeaderMenu/>
        </div>
    )
}

function HeaderMenu(){
    return (
        <ul>
            <li>asdas</li>
            <li>asdas</li>
        </ul>
    )
}

export default Navbar