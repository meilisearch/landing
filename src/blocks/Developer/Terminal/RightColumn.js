import React from 'react'
import styled from 'styled-components'
import Tab from 'components/Tab'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import get from 'utils/get'
import Typography from 'components/Typography'
import Button from 'components/Button'
import { RightArrow } from 'components/icons'
import dracula from 'theme/dracula'

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;
`

const CodeSection = styled(Tab.TabPanel)`
  height: 100%;
  position: absolute;
  inset: 0;
`

const Cta = styled(Button)`
  background-color: ${get('colors.valhalla.700')};
  height: 38px;
`

const LinkContainer = styled.div`
  position: absolute;
  right: 40px;
  bottom: 26px;
`

const RightColumn = ({ tab, sdkList, developerProps }) => {
  const customStyle = {
    padding: '21px 24px 72px',
    margin: 0,
    height: '100%',
    backgroundColor: get('colors.valhalla.700'),
    fontSize: 12,
  }
  return (
    <Container>
      {sdkList.map(sdk => (
        <CodeSection {...tab} key={sdk.name}>
          <SyntaxHighlighter
            language={sdk.language}
            style={dracula}
            showLineNumbers
            customStyle={customStyle}
          >
            {sdk.code}
          </SyntaxHighlighter>
          <LinkContainer>
            <Cta
              variant="secondary"
              color={get('colors.white')}
              href={developerProps.seeAllIntegrations.href}
              target={developerProps.seeAllIntegrations.target}
            >
              <Typography variant="body.s.bold">
                {developerProps.seeAllIntegrations.title}
              </Typography>
            </Cta>
            <Cta
              variant="secondary"
              color={get('colors.white')}
              href={developerProps.buildWith.href(sdk.pkgName)}
              target={developerProps.buildWith.target}
              style={{ marginLeft: 24 }}
            >
              <RightArrow width={12} style={{ marginRight: 14 }} />
              <Typography variant="body.s.bold" className="notranslate">
                {developerProps.buildWith.title(sdk.name)}
              </Typography>
            </Cta>
          </LinkContainer>
        </CodeSection>
      ))}
    </Container>
  )
}

export default RightColumn
