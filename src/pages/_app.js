import Layout from '@/components/Layout'


import '@/styles/globals.scss'

const App = ({ Component, pageProps }) => (
  <Layout>
    <main>

      <Component {...pageProps} />
    </main>
  </Layout>
)

export default App