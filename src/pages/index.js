import Head from 'next/head'
import getStarzagersCount from 'utils/getStarzagersCount'
import formatStargazers from 'utils/formatStargazers'
import { useTranslation } from 'next-i18next'
import GithubButton from 'components/GithubButton'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home = ({ stargazers_count }) => {
  const { t } = useTranslation('homepage')

  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Head>
      <GithubButton
        count={formatStargazers(stargazers_count)}
        href="https://github.com/meilisearch/MeiliSearch"
      />
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  try {
    const stargazers_count = await getStarzagersCount()
    return {
      props: {
        stargazers_count: stargazers_count,
        ...(await serverSideTranslations(locale, ['homepage'])),
      },
    }
  } catch (err) {
    console.log(err)
  }
}

export default Home
