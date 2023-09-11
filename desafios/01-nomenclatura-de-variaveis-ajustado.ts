const categories = [
  {
    categoryName: 'User',
    followersCount: 5
  },
  {
    categoryName: 'Friendly',
    followersCount: 50,
  },
  {
    categoryName: 'Famous',
    followersCount: 500,
  },
  {
    categoryName: 'SuperStar',
    followersCount: 1000,
  },
]

export default async function getData(req, res) {
  const githubUsername = String(req.query.username)

  if (!githubUsername) {
    return res.status(400).json({
      message: `Please provide a username to search on the GitHub API`
    })
  }

  const response = await fetch(`https://api.github.com/users/${githubUsername}`);

  if (response.status === 404) {
    return res.status(400).json({
      message: `User with the username "${githubUsername}" not found`
    })
  }

  const userData = await response.json()

  const sortedCategories = categories.sort((a, b) =>  b.followersCount - a.followersCount); 

  const userCategory = sortedCategories.find(category => userData.followers > category.followersCount)

  const result = {
    githubUsername,
    userCategory: userCategory.categoryName
  }

  return result
}

getData({ query: {
  username: 'josepholiveira'
}}, {})
