import React from 'react'
import {
  ApiReference as ApiReferenceIcon,
  Arrow as ArrowIcon,
  Github as GithubIcon,
  GithubOutlined as GithubOutlinedIcon,
  Guides as GuidesIcon,
  Hamburger as HamburgerIcon,
  Integrations as IntegrationsIcon,
  Lightning as LightningIcon,
  Plug as PlugIcon,
  Puzzle as PuzzleIcon,
  Roadmap as RoadmapIcon,
  Star as StarIcon,
  Twitter as TwitterIcon,
  Typo as TypoIcon,
} from 'components/icons'

export default {
  title: 'Components/Icons',
  parameters: {
    layout: 'padded',
  },
  decorators: [
    Story => (
      <div
        style={{
          color: 'white',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export const ApiReference = () => <ApiReferenceIcon height={56} />
export const Arrow = () => <ArrowIcon height={56} />
export const Github = () => <GithubIcon height={56} />
export const GithubOutlined = () => <GithubOutlinedIcon height={56} />
export const Guides = () => <GuidesIcon height={56} />
export const Hamburger = () => <HamburgerIcon height={56} />
export const Integrations = () => <IntegrationsIcon height={56} />
export const Lightning = () => <LightningIcon height={56} />
export const Plug = () => <PlugIcon height={56} />
export const Puzzle = () => <PuzzleIcon height={56} />
export const Roadmap = () => <RoadmapIcon height={56} />
export const Star = () => <StarIcon height={56} />
export const Twitter = () => <TwitterIcon height={56} />
export const Typo = () => <TypoIcon height={56} />
