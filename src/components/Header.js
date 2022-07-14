import {useEffect, useRef, useState} from 'react'

import {Link} from 'react-router-dom'
import styles from './Header.module.css'


function Header(props){
    return (
        <div className={styles.header}>
            <Link className={styles.header_logo} to='#'>
                <img alt='logo' src='logo.png'></img>
            </Link>
            {!props.disable &&
             <HeaderMenu/>                
            }

        </div>
    )
}

function HeaderMenu(){

    const options = useRef([
        'Trang chủ',
        'Phim T.Hình',
        'Phim',
        'Mới & Phổ biến',
        'Danh sách của tôi'
    ]).current
    const [option, setOption] = useState(0)

    useEffect(()=>{
        
    }, [option])

    return (
        <ul className={styles.header_menu}>
            {options.map((op, index) => {
                return (
                    <li
                        key={index}
                        className={`${styles.menu_option} ${(index==option)&&styles.active}`}
                        onClick={()=>{
                            if (index != option){
                                setOption(index)
                            }
                        }}
                    >
                       {op} 
                    </li>
                )
            })}
        </ul>
    )
}

export default Header