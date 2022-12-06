import BaseLink from 'components/Link'
import Image from 'components/Image'
import styled from 'styled-components'
import get from 'utils/get'
import Typography from 'components/Typography'

const ImageContainer = styled(BaseLink)`
  display: block;
  position: relative;
  border-width: 5px;
  border-style: solid;
  border-color: ${get('colors.valhalla.700')};
  border-radius: 14px;
  overflow: hidden;
  transition: border-color 300ms;

  &:hover,
  &:focus {
    border-color: ${get('colors.ashes.900')};
  }

  width: 112px;
  height: 112px;
  @media (min-width: ${get('breakpoints.md')}) {
    width: 152px;
    height: 152px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    width: 190px;
    height: 190px;
  }
`

const TeamMemberInfos = styled.div`
  padding: 0 5px;
  display: flex;
  flex-direction: column;
`

const Name = styled(Typography)`
  color: ${get('colors.white')};
`

const Position = styled(Typography)`
  color: ${get('colors.ashes.900')};
`

const TeamMemberCard = ({ teamMember }) => (
  <div>
    <ImageContainer href={teamMember.linkToPublicNotionPage} target="_blank">
      <Image
        src={teamMember.image}
        layout="fill"
        alt={`${teamMember.name} - ${teamMember.position}`}
        loading="eager"
      />
    </ImageContainer>
    <TeamMemberInfos>
      <Name variant="body.m.bold">{teamMember.name}</Name>
      <Position variant="body.xs.default">{teamMember.position}</Position>
    </TeamMemberInfos>
  </div>
)

export default TeamMemberCard
