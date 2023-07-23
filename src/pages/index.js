import Heading from '@/components/Heading'
import About from '@/components/About'
import styles from '@/styles/Home.module.scss'
import MySkills from '@/components/MySkills'
import MyWork from '@/components/MyWork'



export const getStaticProps = async () => {
  const response = await fetch('http:/localhost:3000/api/skills/')
  const data = await response.json()
  if (!data) {
    return {
      notFound: true
    }
  }
  return {
    props: { skills: data }
  }
}

const Home = ({ skills }) => (
  <div className={styles.wrapper}>
    <About />
    <MySkills skills={skills} />
    <MyWork />
    {/* <Heading text="hello" /> */}

  </div>

)
export default Home