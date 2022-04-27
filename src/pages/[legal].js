import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import glob from 'glob'

const LegalPage = ({ markdownBody }) => (
  <ReactMarkdown>{markdownBody}</ReactMarkdown>
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
