import Head from 'components/Head'
import styled from 'styled-components'
import getCodeSamples from 'utils/getCodeSamples'
import {
  Cards,
  Hero as BaseHero,
  Demo as BaseDemo,
  Developer,
  OpenSource as BaseOpenSource,
  Step1 as BaseStep1,
  Step2 as BaseStep2,
  Step3 as BaseStep3,
  Testimonials,
} from 'blocks'
import getHomepageData from '../../data/homepage'
import get from 'utils/get'
import PageContent from 'components/PageContent'

const Hero = styled(BaseHero)`
  margin-top: 54px;
  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 98px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 48px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    margin-top: 112px;
  }
`

const Demo = styled(BaseDemo)`
  margin-top: 72px;
  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 178px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 266px;
  }
`

const OpenSource = styled(BaseOpenSource)`
  margin-top: 30px;
  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 72px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 120px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    margin-top: 192px;
  }
`

const Step1 = styled(BaseStep1)`
  margin-top: 80px;
  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 120px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    margin-top: 288px;
  }
`

const Step2 = styled(BaseStep2)`
  margin-top: 94px;
  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 155px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 245px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    margin-top: 424px;
  }
`

const Step3 = styled(BaseStep3)`
  margin-top: 105px;
  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 72px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 120px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    margin-top: 256px;
  }
`

const Home = ({ code_samples }) => {
  const {
    meta,
    hero,
    demo,
    developer,
    openSource,
    steps,
    cards,
    testimonials,
  } = getHomepageData()
  const stepsAnchor = steps.map(step => ({
    preTitle: step.preTitle,
    title: step.title,
  }))
  return (
    <>
      <Head meta={meta} />
      <PageContent>
        <Hero heroProps={hero} />
        <Demo demoProps={demo} color={get('colors.lila')} />
        <OpenSource
          openSourceProps={openSource}
          color={get('colors.hotPink')}
        />
        <Step1
          step1Props={steps[0]}
          steps={stepsAnchor}
          color={get('colors.lila')}
        />
        <Step2
          step2Props={steps[1]}
          steps={stepsAnchor}
          color={get('colors.hotPink')}
        />
        <Step3
          step3Props={steps[2]}
          steps={stepsAnchor}
          color={get('colors.dodgerBlue')}
        />
        <Developer developerProps={developer} code_samples={code_samples} />
        <Cards cardsProps={cards} />
        <Testimonials testimonialsProps={testimonials} />
      </PageContent>
    </>
  )
}

export const getStaticProps = async () => {
  try {
    let code_samples = []
    if (process.env.NODE_ENV !== 'development') {
      const sdkList = getHomepageData().developer.sdkList
      code_samples = await getCodeSamples(sdkList)
    }

    return {
      props: {
        code_samples,
      },
    }
  } catch (err) {
    console.log(err)
  }
}

export default Home
