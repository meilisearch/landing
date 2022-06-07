import React from 'react'
import styled from 'styled-components'
import Tab from 'components/Tab'
import Typography from 'components/Typography'
import get from 'utils/get'

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
  align-items: center;
`

const Language = styled(Typography)`
  font-family: 'Poppins';
  font-weight: ${get('fontWeight.bold')};
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-left: 16px;
  text-align: left;
`

const SdkList = styled(Tab.TabList)`
  button + button {
    margin-left: 0;
  }
`

const LeftColumn = ({ tab, sdkList }) => {
  return (
    <Container>
      <SdkList {...tab} aria-label="sdk-list">
        {sdkList.map(sdk => {
          const Logo = sdk.logo
          return (
            <SdkTab {...tab} key={sdk.pkgName}>
              <div style={{ width: 28 }}>
                <Logo height={28} />
              </div>
              <Language variant="body.xs.bold" className="notranslate">
                {sdk.name}
              </Language>
            </SdkTab>
          )
        })}
      </SdkList>
    </Container>
  )
}

export default LeftColumn
