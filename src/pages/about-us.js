import Head from 'components/Head'
import aboutUsData from '../../data/about-us'
import {
  AboutUsHero,
  OurStory,
  Investors,
  Values,
  JobOffers,
  PerksAndBenefits,
  OurTeam,
} from 'blocks'
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
    ourTeam,
  } = aboutUsData
  return (
    <>
      <Head meta={meta} />
      <PageContent>
        <AboutUsHero hero={hero} />
        <OurTeam ourTeam={ourTeam} />
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
