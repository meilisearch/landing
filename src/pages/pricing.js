import Head from 'next/head'
import getStarzagersCount from 'utils/getStarzagersCount'
import formatStargazers from 'utils/formatStargazers'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import getPricingPageData from '../../data/pricing'
import PageContent from 'components/PageContent'
import { Header, Footer, FAQ } from 'blocks'
import get from 'utils/get'

const Pricing = ({ stargazers_count }) => {
  const { t } = useTranslation('pricing')
  const { faq } = getPricingPageData(t)
  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Head>
      <div style={{ backgroundColor: get('colors.valhalla.800') }}>
        <Header
          stargazers_count={formatStargazers(stargazers_count)}
          style={{ backgroundColor: get('colors.valhalla.800') }}
        />
        <PageContent>
          <FAQ faq={faq} />
        </PageContent>
        <Footer />
      </div>
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
