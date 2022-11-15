import Head from 'components/Head'
import aboutUsData from '../../data/about-us'
import {
  AboutUsHero,
  OurStory,
  Investors,
  Values,
  JobOffers,
  PerksAndBenefits,
} from 'blocks'
import get from 'utils/get'
import PageContent from 'components/PageContent'

const AboutUs = () => {
  // TODO : Add tests
  const {
    meta,
    hero,
    ourStory,
    investors,
    values,
    jobOffers,
    perksAndBenefits,
  } = aboutUsData
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
        <Values values={values} />
        <PerksAndBenefits perksAndBenefits={perksAndBenefits} />
        <Investors investors={investors} />
        <JobOffers jobOffers={jobOffers} />
      </PageContent>
    </>
  )
}

export default AboutUs
