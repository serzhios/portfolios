import React from 'react'

import style from '@/styles/About.module.scss'
import Image from 'next/image'
import profilePic from "../../public/me.png";

const About = () => {
    return (
        <section className={style.about} id="about">
            <div className={style.aboutTe}>
                <div className={style.aboutText}>

                    <h1 className={style.h1}>Sergey Rumyantsev</h1>
                    <h2 className={style.h2}>Frontend Developer</h2>
                    <p className={style.p}>Frontend developer looking for ideas and<React.Fragment><br /></React.Fragment> projects for himself and  others</p>
                </div>

                <div className={style.aboutImg} >
                    <Image className={style.aboutImages} src={profilePic} width={629} height={575} />
                </div>
            </div>
            <div className={style.aboutTitle}>
                <p>
                    A few years ago, I became interested in developing websites and interfaces. Since then, I have been steadily improving my skills. Now I am developing websites and web applications to order or for myself.
                </p>

            </div>


        </section >
    )
}

export default About