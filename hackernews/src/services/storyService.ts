import { Story } from "../assets/utils/types"
import axios from "axios"
const hackerNews = " https://hacker-news.firebaseio.com/v0/"

export const fetchNewStoriesId = async (): Promise<number[]> => {
  const response = await fetch(`${hackerNews}/topstories.json`)
  const topStoriesIds = await response.json()
  return topStoriesIds
}

export const fetchNewStory = async (id: number): Promise<Story> => {
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

export const fetchNewStories = async (ids: number[]): Promise<Story[]> => {
  const stories = await Promise.all(ids.map(fetchNewStory))
  return stories
}
