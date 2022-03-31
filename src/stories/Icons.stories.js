import React from 'react'
import {
  Api as ApiIcon,
  Arrow as ArrowIcon,
  Blog as BlogIcon,
  Chat as ChatIcon,
  Cross as CrossIcon,
  Documentation as DocumentationIcon,
  Earth as EarthIcon,
  Excluded as ExcludedIcon,
  Filter as FilterIcon,
  Github as GithubIcon,
  GithubOutlined as GithubOutlinedIcon,
  Guides as GuidesIcon,
  Hamburger as HamburgerIcon,
  Included as IncludedIcon,
  Key as KeyIcon,
  Lightning as LightningIcon,
  Linkedin as LinkedinIcon,
  MagnifyingGlass as MagnifyingGlassIcon,
  Plug as PlugIcon,
  Puzzle as PuzzleIcon,
  RightArrow as RightArrowIcon,
  Roadmap as RoadmapIcon,
  Roadmap2 as Roadmap2Icon,
  Slack as SlackIcon,
  SortBy as SortByIcon,
  Star as StarIcon,
  Twitter as TwitterIcon,
  Typo as TypoIcon,
  Wrench as WrenchIcon,
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

export const Api = () => <ApiIcon height={56} />
export const Arrow = () => <ArrowIcon height={56} />
export const Blog = () => <BlogIcon height={56} />
export const Chat = () => <ChatIcon height={56} />
export const Cross = () => <CrossIcon height={56} />
export const Documentation = () => <DocumentationIcon height={56} />
export const Earth = () => <EarthIcon height={56} />
export const Excluded = () => <ExcludedIcon height={56} />
export const Filter = () => <FilterIcon height={56} />
export const Github = () => <GithubIcon height={56} />
export const GithubOutlined = () => <GithubOutlinedIcon height={56} />
export const Guides = () => <GuidesIcon height={56} />
export const Hamburger = () => <HamburgerIcon height={56} />
export const Included = () => <IncludedIcon height={56} />
export const Key = () => <KeyIcon height={56} />
export const Lightning = () => <LightningIcon height={56} />
export const Linkedin = () => <LinkedinIcon height={56} />
export const MagnifyingGlass = () => <MagnifyingGlassIcon height={56} />
export const Plug = () => <PlugIcon height={56} />
export const Puzzle = () => <PuzzleIcon height={56} />
export const RightArrow = () => <RightArrowIcon height={56} />
export const Roadmap = () => <RoadmapIcon height={56} />
export const Roadmap2 = () => <Roadmap2Icon height={56} />
export const Slack = () => <SlackIcon height={56} />
export const SortBy = () => <SortByIcon height={56} />
export const Star = () => <StarIcon height={56} />
export const Twitter = () => <TwitterIcon height={56} />
export const Typo = () => <TypoIcon height={56} />
export const Wrench = () => <WrenchIcon height={56} />
