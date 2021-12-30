import React from 'react'
import styled from 'styled-components'
import { useMenuState } from 'reakit/Menu'
import Link from 'components/Link'
import { Menu, MenuDisclosure, MenuItem } from 'components/Menu'
import Typography from 'components/Typography'
import get from 'utils/get'
import { useDisclosureState } from 'reakit/Disclosure'
import { Disclosure, DisclosureContent } from 'components/Disclosure'

const Links = styled.div`
  display: flex;
  flex-direction: column;
  color: ${get('colors.white')};
  > * + * {
    margin: 42px 0 0 0;
  }

  @media (min-width: ${get('breakpoints.tablet')}) {
    flex-direction: row;
    > * + * {
      margin: 0 0 0 58px;
    }
  }
`

const DesktopMenuWrapper = styled.div`
  display: none;
  @media (min-width: ${get('breakpoints.tablet')}) {
    display: flex;
  }
`

const DesktopSubmenu = ({ link }) => {
  const menuState = useMenuState({
    animated: 300,
    loop: true,
    placement: 'auto',
  })
  return (
    <DesktopMenuWrapper>
      <MenuDisclosure {...menuState}>
        <Typography>{link.title}</Typography>
      </MenuDisclosure>
      <Menu {...menuState} ariaLabel={link.title} style={{ marginLeft: 0 }}>
        {link.subMenu.map(item => (
          <MenuItem key={item.title} {...item} />
        ))}
      </Menu>
    </DesktopMenuWrapper>
  )
}

const MobileMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${get('breakpoints.tablet')}) {
    display: none;
  }
`

const MobileSubmenu = ({ link }) => {
  const disclosure = useDisclosureState({ animated: true })

  return (
    <MobileMenuWrapper>
      <Disclosure {...disclosure}>
        <Typography>{link.title}</Typography>
      </Disclosure>
      <DisclosureContent
        {...disclosure}
        ariaLabel={link.title}
        style={{ marginLeft: 0, marginTop: 24 }}
      >
        {link.subMenu.map(item => (
          <MenuItem key={item.title} {...item} />
        ))}
      </DisclosureContent>
    </MobileMenuWrapper>
  )
}

const Submenu = ({ link }) => (
  <>
    <DesktopSubmenu link={link} />
    <MobileSubmenu link={link} />
  </>
)

const MenuLinks = ({ headerProps }) => (
  <Links>
    {headerProps.links.map(link =>
      link.subMenu ? (
        <Submenu link={link} key={link.title} />
      ) : (
        <Link href={link.href} target={link.target} key={link.title}>
          <Typography>{link.title}</Typography>
        </Link>
      )
    )}
  </Links>
)

export default MenuLinks
