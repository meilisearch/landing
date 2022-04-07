import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Github, Star } from 'components/icons'
import Typography from 'components/Typography'
import get from 'utils/get'

const GithubLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: white;
  padding: 0 8px;
  height: 30px;
  border-radius: 48px;
  border-width: 1px;
  border-style: solid;
  border-color: ${get('colors.valhalla.300')};
  background-color: rgba(0, 0, 0, 0.15);
  transition: border-color 300ms, background-color 300ms;
  outline: none;

  &:focus,
  &:hover {
    border-color: ${get('colors.valhalla.200')};
    background-color: rgba(0, 0, 0, 0.25);
  }
`

const GithubLogo = styled(Github)`
  padding-right: 14px;
  path {
    fill-opacity: 1;
    fill: white;
  }
`

const StarIcon = styled(Star)`
  margin-left: 2px;
  height: 10px;
`

const GithubButton = ({
  count = '',
  href = 'https://github.com/meilisearch/meilisearch',
  ...props
}) => (
  <GithubLink href={href} rel="noreferrer" target="_blank" {...props}>
    <GithubLogo height={20} />
    <Typography variant="preTitle">{count}</Typography>
    <StarIcon />
  </GithubLink>
)

GithubButton.propTypes = {
  /**
   * The number of stargarzers to display
   */
  count: PropTypes.string,
  /**
   * Link to the github repository
   */
  href: PropTypes.string,
}

GithubButton.defaultProps = {
  count: null,
  href: 'https://github.com/meilisearch/meilisearch',
}

export default GithubButton
