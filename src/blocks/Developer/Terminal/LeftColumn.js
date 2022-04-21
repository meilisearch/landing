import React from 'react'
import styled from 'styled-components'
import Tab from 'components/Tab'
import Typography from 'components/Typography'
import get from 'utils/get'
import Link from 'components/Link'

const Container = styled.div`
  width: 190px;
  background-color: ${get('colors.valhalla.600')};
  display: flex;
  flex-direction: column;
  border-right: 2px solid ${get('colors.valhalla.300')};
  padding: 26px 28px;

  @media (min-width: ${get('breakpoints.xl')}) {
    padding: 26px 44px;
    width: 218px;
  }
`

const SdkTab = styled(Tab.Tab)`
  display: flex;
  margin-top: 10px;
  align-items: center;
`

const Language = styled(Typography)`
  font-family: 'Poppins';
  font-weight: ${get('fontWeight.bold')};
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-left: 24px;
  text-align: left;
`

const LinkToIntegrations = styled(Link)`
  margin: 32px 0 0;
  span {
    text-decoration: underline;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    margin: 32px -16px 0;
  }
`

const SdkList = styled.div`
  button + button {
    margin-left: 0;
  }
`

const LeftColumn = ({ tab, sdkList, developerProps }) => {
  return (
    <Container>
      <SdkList forwardedAs={Tab.TabList} {...tab} aria-label="sdk-list">
        {sdkList.map(sdk => {
          const Logo = sdk.logo
          return (
            <SdkTab {...tab} key={sdk.name}>
              <Logo width={24} />
              <Language>{sdk.name}</Language>
            </SdkTab>
          )
        })}
      </SdkList>
      <LinkToIntegrations
        href={developerProps.seeAllIntegrations.href}
        target={developerProps.seeAllIntegrations.target}
      >
        <Typography variant="body.m.link">
          {developerProps.seeAllIntegrations.title}
        </Typography>
      </LinkToIntegrations>
    </Container>
  )
}

export default LeftColumn
