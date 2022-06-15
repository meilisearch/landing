import React from 'react'
import styled from 'styled-components'
import get from 'utils/get'
import getFooterData from '../../../data/footer'
import Grid from 'components/Grid'
import Image from 'components/Image'
import Newsletter from './Newsletter'
import BottomSection from './BottomSection'
import MenuSection from './MenuSection'

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

const LogoSection = styled.div`
  grid-column: 1 / -1;
  @media (min-width: ${get('breakpoints.md')}) {
    grid-column: 1 / 5;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    grid-column: 1 / 6;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    grid-column: 1 / 5;
  }
`

const Footer = props => {
  const footerProps = getFooterData()
  return (
    <Wrapper data-cy="footer" {...props}>
      <Grid>
        <LogoSection>
          <Image
            src="/images/meilisearch-full.svg"
            height={32}
            width={213}
            layout="fixed"
            alt="Meilisearch Logo"
          />
          <Newsletter newsletterProps={footerProps.newsletter} />
        </LogoSection>
        <MenuSection menu={footerProps.menu} />
        <BottomSection footerProps={footerProps} />
      </Grid>
    </Wrapper>
  )
}

export default Footer
