import Head from 'next/head'
import styled from 'styled-components'
import getStarzagersCount from 'utils/getStarzagersCount'
import formatStargazers from 'utils/formatStargazers'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import {
  Header,
  Hero as BaseHero,
  Demo as BaseDemo,
  OpenSource as BaseOpenSource,
} from 'blocks'
import getHomepageData from '../../data/homepage'
import get from 'utils/get'

const Hero = styled(BaseHero)`
  margin-top: 54px;
  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 98px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 148px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    margin-top: 250px;
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
  margin-top: 24px;
  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 42px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 140px;
  }
`

const PageContent = styled.div`
  overflow: hidden;
  padding: 0 16px;
  @media (min-width: ${get('breakpoints.md')}) {
    padding: 0 32px;
  }
`

const Home = ({ stargazers_count }) => {
  const { t } = useTranslation('homepage')
  const { hero, demo, openSource } = getHomepageData(t)
  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Head>
      <Header stargazers_count={formatStargazers(stargazers_count)} />
      <PageContent>
        <Hero heroProps={hero} />
        <Demo demoProps={demo} color={get('colors.lila')} />
        <OpenSource
          openSourceProps={openSource}
          color={get('colors.hotPink')}
        />
      </PageContent>
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  try {
    const stargazers_count = await getStarzagersCount()
    return {
      props: {
        stargazers_count: stargazers_count,
        ...(await serverSideTranslations(locale, ['homepage', 'header'])),
      },
    }
  } catch (err) {
    console.log(err)
  }
}

export default Home
