import styles from './Login.module.css'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import { useLayoutEffect, useState } from 'react'

function LoginPage(props){
    return (
        <>
        <Navbar/>
        <Login/>
        </>
    )
}

function Login(props) {
    const [profiles, setProfiles] = useState([])
    useLayoutEffect(()=>{
        // fake fetch api
        
    },[])
    return (
        <div className={styles.profile_gate_wrapper}>
            <div className={styles.profile_gate}>
                <h1 className={styles.profile_gate_title}>Who is watching ?</h1>
                <div className={styles.profile_list}>
                    <ProfileIcon>Nam Anh</ProfileIcon>
                    <ProfileIcon>Thien Kim</ProfileIcon>
                    <ProfileIcon>Nam Anh</ProfileIcon>
                    <ProfileIcon>Nam Anh</ProfileIcon>
                    <ProfileIcon>Nam Anh</ProfileIcon>
                </div>              
                <ManagerButton>Profile manager</ManagerButton>
            </div>
        </div>
    )
}

function ProfileIcon({children, ...props}) {
    return (
        <div className= {styles.profile_wrapper}>
            <Link className={styles.profile_link} to='/login'>
                <img className={styles.profile__icon} title={children} src='https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-1/275937932_3223390564592461_8256715824947888335_n.jpg?stp=dst-jpg_p240x240&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=qS0hkKLlCNkAX88bjFB&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT_tY3Xque7obtohxftiWZxeMF9rWO0EKrrDVSkAXlZdAA&oe=62D40FD0' />
                <span className={styles.profile__name}>{children}</span>
            </Link>
        </div>
    )
}

function ManagerButton({children}){
    return (
        <Link className={styles.button} to='/'>{children}</Link>
    )
}

export default LoginPage