import styled from 'styled-components'
import Head from 'next/head'
import { Header } from 'blocks'
import get from 'utils/get'
import Button from 'components/Button'
import Typography from 'components/Typography'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import BasePageContent from 'components/PageContent'
import fetcher from 'utils/fetcher'
import { SWRConfig } from 'swr'

const PageContent = styled(BasePageContent)`
  color: ${get('colors.white')};
  text-align: center;
  padding: 62px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: ${get('breakpoints.lg')}) {
    justify-content: center;
    padding: 102px 0;
  }
`

const Title = styled(Typography)`
  font-family: Poppins;
  font-style: normal;
  font-weight: ${get('fontWeight.bold')};
  font-size: 172px;
  line-height: 172px;
  letter-spacing: -0.02em;
  color: ${get('colors.valhalla.400')};
  margin-top: 94px;

  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 0;
    font-size: 378px;
    line-height: 378px;
  }
`

const Description = styled(Typography)`
  color: ${get('colors.hotPink')};
  max-width: 262px;
  margin: 0 auto;

  @media (min-width: ${get('breakpoints.lg')}) {
    max-width: 510px;
  }
`

const Cta = styled.div`
  margin-top: 152px;
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 38px;
  }
`

const Custom404 = ({ fallback }) => {
  const { t } = useTranslation('404')
  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Head>
      <SWRConfig value={{ fallback }}>
        <Header />
      </SWRConfig>
      <PageContent>
        <Title>404</Title>
        <Description variant="title.m">{t('description')}</Description>
        <Cta>
          <Button href="/" variant="secondary" color={get('colors.hotPink')}>
            <Typography variant="body.s.bold">{t('cta')}</Typography>
          </Button>
        </Cta>
      </PageContent>
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  try {
    const meiliRepoInfos = await fetcher(
      'https://api.github.com/repos/meilisearch/meilisearch'
    )
    return {
      props: {
        fallback: {
          'https://api.github.com/repos/meilisearch/meilisearch':
            meiliRepoInfos,
        },
        ...(await serverSideTranslations(locale, ['404', 'header'])),
      },
    }
  } catch (err) {
    console.log(err)
  }
}

export default Custom404
