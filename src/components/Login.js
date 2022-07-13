import styles from './Login.module.css'
import {Link} from 'react-router-dom'
import Header from './Header'
import { useLayoutEffect, useState } from 'react'

function LoginPage(props){
    return (
        <>
        <Header />
        <Login/>
        </>
    )
}

function Login(props) {
    const [profiles, setProfiles] = useState([])
    useLayoutEffect(()=>{
        // fake fetch api
        setProfiles([
            {
                id: 1,
                name: 'Nam Anh',
                iconID: 2
            },
            {
                id: 2,
                name: 'Nhã',
                iconID: 4
            },            {
                id: 3,
                name: 'Thien Kim',
                iconID: 1
            },            {
                id: 4,
                name: 'Mai Thy',
                iconID: 3
            },            {
                id: 5,
                name: 'Children',
                iconID: 2
            },
        ])
    },[])
    return (
        <div className={styles.profile_gate_wrapper}>
            <div className={styles.profile_gate}>
                <h1 className={styles.profile_gate_title}>Who is watching ?</h1>
                <div className={styles.profile_list}>
                    {profiles.map((profile) => <ProfileIcon key={profile.id} children={profile.name}/>)}
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
                <img alt={children} className={styles.profile__icon} title={children} src='https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-1/275937932_3223390564592461_8256715824947888335_n.jpg?stp=dst-jpg_p240x240&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=qS0hkKLlCNkAX88bjFB&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT_tY3Xque7obtohxftiWZxeMF9rWO0EKrrDVSkAXlZdAA&oe=62D40FD0' />
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