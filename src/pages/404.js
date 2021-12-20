import Head from 'next/head'
import { useTranslation } from 'next-i18next'

const Custom404 = () => {
  const { t } = useTranslation('404')
  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta
          name="description"
          content="An open source, blazingly fast and hyper relevant search-engine that will improve your search experience"
        />
        <p>{t('title')}</p>
      </Head>
    </>
  )
}

export default Custom404
