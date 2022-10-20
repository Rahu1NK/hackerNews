import React, { useEffect, useState } from "react"
import { Story } from "../../assets/utils/types"
import {
  fetchBestStoriesId,
  fetchNewStoriesId,
  fetchStories,
  fetchTopStoriesId
} from "../../services/storyService"
import Loader from "../loader/loader"
import prevButton from "../../assets/Icons/prev.png"
import nextButton from "../../assets/Icons/next.png"
import "./newsDisplayer.scss"

const NewsDisplayer = (props: any) => {
  const [lowRange, setLowRange] = useState(0)
  const [highRange, setHighRange] = useState(15)
  const [storiesId, setStoriesId] = useState([] as number[])
  const [stories, setStories] = useState([] as Story[])

  const loadStories = async () => {
    if (props.tab === "new") {
      const newStoriesIdData = await fetchNewStoriesId()
      setStoriesId(newStoriesIdData)
      const newStoryData = await fetchStories(newStoriesIdData.slice(lowRange, highRange))
      setStories(newStoryData)
    }
    if (props.tab === "top") {
      const topStoriesIdData = await fetchTopStoriesId()
      setStoriesId(topStoriesIdData)
      const topStoryData = await fetchStories(topStoriesIdData.slice(lowRange, highRange))
      setStories(topStoryData)
    }
    if (props.tab === "best") {
      const bestStoriesIdData = await fetchBestStoriesId()
      setStoriesId(bestStoriesIdData)
      const bestStoryData = await fetchStories(bestStoriesIdData.slice(lowRange, highRange))
      setStories(bestStoryData)
    }
  }

  const prevStory = () => {
    if (lowRange > 0) {
      setStories([])
      setLowRange(lowRange - 15)
      setHighRange(highRange - 15)
    }
    console.log("Low Range:" + lowRange, "High Range" + highRange)
  }

  const nextStory = () => {
    if (highRange < 500) {
      setStories([])
      setHighRange(highRange + 15)
      setLowRange(lowRange + 15)
    }
    console.log("Low Range:" + lowRange, "High Range" + highRange)
  }

  useEffect(() => {
    loadStories()
  }, [lowRange, highRange])

  return (
    <div>
      <img src={prevButton} alt="prevButton" className="nextButton" onClick={() => prevStory()} />

      <img src={nextButton} alt="nextButton" className="prevButton" onClick={() => nextStory()} />

      {stories.length !== 0 ? (
        stories.map((story, index) => (
          <div key={story.id} className="storyCard">
            <div>{index + lowRange + 1}</div>
            <a href={story.url}>
              <span className="title">{story.title}</span>
            </a>
            <span className="author">{story.author}</span>
          </div>
        ))
      ) : (
        <Loader></Loader>
      )}
    </div>
  )
}
export default NewsDisplayer
