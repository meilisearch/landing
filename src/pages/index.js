import Head from 'next/head'
import styled from 'styled-components'
import getStarzagersCount from 'utils/getStarzagersCount'
import formatStargazers from 'utils/formatStargazers'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from 'blocks/Header'
import BaseHero from 'blocks/Hero'
import getHomepageData from '../../data/homepage'
import get from 'utils/get'

const Hero = styled(BaseHero)`
  padding-top: 54px;
  @media (min-width: ${get('breakpoints.tablet')}) {
    padding-top: 148px;
  }
`

const Home = ({ stargazers_count }) => {
  const { t } = useTranslation('homepage')
  const { hero } = getHomepageData(t)
  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Head>
      <Header stargazers_count={formatStargazers(stargazers_count)} />
      <Hero heroProps={hero} />
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
