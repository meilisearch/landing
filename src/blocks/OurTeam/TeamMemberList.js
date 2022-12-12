import TeamMemberCard from './TeamMemberCard'
import Carousel from './Carousel'

const TeamMemberList = ({ carousel, dir, ...props }) => (
  <Carousel $nbSlides={carousel.length} $dir={dir} {...props}>
    {carousel.map((teamMember, index) => (
      <div key={index}>
        <TeamMemberCard
          teamMember={teamMember}
          // Trick to use the GPU for rendering
          style={{ transform: 'translate3d(0, 0, 0)' }}
        />
      </div>
    ))}
  </Carousel>
)

export default TeamMemberList
