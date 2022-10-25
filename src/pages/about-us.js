import Head from 'components/Head'
import aboutUsData from '../../data/about-us'
import PageContent from 'components/PageContent'
import { AboutUsHero } from 'blocks'

const AboutUs = () => {
  const { meta, hero } = aboutUsData
  return (
    <>
      <Head meta={meta} />
      <PageContent>
        <AboutUsHero hero={hero} />
      </PageContent>
    </>
  )
}

export default AboutUs
