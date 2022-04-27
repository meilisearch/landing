import styled from 'styled-components'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import glob from 'glob'
import Typography from 'components/Typography'
import get from 'utils/get'
import PreTitle from 'components/PreTitle'
import Link from 'components/Link'
import { useRouter } from 'next/router'

const Markdown = styled.div`
  color: ${get('colors.ashes.900')};
  font-family: Inter;
  h1 {
    color: ${get('colors.white')};
    display: block;
  }
  h2 {
    color: ${get('colors.ashes.600')};
    display: block;
  }
  h3 {
    color: ${get('colors.hotPink')};
    display: block;
  }
  a {
    color: ${get('colors.white')};
    border-bottom: 1px solid ${get('colors.hotPink')};
  }
`

const LegalLinks = styled.div`
  color: ${get('colors.ashes.900')};
  margin: 80px 0;
  .active {
    color: ${get('colors.hotPink')};
  }
`

const LegalPage = ({ markdownBody, legalPages }) => {
  const router = useRouter()
  console.log(router)
  return (
    <>
      <LegalLinks>
        {legalPages.map(legalPage => (
          <Link
            href={`/${legalPage}`}
            key={legalPage}
            className={router.asPath == `/${legalPage}` ? 'active' : ''}
          >
            <Typography style={{ display: 'block' }}>
              {legalPage.replace(new RegExp('-', 'g'), ' ')}
            </Typography>
          </Link>
        ))}
      </LegalLinks>
      <div>
        <PreTitle preTitle="Legal" color={get('colors.hotPink')} />
        <Markdown>
          <ReactMarkdown
            components={{
              h1: props => (
                <Typography variant="title.m" forwardedAs="h1" {...props} />
              ),
              h2: props => (
                <Typography variant="title.s" forwardedAs="h2" {...props} />
              ),
              h3: props => (
                <Typography variant="title.xs" forwardedAs="h3" {...props} />
              ),
            }}
          >
            {markdownBody}
          </ReactMarkdown>
        </Markdown>
      </div>
    </>
  )
}

const getLegalPages = () => {
  const markdownPages = glob.sync('src/pages/**/*.mdx')

  const slugs = markdownPages.map(file => {
    const parts = file.split('/')
    return parts[parts.length - 1].replace('.mdx', '')
  })

  return slugs
}

export async function getStaticProps({ locale, params }) {
  const { legal } = params
  const content = await import(`./${legal}.mdx`)
  const data = matter(content.default)

  const legalPages = getLegalPages()

  return {
    props: {
      legalPages,
      ...(await serverSideTranslations(locale, ['header', 'footer'])),
      markdownBody: data.content,
    },
  }
}

export async function getStaticPaths() {
  const slugs = getLegalPages()

  const paths = slugs.map(slug => ({
    params: { legal: slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default LegalPage
