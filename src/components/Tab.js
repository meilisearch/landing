import React from 'react'
import styled from 'styled-components'
import {
  Tab as ReakitTab,
  TabList as ReakitTabList,
  TabPanel as ReakitTabPabel,
} from 'reakit/Tab'
import get from 'utils/get'

const Tab = props => <div {...props} />

const TabList = styled(ReakitTabList)`
  button + button {
    margin-left: 32px;
  }
`

const TabElement = styled(ReakitTab)`
  border: 0;
  color: ${get('colors.white')};
  background-color: transparent;
  padding: 0;
  opacity: 0.4;
  transition: opacity 300ms;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  &[aria-selected='true'] {
    opacity: 1;
  }
`

const TabPanel = styled(ReakitTabPabel)``

Tab.TabList = TabList
Tab.Tab = TabElement
Tab.TabPanel = TabPanel

export default Tab
