
import Image from 'next/image'

import style from '@/styles/MyWork.module.scss'
import { Link } from 'react-scroll'
import { useRouter } from 'next/navigation'



const works = [
    {
        id: 1,
        imagesUrl: 'https://user-images.githubusercontent.com/45124215/255415774-cd0166b8-7dc6-43b9-bae6-1e7f032ea8cc.png',
        nameTitle: "next.js",
        title: 'Portfolio',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
        path: 'http://github.com/serzhios/portfolios'


    },
    {
        id: 2,
        imagesUrl: 'https://user-images.githubusercontent.com/45124215/255415774-cd0166b8-7dc6-43b9-bae6-1e7f032ea8cc.png',
        nameTitle: "next.js",
        title: 'Portfolio',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
        path: 'http://github.com/serzhios/portfolios'


    }
]
const MyWork = () => {
    // if (!works) {
    //     return null
    // }
    const router = useRouter()
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <section className={style.work} id="myWorks">
            <h2 className={style.workText}>My Works</h2>
            <div className={style.worksWrappers}>
                {works && works.map(({ id, title, path, nameTitle, text, imagesUrl, imageLoader }) => (
                    <div className={style.worksWrappersModule}>
                        <div id={id} className={style.worksWrapper}>

                            <div className={style.workWrap}>
                                <p className={style.worksTitle}>{title}</p>
                                <p className={style.worksNameTitle}>{nameTitle.toLocaleUpperCase()}</p>
                                <p className={style.worksText}>{text}</p>
                                <Link
                                    onClick={() => openInNewTab(path)}
                                    id={id}
                                    href={path}
                                    className={style.worksLink}
                                // passHref
                                // target="_blank"/
                                // rel="noopener"
                                // legacyBehavior
                                >
                                    {/* {title} */}





                                </Link>

                            </div>
                            <div className={style.worksImg}>
                                <Image className={style.imageUrl} onClick={() => openInNewTab(path)} href={path} src={imagesUrl} width={350} height={300} loader={imageLoader} quality={75} />

                            </div>
                        </div>


                    </div>
                ))}
            </div>

        </section>

    )
}

export default MyWork