import Head from 'components/Head'
import PageContent from 'components/PageContent'
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

const AboutUs = () => {
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
        <AboutUsHero hero={hero} data-cy="aboutUsHero" />
        <OurTeam ourTeam={ourTeam} data-cy="ourTeam" />
        <OurStory ourStory={ourStory} data-cy="ourStory" />
        <Values values={values} data-cy="values" />
        <PerksAndBenefits
          perksAndBenefits={perksAndBenefits}
          data-cy="perksAndBenefits"
        />
        <Investors investors={investors} data-cy="investors" />
        <JobOffers jobOffers={jobOffers} data-cy="jobOffers" />
      </PageContent>
    </>
  )
}

export default AboutUs
