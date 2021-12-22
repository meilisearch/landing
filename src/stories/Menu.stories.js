import React from 'react'
import { useTranslation } from 'next-i18next'
import { Menu, MenuDisclosure, MenuItem } from 'components/Menu'
import Typography from 'components/Typography'
import { useMenuState } from 'reakit/Menu'
import getHeaderData from '../../data/header'

export default {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    layout: 'padded',
  },
}

export const Default = () => {
  const menuState = useMenuState()
  const { t } = useTranslation('header')
  const headerProps = getHeaderData(t)

  const menuList = headerProps.links.find(link => link.subMenu)
  return (
    <>
      <MenuDisclosure {...menuState}>
        <Typography>{menuList.title}</Typography>
      </MenuDisclosure>
      <Menu {...menuState} ariaLabel="Menu">
        {menuList.subMenu.map(item => (
          <MenuItem key={item.title} {...item} />
        ))}
      </Menu>
    </>
  )
}

export const Animated = () => {
  const menuState = useMenuState({ animated: 300, loop: true })
  const { t } = useTranslation('header')
  const headerProps = getHeaderData(t)

  const menuList = headerProps.links.find(link => link.subMenu)

  return (
    <>
      <MenuDisclosure {...menuState}>
        <Typography>{menuList.title}</Typography>
      </MenuDisclosure>
      <Menu {...menuState} ariaLabel="Menu">
        {menuList.subMenu.map(item => (
          <MenuItem key={item.title} {...item} />
        ))}
      </Menu>
    </>
  )
}
