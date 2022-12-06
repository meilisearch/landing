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
        <AboutUsHero hero={hero} data-cy="AboutUsHero" />
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
