import { useRouter } from 'next/router'
import Link from 'next/link'
import style from "@/styles/Navbar.module.scss"
import Image from 'next/image'

const navigation = [
    { id: 1, title: "About me", path: "/" },
    { id: 2, title: "Skills", path: "/" },
    { id: 3, title: "Pet-projects", path: "/" },
    { id: 4, title: "Contacts", path: "/" },
]

const Navbar = () => {
    const { pathname } = useRouter()
    return (
        <nav className={style.nav}>
            <div className={style.logo}>
                <Image src="/logo.png" width={165} height={39} />
            </div>
            <div className={style.link}>
                {navigation.map(({ id, title, path }) => (
                    <Link id={id} href={path} className={pathname === path ? style.active : null}>
                        {title}
                    </Link>

                ))}



            </div>
        </nav>
    )
}

export default Navbar