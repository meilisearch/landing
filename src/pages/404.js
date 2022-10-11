import styled from 'styled-components'
import Head from 'components/Head'
import get from 'utils/get'
import Button from 'components/Button'
import Typography from 'components/Typography'
import BasePageContent from 'components/PageContent'
import get404Data from '../../data/404'

const Container = styled.div`
  height: 100vh;
  margin-top: -98px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: -88px;
  }
`

const PageContent = styled(BasePageContent)`
  color: ${get('colors.white')};
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media (min-width: ${get('breakpoints.lg')}) {
    justify-content: center;
  }
`

const Title = styled(Typography)`
  font-family: ${get('fontFamily.poppins')};
  font-style: normal;
  font-weight: ${get('fontWeight.bold')};
  font-size: 172px;
  line-height: 172px;
  letter-spacing: -0.02em;
  color: ${get('colors.valhalla.400')};
  margin-top: 206px;

  @media (min-width: ${get('breakpoints.lg')}) {
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

  @media (min-width: ${get('breakpoints.xl')}) {
    max-width: 524px;
  }
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
`

const Cta = styled.div`
  margin-bottom: 62px;
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 38px;
    margin-bottom: 102px;
  }
`

const Custom404 = () => {
  const { meta, content } = get404Data()
  return (
    <>
      <Head meta={meta} />
      <Container>
        <PageContent>
          <Text>
            <Title>404</Title>
            <Description variant="title.m">{content.description}</Description>
          </Text>
          <Cta>
            <Button href="/" variant="secondary" color={get('colors.hotPink')}>
              <Typography variant="body.s.bold">{content.cta}</Typography>
            </Button>
          </Cta>
        </PageContent>
      </Container>
    </>
  )
}

export default Custom404
