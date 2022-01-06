import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import get from 'utils/get'

const MeiliSearchName = styled.div`
  margin-left: 12px;
  @media (min-width: ${get('breakpoints.lg')}) {
    display: none;
  }

  @media (min-width: ${get('breakpoints.xl')}) {
    display: block;
  }
`

const Logos = styled.a`
  display: flex;
  align-items: center;
  outline: none;
`

const Logo = () => (
  <Logos href="/">
    <Image
      src="/images/meili-logo.svg"
      height={35}
      width={60}
      layout="fixed"
      alt="MeiliSearch Logo"
    />
    <MeiliSearchName>
      <Image
        src="/images/meilisearch.svg"
        height={25}
        width={164}
        layout="fixed"
        alt="MeiliSearch"
      />
    </MeiliSearchName>
  </Logos>
)

export default Logo
