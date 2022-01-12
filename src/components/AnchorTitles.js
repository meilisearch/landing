import React from 'react'
import styled from 'styled-components'
import Link from 'components/Link'
import PreTitle from 'components/PreTitle'
import get from 'utils/get'

const PreTitlesWrapper = styled.div`
  display: flex;
  > div + div {
    margin-left: 30px;
  }
`

const MobilePreTitle = styled(PreTitle)`
  display: ${p => (p.$current ? 'block' : 'none')};
  @media (min-width: ${get('breakpoints.lg')}) {
    display: none;
  }
`

const DeskptopLink = styled(Link)`
  display: none;
  @media (min-width: ${get('breakpoints.lg')}) {
    display: block;
  }
`

const PreTitleLink = ({ preTitle, anchorLink, color, current, ...props }) => (
  <div {...props}>
    <MobilePreTitle
      variant="preTitle"
      color={current ? color : get('colors.valhalla.400')}
      preTitle={preTitle}
      $current={current}
      {...props}
    />
    <DeskptopLink href={anchorLink}>
      <PreTitle
        variant="preTitle"
        color={current ? color : get('colors.valhalla.400')}
        preTitle={preTitle}
        $current={current}
        {...props}
      />
    </DeskptopLink>
  </div>
)

const AnchorTitles = ({ links, current, color, ...props }) => {
  return (
    <PreTitlesWrapper {...props}>
      {links.map(link => (
        <PreTitleLink
          preTitle={link.preTitle}
          key={link.title}
          current={current === link.preTitle}
          color={color}
          anchorLink={`#${link.title}`}
        />
      ))}
    </PreTitlesWrapper>
  )
}

export default AnchorTitles
