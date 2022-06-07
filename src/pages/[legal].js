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
import Head from 'components/Head'

const Container = styled.div`
  background-color: ${get('colors.valhalla.800')};
  padding: 0 0 86px;
  @media (min-width: ${get('breakpoints.md')}) {
    padding: 54px 0 64px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    padding: 96 0 160px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    padding: 82 0 96px;
  }
`

const LeftColumn = styled(LegalLayout.LeftColumn)`
  color: ${get('colors.ashes.900')};
  background-color: ${get('colors.valhalla.800')};
`

const MenuLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  > a + a {
    margin-left: 24px;
  }

  @media (min-width: ${get('breakpoints.md')}) {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    > a + a {
      margin-left: 0;
    }
  }
`

const MenuLink = styled(Link)`
  display: inline-block;
  transition: color 100ms;

  @media (min-width: ${get('breakpoints.md')}) {
    border-left: 3px solid transparent;
    padding-left: 20px;
    margin-top: 6px;
  }

  &:hover,
  &:focus {
    color: ${get('colors.white')};
  }

  &.active {
    color: ${get('colors.hotPink')};
    font-weight: ${get('fontWeight.bold')};
    @media (min-width: ${get('breakpoints.md')}) {
      border-left: 3px solid ${get('colors.hotPink')};
    }
  }
`

const LeftColumnTitle = styled(Typography)`
  display: none;
  @media (min-width: ${get('breakpoints.md')}) {
    display: block;
    color: ${get('colors.white')};
    margin-bottom: 16px;
  }
`

const Menu = ({ menu }) => {
  const router = useRouter()
  return (
    <MenuLinks>
      {menu.map(legalPage => (
        <MenuLink
          href={legalPage.href}
          key={legalPage.title}
          className={router.asPath === legalPage.href ? 'active' : ''}
        >
          <Typography style={{ display: 'block' }}>
            {legalPage.title}
          </Typography>
        </MenuLink>
      ))}
    </MenuLinks>
  )
}

const MiddleColumn = styled(LegalLayout.MiddleColumn)`
  margin-top: 26px;
  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 0;
  }
`

const LegalPage = ({ markdownBody, frontmatter }) => {
  const { text, menu } = getLegalData()
  return (
    <>
      <Head meta={frontmatter.meta} />
      <Container>
        <LegalLayout>
          <LeftColumn>
            <LeftColumnTitle variant="body.s.bold">
              {text.legal}
            </LeftColumnTitle>
            <Menu menu={menu} />
          </LeftColumn>
          <MiddleColumn>
            <PreTitle preTitle={text.legal} color={get('colors.hotPink')} />
            <Markdown>{markdownBody}</Markdown>
          </MiddleColumn>
        </LegalLayout>
      </Container>
    </>
  )
}

export async function getStaticProps({ params }) {
  const { legal } = params
  const content = await import(`./${legal}.mdx`)
  const { content: body, data } = matter(content.default)

  return {
    props: {
      markdownBody: body,
      frontmatter: data,
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
