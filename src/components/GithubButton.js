import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Github, Star } from 'components/icons'
import Typography from 'components/Typography'
import get from 'utils/get'
import { Octokit } from '@octokit/rest'
import React from 'react'
import formatStargazers from 'utils/formatStargazers'

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
  href = 'https://github.com/meilisearch/meilisearch',
  ...props
}) => {
  const [stargazersCount, setStargazersCount] = React.useState(null)

  const octokit = React.useMemo(
    () =>
      new Octokit({
        auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN_FOR_STARGAZERS_COUNT,
      }),
    []
  )

  React.useEffect(() => {
    const getStargazersCount = async () => {
      const repo = await octokit.rest.repos.get({
        owner: 'meilisearch',
        repo: 'meilisearch',
      })
      setStargazersCount(repo.data.stargazers_count)
    }

    getStargazersCount()
  }, [octokit])

  return (
    <GithubLink href={href} rel="noreferrer" target="_blank" {...props}>
      <GithubLogo height={20} />
      {stargazersCount && (
        <>
          <Typography variant="title.caps">
            {formatStargazers(stargazersCount)}
          </Typography>
          <StarIcon />
        </>
      )}
    </GithubLink>
  )
}

GithubButton.propTypes = {
  /**
   * Link to the github repository
   */
  href: PropTypes.string,
}

GithubButton.defaultProps = {
  href: 'https://github.com/meilisearch/meilisearch',
}

export default GithubButton
