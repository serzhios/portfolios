import React, { useState, useEffect } from 'react'
// import { Link, animateScroll as scroll } from "react-scroll";
import Scroll from 'react-scroll'
import { useRouter } from 'next/router'
import Link from 'next/link'
import style from "@/styles/Navbar.module.scss"
import Image from 'next/image'

const navigation = [
    { id: 1, title: "About me", path: "/" },
    { id: "/#mySkills", title: "Skills", path: '/#mySkills' },
    { id: "/#myWorks", title: "Pet-projects", path: "/#myWorks" },
    { id: "/#Contacts", title: "Contacts", path: "/#Contacts" },
]

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const ScrollLink = Scroll.ScrollLink
    const { pathname } = useRouter()
    const myRef = React.createRef();

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener("smooth", handleShadow);
    }, []);

    return (
        <nav className={style.nav}>
            <div className={style.logo}>
                <Image src="/logo.png" width={165} height={39} />
                {/* <code><span>&lt;</span>Web<span>R</span>um<span>&gt;</span></code> */}
            </div>
            <div className={style.link}>
                {navigation.map(({ id, title, path }) => (
                    <Link id={id}
                        href={path}
                        className={style.aLink}
                        passHref
                        legacyBehavior
                    >
                        <a >{title}</a>

                    </Link>

                ))}



            </div>
        </nav >
    )
}

export default Navbar