import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Hero from '../components/Hero/Hero'
import Portfolio from '../components/Portfolio/Portfolio'
import Skills from '../components/Skills/Skills'
import Layout from '../components/Layout/Layout';

export default function Home() {
  return (
      <Layout title="Portfolio">
          <main>
              <Hero />
              <About />
              <Skills />
              <Portfolio />
              <Contact />
          </main>
      </Layout>
  )
}
