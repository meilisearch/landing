import React from 'react'
import styled from 'styled-components'
import Typography from 'components/Typography'
import Link from 'components/Link'
import Grid from 'components/Grid'
import get from 'utils/get'

const MenuColumn = styled(Grid)`
  grid-column: 1 / -1;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 56px 16px;
  width: 100%;
  margin-top: 48px;
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
  @media (min-width: ${get('breakpoints.xl')}) {
    grid-column: 7 / -1;
  }
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

const MenuSection = ({ menu }) => {
  return (
    <MenuColumn>
      {menu.map(menu => (
        <div key={menu.title}>
          <Typography variant="title.caps">{menu.title}</Typography>
          {menu.submenu.map(submenu => (
            <FooterLink
              href={submenu.href}
              target={submenu.target}
              key={submenu.title}
            >
              <Typography variant="body.s.default">{submenu.title}</Typography>
            </FooterLink>
          ))}
        </div>
      ))}
    </MenuColumn>
  )
}

export default MenuSection
