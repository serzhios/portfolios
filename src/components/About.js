import style from '@/styles/About.module.scss'
import Image from 'next/image'
import profilePic from "../../public/me.png";

const About = () => {
    return (
        <section className={style.about}>
            <div className={style.aboutText}>
                <div className={style.aboutTitle}></div>
                <h1 className={style.h1}>Sergey Rumyantsev</h1>
                <h2 className={style.h2}>Frontend Developer</h2>
                <p className={style.p}>Frontend developer looking for ideas and projects for himself and others</p>
            </div>

            <div className={style.aboutImg}>
                <Image src={profilePic} />
            </div>

        </section>
    )
}

export default About