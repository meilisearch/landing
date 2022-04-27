import styled from 'styled-components'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import glob from 'glob'
import Typography from 'components/Typography'
import get from 'utils/get'
import PreTitle from 'components/PreTitle'

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

const LegalPage = ({ markdownBody }) => (
  <>
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
  </>
)

export async function getStaticProps({ locale, params }) {
  const { legal } = params
  const content = await import(`./${legal}.mdx`)
  const data = matter(content.default)

  return {
    props: {
      ...(await serverSideTranslations(locale, ['header', 'footer'])),
      markdownBody: data.content,
    },
  }
}

export async function getStaticPaths() {
  const blogs = glob.sync('src/pages/**/*.mdx')

  const blogSlugs = blogs.map(file => {
    const parts = file.split('/')
    return parts[parts.length - 1].replace('.mdx', '')
  })

  const paths = blogSlugs.map(slug => ({
    params: { legal: slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default LegalPage
