import styled from 'styled-components'
import Head from 'next/head'
import { Header } from 'blocks'
import get from 'utils/get'
import Button from 'components/Button'
import Typography from 'components/Typography'
import BasePageContent from 'components/PageContent'
import get404Data from '../../data/404'

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

const Custom404 = () => {
  const { meta, content } = get404Data()
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <Header />
      <PageContent>
        <Title>404</Title>
        <Description variant="title.m">{content.description}</Description>
        <Cta>
          <Button href="/" variant="secondary" color={get('colors.hotPink')}>
            <Typography variant="body.s.bold">{content.cta}</Typography>
          </Button>
        </Cta>
      </PageContent>
    </>
  )
}

export default Custom404
