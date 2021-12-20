import Head from 'next/head'
import getStarzagersCount from 'utils/getStarzagersCount'
import formatStargazers from 'utils/formatStargazers'
import { useTranslation } from 'next-i18next'
import GithubButton from 'components/GithubButton'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Menu, MenuDisclosure, MenuItem } from 'components/Menu'
import { useMenuState } from 'reakit/Menu'
import getHeaderData from '../../data/header'
import Typography from 'components/Typography'
import Link from 'components/Link'

const SubMenu = ({ link }) => {
  const menuState = useMenuState({ animated: 300, loop: true })
  return (
    <>
      <MenuDisclosure {...menuState}>
        <Typography>{link.title}</Typography>
      </MenuDisclosure>
      <Menu {...menuState} ariaLabel="Menu">
        {link.subMenu.map(item => (
          <MenuItem key={item.title} {...item} />
        ))}
      </Menu>
    </>
  )
}

const MenuLinks = () => {
  const { t } = useTranslation('header')
  const headerProps = getHeaderData(t)

  return (
    <div style={{ color: 'white' }}>
      {headerProps.links.map(link => (
        <div key={link.title}>
          {link.subMenu ? (
            <SubMenu link={link} />
          ) : (
            <Link href={link.href}>
              <Typography>{link.title}</Typography>
            </Link>
          )}
        </div>
      ))}
    </div>
  )
}

const Home = ({ stargazers_count }) => {
  const { t } = useTranslation('homepage')
  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Head>
      <div>
        <GithubButton
          count={formatStargazers(stargazers_count)}
          href="https://github.com/meilisearch/MeiliSearch"
        />
        <MenuLinks />
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
        ...(await serverSideTranslations(locale, ['homepage', 'header'])),
      },
    }
  } catch (err) {
    console.log(err)
  }
}

export default Home
