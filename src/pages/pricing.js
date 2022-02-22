import Head from 'next/head'
import getStarzagersCount from 'utils/getStarzagersCount'
import formatStargazers from 'utils/formatStargazers'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import getPricingPageData from '../../data/pricing'
import PageContent from 'components/PageContent'
import Typography from 'components/Typography'
import { Header, Footer } from 'blocks'

const Pricing = ({ stargazers_count }) => {
  const { t } = useTranslation('pricing')
  const { hero } = getPricingPageData(t)
  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Head>
      <Header stargazers_count={formatStargazers(stargazers_count)} />
      <PageContent>
        <Typography
          style={{ color: 'white' }}
          variant="h1"
          forwardedAs="h1"
          dangerouslySetInnerHTML={{ __html: hero.title }}
        />
      </PageContent>
      <Footer />
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  try {
    const stargazers_count = await getStarzagersCount()
    return {
      props: {
        stargazers_count: stargazers_count,
        ...(await serverSideTranslations(locale, [
          'pricing',
          'header',
          'footer',
        ])),
      },
    }
  } catch (err) {
    console.log(err)
  }
}

export default Pricing
