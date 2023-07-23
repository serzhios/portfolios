import style from "@/styles/Footer.module.scss";
import Image from 'next/image'
// import { contacts } from "../pages/api/data/contacts";

import Link from 'next/link'


const contacts = [
    {
        'id': 1,
        'imageUrl': '/mail.svg',
        'name': 'mail',
        'nameUrl': 'mailto:studiors39@gmail.com'

    },
    {
        'id': 2,
        'imageUrl': '/vk.svg',
        'name': 'vkontakte',
        'nameUrl': 'https://vk.com/id9782434'

    },
    {
        'id': 3,
        'imageUrl': '/telegram.svg',
        'name': 'telegramm',
        'nameUrl': 'https://tglink.ru/serzh_sedoy'


    },
    // {
    //     'id': 4,
    //     'imageUrl': '/scss.png',
    //     'name': 'Viber',
    //     'nameUrl': '89632995828'

    // },
    // {
    //     'id': 5,
    //     'imageUrl': '/git.png',
    //     'name': 'Watsup',
    //     'nameUrl': '89632995828'


    // },
    // {
    //     'id': 6,
    //     'imageUrl': '/react.png',
    //     'name': 'React JS',

    // },
    // {
    //     'id': 7,
    //     'imageUrl': '/figma.png',
    //     'name': 'Figma',

    // }
]

const Contact = () => {

    // if (!contacts) {
    //     return null
    // }

    return (
        <section className={style.contact}>
            <div className={style.contacts}>
                <div className={style.contactsLogo}>
                    <Image src="/logo.png" width={165} height={39} />
                    <p className={style.contactsText}>
                        If you liked my work and you need me, I'm ready to talk to you.
                    </p>

                </div>
            </div>


            <div className={style.contactsWrappers}>
                <div className={style.contactwrapTitle}>
                    Сontacts
                </div>
                <div className={style.contactWrapLink}>
                    {contacts.map(({ id, imageUrl, name, nameUrl }) => (
                        // <div className={style.contactsWrappersModule}>
                        //     <div key={id} className={style.contactsWrapper}>

                        //     </div>
                        // </div>
                        <Link id={id} href={nameUrl} className={style.wrapLink}>
                            <Image src={imageUrl} width={26} height={26} />
                            {name}
                        </Link>
                    ))}

                </div>



            </div>
        </section>

    )
}

export default Contact