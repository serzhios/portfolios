

import Image from 'next/image'
import { skills } from "../pages/api/data/skills";
import style from "@/styles/MySkills.module.scss"


const MySkills = ({ skills }) => {

    if (!skills) {
        return null
    }
    return (
        <section className={style.skills}
            id="mySkills">
            <h2 className={style.skillsText}>My Skills</h2>
            <div className={style.skillsWrappers}>
                {skills && skills.map(({ id, name, imageUrl }) => (

                    <div className={style.skillsWrappersModule}>
                        < div key={id} className={style.skillsWrapper}>


                            <Image src={imageUrl} width={120} height={128} />
                            {/* <div>
        {image}
    </div> */}
                            <p className={style.skillsTitle}>
                                {name}
                            </p>

                        </div >

                    </div>

                ))}
            </div>

        </section >
    )
}

console.log(MySkills)

export default MySkills

// "extends": [
//     "plugin:react/recommended",
//     "next/core-web-vitals",
//     "airbnb",

//     "plugin:@next/next/recommended",
//     "prettier"
// ],Ё