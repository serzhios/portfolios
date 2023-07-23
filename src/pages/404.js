import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Heading from '@/components/Heading'
import style from '@/styles/404.module.scss'


const Error = () => {
    const router = useRouter()

    // useEffect(() => {
    //     setTimeout(() => {
    //         router.push('/')
    //     }, 3000);
    // }, [router])
    return (
        <div className={style.page_404}>
            {/* <Heading text="404" />
            <Heading tag="h2" text="Какая то ошибка" /> */}

            <div className={style.container}>
                <div className={style.row}>
                    <div className={style.colsm12}>
                        <div className={style.colsm10}>

                            <div className={style.four_zero_four_bg}>


                            </div>
                            <h1 className={style.textcenter}>404</h1>


                            {/* <div className={style.contant_box_404}>
                                <h3 className={style.h2}>
                                    Look like you're lost
                                </h3>

                                <p>the page you are looking for not avaible!</p>

                                <a href="" className={style.link_404}>Go to Home</a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Error