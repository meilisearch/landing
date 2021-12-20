import Head from 'next/head'
import getStarzagersCount from 'utils/getStarzagersCount'
import { useTranslation } from 'next-i18next'

const Home = ({ stargazers_count }) => {
  const { t } = useTranslation('homepage')

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('title')} />
        <p>{stargazers_count}</p>
      </Head>
    </>
  )
}

export const getStaticProps = async () => {
  try {
    const stargazers_count = await getStarzagersCount()
    return {
      props: {
        stargazers_count: stargazers_count,
      },
    }
  } catch (err) {
    console.log(err)
  }
}

export default Home
