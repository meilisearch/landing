import Head from 'components/Head'
import aboutUsData from '../../data/about-us'
import { AboutUsHero, OurStory, Investors } from 'blocks'
import get from 'utils/get'
import PageContent from 'components/PageContent'

const AboutUs = () => {
  const { meta, hero, ourStory, investors } = aboutUsData
  return (
    <>
      <Head meta={meta} />
      <PageContent>
        <AboutUsHero hero={hero} />
        <div
          style={{
            backgroundColor: get('colors.valhalla.700'),
            height: 200,
            color: 'white',
            margin: '0 -32px',
          }}
        >
          Other block to come
        </div>
        <OurStory ourStory={ourStory} />
        <Investors investors={investors} />
        <div
          style={{
            height: 200,
            color: 'white',
            margin: '0 -32px',
          }}
        >
          Other block to come
        </div>
      </PageContent>
    </>
  )
}

export default AboutUs
