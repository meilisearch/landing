import styled from 'styled-components'
import matter from 'gray-matter'
import PreTitle from 'components/PreTitle'
import Markdown from 'components/Markdown'
import Link from 'components/Link'
import { useRouter } from 'next/router'
import LegalLayout from 'layouts/LegalLayout'
import getLegalData from '../../data/legal'
import get from 'utils/get'
import Typography from 'components/Typography'

const Container = styled.div`
  padding-top: 48px;
  background-color: ${get('colors.valhalla.800')};
`

const LeftColumn = styled(LegalLayout.LeftColumn)`
  color: ${get('colors.ashes.900')};
`

const PagesName = styled(Typography)`
  margin-top: 6px;
  padding-left: 20px;
  border-left: 3px solid transparent;

  &.active {
    color: ${get('colors.hotPink')};
    font-weight: ${get('fontWeight.bold')};
    border-left: 3px solid ${get('colors.hotPink')};
  }
  &:first-letter {
    text-transform: uppercase;
  }
`

const LeftColumnTitle = styled(Typography)`
  color: ${get('colors.white')};
  margin-bottom: 16px;
`

const MiddleColumn = styled(LegalLayout.MiddleColumn)`
  padding: 0 16px;
`

const Menu = ({ menu }) => {
  const router = useRouter()
  return (
    <>
      {menu.map(legalPage => (
        <Link href={legalPage.href} key={legalPage.title}>
          <PagesName
            style={{ display: 'block' }}
            className={router.asPath === legalPage.href ? 'active' : ''}
          >
            {legalPage.title}
          </PagesName>
        </Link>
      ))}
    </>
  )
}

const LegalPage = ({ markdownBody }) => {
  const { text, menu } = getLegalData()
  return (
    <Container>
      <LegalLayout>
        <LeftColumn>
          <LeftColumnTitle variant="body.s.bold">{text.legal}</LeftColumnTitle>
          <Menu menu={menu} />
        </LeftColumn>
        <MiddleColumn>
          <PreTitle preTitle={text.legal} color={get('colors.hotPink')} />
          <Markdown>{markdownBody}</Markdown>
        </MiddleColumn>
      </LegalLayout>
    </Container>
  )
}

export async function getStaticProps({ params }) {
  const { legal } = params
  const content = await import(`./${legal}.mdx`)
  const data = matter(content.default)

  return {
    props: {
      markdownBody: data.content,
    },
  }
}

export async function getStaticPaths() {
  // Get the list of the legal pages
  const { menu } = getLegalData()

  // Get the urls in the form "privacy-policy"
  const paths = menu.map(page => ({
    params: { legal: page.href.replace('/', '') },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default LegalPage
