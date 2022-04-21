import React from 'react'
import styled from 'styled-components'
import Tab from 'components/Tab'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import get from 'utils/get'
import Typography from 'components/Typography'
import Button from 'components/Button'
import { RightArrow } from 'components/icons'

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
  position: absolute;
  right: 40px;
  bottom: 26px;
  background-color: ${get('colors.valhalla.700')};
`

const RightColumn = ({ tab, sdkList, developerProps }) => {
  const customStyle = {
    padding: '21px 24px',
    margin: 0,
    height: '100%',
    backgroundColor: get('colors.valhalla.700'),
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
          <Cta
            variant="secondary"
            color={get('colors.white')}
            href={developerProps.buildWith.href(sdk.pkgName)}
            target={developerProps.buildWith.target}
          >
            <RightArrow width={15} style={{ marginRight: 15 }} />
            <Typography>{developerProps.buildWith.title(sdk.name)}</Typography>
          </Cta>
        </CodeSection>
      ))}
    </Container>
  )
}

export default RightColumn
