import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
    </Layout>
  )
}
