const getStargazersCount = async () => {
  try {
    const res = await fetch(
      'https://api.github.com/repos/meilisearch/MeiliSearch'
    )
    const { stargazers_count = null } = await res.json()
    return stargazers_count
  } catch (err) {
    return err
  }
}

export default getStargazersCount
