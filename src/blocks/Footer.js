import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'next-i18next'
import get from 'utils/get'
import getFooterData from '../../data/footer'
import Grid from 'components/Grid'
import Typography from 'components/Typography'
import Image from 'next/image'
import Link from 'components/Link'

const Wrapper = styled.footer`
  background-color: ${get('colors.valhalla.700')};
  color: ${get('colors.white')};
  padding: 74px 24px 68px;
  @media (min-width: ${get('breakpoints.md')}) {
    padding: 94px 32px 32px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    padding: 142px 64px 74px;
  }
`

const LogoColumn = styled.div`
  grid-column: 1 / -1;
  @media (min-width: ${get('breakpoints.md')}) {
    grid-column: 1 / 5;
  }
`

const MenuColumn = styled(Grid)`
  grid-column: 1 / -1;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 56px 16px;
  width: 100%;
  margin-top: 56px;
  @media (min-width: ${get('breakpoints.md')}) {
    grid-column: 5 / -1;
    padding-left: 22px;
    margin-top: 0;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0px 16px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    grid-column: 7 / -1;
    padding-left: 0;
  }
`

const MenuSectionTitle = styled(Typography)`
  text-transform: uppercase;
`

const FooterLink = styled(Link)`
  display: block;
  margin-top: 8px;
  span {
    color: ${get('colors.ashes')};
    transition: color 300ms;
  }
  &:hover,
  &:focus {
    span {
      color: ${get('colors.hotPink')};
    }
  }
`

const BottomSection = styled.div`
  grid-column: 1 / -1;
  @media (min-width: ${get('breakpoints.md')}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 34px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 122px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 148px;
  }
`

const Socials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  > a + a {
    margin-left: 16px;
  }
  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 0;
  }
`

const Social = ({ social }) => {
  const Icon = social.icon
  return (
    <Link href={social.href} target={social.target} title={social.title}>
      <Icon height={24} />
    </Link>
  )
}

const Copyright = styled(Typography)`
  color: ${get('colors.valhalla.100')};
  opacity: 0.9;
  margin-top: 24px;
  text-align: center;
  width: 100%;
  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 0;
    width: auto;
  }
`

const Footer = () => {
  const { t } = useTranslation('footer')
  const footerProps = getFooterData(t)
  return (
    <Wrapper>
      <Grid>
        <LogoColumn>
          <Image
            src="/images/meilisearch-full.svg"
            height={32}
            width={213}
            layout="fixed"
            alt="Meilisearch Logo"
          />
        </LogoColumn>
        <MenuColumn>
          {footerProps.menu.map(menu => (
            <div key={menu.title}>
              <MenuSectionTitle variant="preTitle">
                {menu.title}
              </MenuSectionTitle>
              {menu.submenu.map(submenu => (
                <FooterLink
                  href={submenu.href}
                  target={submenu.target}
                  key={submenu.title}
                >
                  <Typography variant="small">{submenu.title}</Typography>
                </FooterLink>
              ))}
            </div>
          ))}
        </MenuColumn>
        <BottomSection>
          <Socials>
            {footerProps.socials?.map((social, index) => (
              <Social social={social} key={index} />
            ))}
          </Socials>
          <Copyright variant="small">{footerProps.copyright}</Copyright>
        </BottomSection>
      </Grid>
    </Wrapper>
  )
}

export default Footer
