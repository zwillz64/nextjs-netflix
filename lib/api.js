const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query, { variables } = {}) {
	const headers = { 'Content-Type': 'application/json' }

	const res = await fetch(API_URL, {
		method: 'POST',
		headers,
		body: JSON.stringify({
			query,
			variables,
		}),
	})

	const json = await res.json()
	if (json.errors) {
		console.error(json.errors)
		throw new Error('Failed to fetch API')
	}
	return json.data
}

export async function getAllMovies() {
	const data = await fetchAPI(`
		query MyQuery {
			titles {
				nodes {
					id
					title
					slug
					featuredImage {
						node {
							id
                            altText
							sourceUrl
                            mediaDetails {
                                height
                                width
                            }
						}
					}
				}
			}
		}
	`)
	return data.titles
}

export async function getAllMovieSlugs() {
	const data = await fetchAPI(`
		query MyQuery {
			titles {
				edges {
					node {
						id
						slug
					}
				}
			}
		}
	`)
	return data?.titles
}

export async function getMovieBySlug(id) {
	const data = await fetchAPI(`
	query MyQuery($id: ID!) {
		title(id: $id, idType: SLUG) {
		  id
		  title
		  content
		  featuredImage {
			node {
			  altText
			  mediaDetails {
				height
				width
			  }
			  sourceUrl
			}
		  }
		  titleInformation {
			castMembers {
				... on Person {
				  id
				  featuredImage {
					node {
					  altText
					  mediaDetails {
						height
						width
					  }
					  sourceUrl
					}
				  }
				  title
				}
			  }
			  director {
				... on Person {
				  id
				  featuredImage {
					node {
					  altText
					  mediaDetails {
						height
						width
					  }
					  sourceUrl
					}
				  }
				  title
				}
			  }  
			duration
			year
			youtubeUrl
			logo {
			  altText
			  mediaDetails {
				height
				width
			  }
			  sourceUrl
			}
			storyArt {
			  altText
			  mediaDetails {
				height
				width
			  }
			  sourceUrl
			}
		  }
		  ratings {
			edges {
			  node {
				id
				name
			  }
			}
		  }
		  genres {
			edges {
			  node {
				id
				name
			  }
			}
		  }
		}
	  }
	  `, {
		variables: {
			"id" : id
		}
	})
	return data?.title

}
export function getNavLinks() {
	return [
		{
			label: "Home",
			path: "/"
		},
		{
			label: "Shows",
			path: "/tv"
		},
		{
			label: "Movies",
			path: "/movies"
		},
		{
			label: "New & Popular",
			path: "/new"
		},
		{
			label: "My List",
			path: "/my-list"
		},
		{
			label: "Watch Again",
			path: "/watch-again"
		},
	]

}