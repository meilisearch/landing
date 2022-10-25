import Head from 'components/Head'
import getAboutUsData from '../../data/about-us'
import PageContent from 'components/PageContent'
import AboutUsHero from 'blocks/AboutUsHero'

const AboutUs = () => {
  const { meta, hero } = getAboutUsData()
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
