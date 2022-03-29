import React from 'react'
import styled from 'styled-components'
import { useTabState } from 'reakit/Tab'
import Tab from 'components/Tab'
import Typography from 'components/Typography'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import get from 'utils/get'
import Grid from 'components/Grid'

const StyledGrid = styled(Grid)`
  color: ${get('colors.white')};
  margin-top: -124px;
  background-color ${get('colors.valhalla.700')};
  border-radius: 16px;
  border: 2px solid ${get('colors.valhalla.100')};
  overflow: hidden;
  grid-gap: 0 16px;

`

const SdkTab = styled(Tab.Tab)`
  display: flex;
  margin-top: 10px;
`

const Language = styled(Typography)`
  font-family: 'Poppins';
  font-weight: ${get('fontWeight.bold')};
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-left: 24px;
`

const TerminalButton = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 50%;
`

const TerminalHead = styled.div`
  background-color: ${get('colors.valhalla.700')};
  grid-column: 1/-1;
  height: 44px;
  border-bottom: 2px solid ${get('colors.valhalla.100')};
  padding: 0 16px;
  display: flex;
  align-items: center;

  ${TerminalButton}:first-child {
    background-color: ${get('colors.hotPink')};
  }
  ${TerminalButton}:nth-child(2) {
    background-color: ${get('colors.lila')};
  }
  ${TerminalButton}:nth-child(3) {
    background-color: ${get('colors.dodgerBlue')};
  }

  ${TerminalButton}+${TerminalButton} {
    margin-left: 9px;
  }
`

const LanguageList = styled.div`
  grid-column: 1/-1;
  display: flex;
`

const SdkButtons = styled.div`
  background-color: ${get('colors.valhalla.600')};
  width: 14%;
  display: flex;
  flex-direction: column;
  margin: 24px 28px;

  @media (min-width: ${get('breakpoints.xl')}) {
    margin: 26px 44px;
  }
`

const CodeWrapper = styled.div`
  border-left: 2px solid ${get('colors.valhalla.300')};
  flex: 1;
`

const CodeSection = styled(Tab.TabPanel)`
  height: 100%;
`

const Terminal = ({ developerProps, code_samples }) => {
  const tab = useTabState({ orientation: 'vertical' })
  const customStyle = {
    padding: 0,
    margin: '28px 12px 0',
    height: '100%',
    backgroundColor: get('colors.valhalla.700'),
  }

  const sdkList = code_samples.map(sdk => ({
    ...sdk,
    logo: developerProps.sdkList.find(
      currentSdk => currentSdk.language === sdk.language
    ).logo,
  }))

  return (
    <StyledGrid>
      <TerminalHead>
        <TerminalButton />
        <TerminalButton />
        <TerminalButton />
      </TerminalHead>
      <LanguageList>
        <SdkButtons forwardedAs={Tab.TabList} {...tab} aria-label="sdk-list">
          {sdkList.map(sdk => {
            const Logo = sdk.logo
            return (
              <SdkTab {...tab} key={sdk.name}>
                <Logo width={24} />
                <Language>{sdk.name}</Language>
              </SdkTab>
            )
          })}
        </SdkButtons>
        <CodeWrapper>
          {sdkList.map(sdk => (
            <CodeSection {...tab} key={sdk.name}>
              <SyntaxHighlighter
                language={sdk.language}
                style={dracula}
                showLineNumbers
                wrapLongLines
                customStyle={customStyle}
              >
                {sdk.code}
              </SyntaxHighlighter>
            </CodeSection>
          ))}
        </CodeWrapper>
      </LanguageList>
    </StyledGrid>
  )
}

export default Terminal
