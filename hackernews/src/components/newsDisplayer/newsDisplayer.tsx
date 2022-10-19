import React, { useEffect, useState } from "react"
import { Story } from "../../assets/utils/types"
import { fetchNewStoriesId, fetchNewStories } from "../../services/storyService"
import "./newsDisplayer.scss"

const NewsDisplayer = (props: any) => {
  const [newStoriesId, setNewStoriesId] = useState([] as number[])
  const [newStories, setNewStories] = useState([] as Story[])
  const loadStories = async () => {
    const newStoriesIdData = await fetchNewStoriesId()
    setNewStoriesId(newStoriesIdData)
    const newStoryData = await fetchNewStories(newStoriesIdData.slice(0, 10))
    setNewStories(newStoryData)
  }
  useEffect(() => {
    loadStories()
  }, [])
  return (
    <div>
      {newStories.map((story, index) => (
        <div key={story.id}>
          <div>{index + 1}</div>
          <span className="title">{story.title}</span>
        </div>
      ))}
    </div>
  )
}
export default NewsDisplayer
