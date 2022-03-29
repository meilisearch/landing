const formatStargazers = count => (count ? `${(count / 1000).toFixed(1)}K` : '')

export default formatStargazers
