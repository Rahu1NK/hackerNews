import React, { useState } from "react"
import Header from "../../components/header/header"
import NewsDisplayer from "../../components/newsDisplayer/newsDisplayer"
import "./home.scss"
const Home = () => {
  const [tabSelected, setTabSelected] = useState("new")
  const setTab = (tab: string) => {
    setTabSelected(tab)
  }
  return (
    <div className="homeContainer">
      <Header tabSelected={tabSelected} setTab={setTab}></Header>
      {tabSelected === "new" ? <NewsDisplayer tab="new"></NewsDisplayer> : null}
      {tabSelected === "top" ? <NewsDisplayer tab="top"></NewsDisplayer> : null}
      {tabSelected === "best" ? <NewsDisplayer tab="best"></NewsDisplayer> : null}
    </div>
  )
}
export default Home
