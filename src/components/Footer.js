import Contact from "./Contact"
import style from '@/styles/Footer.module.scss'


const Footer = () => (
    <footer className={style.footer}
        id="Contacts">
        <Contact />
    </footer>
)

export default Footer