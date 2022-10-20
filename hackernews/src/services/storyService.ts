import { Story } from "../assets/utils/types"
const hackerNews = " https://hacker-news.firebaseio.com/v0/"

//To fetch New Stories ID
export const fetchNewStoriesId = async (): Promise<number[]> => {
  const response = await fetch(`${hackerNews}/newstories.json`)
  const newStoriesIds = await response.json()
  return newStoriesIds
}

//To fetch Top Stories Id
export const fetchTopStoriesId = async (): Promise<number[]> => {
  const response = await fetch(`${hackerNews}/topstories.json`)
  const topStoriesIds = await response.json()
  return topStoriesIds
}

//To fetch Best Stories ID
export const fetchBestStoriesId = async (): Promise<number[]> => {
  const response = await fetch(`${hackerNews}/beststories.json`)
  const bestStoriesIds = await response.json()
  return bestStoriesIds
}

export const fetchStory = async (id: number): Promise<Story> => {
  const response = await fetch(`${hackerNews}/item/${id}.json`)
  const storyData = await response.json()

  const story: Story = {
    id: storyData.id,
    author: storyData.by,
    title: storyData.title,
    url: storyData.url
  }
  return story
}

//To fetch Stories solving all the promises returned by storiesIds
export const fetchStories = async (ids: number[]): Promise<Story[]> => {
  const stories = await Promise.all(ids.map(fetchStory))
  return stories
}
