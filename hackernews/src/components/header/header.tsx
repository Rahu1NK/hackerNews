import React from "react"
import Logo from "../../assets/Icons/hackerNewsLogo.png"
import "./header.scss"
const Header = (props: any) => {
  return (
    <div className="logo">
      <img className="logoImage" src={Logo} alt="logo" />
      <div className="heading">Hacker News</div>
      <div className="tabAligner">
        <div
          className={props.tabSelected === "new" ? "activeTab" : "tab"}
          onClick={() => props.setTab("new")}>
          New Stories
        </div>
        <div
          className={props.tabSelected === "top" ? "activeTab" : "tab"}
          onClick={() => props.setTab("top")}>
          Top Stories
        </div>
        <div
          className={props.tabSelected === "best" ? "activeTab" : "tab"}
          onClick={() => props.setTab("best")}>
          Best Stories
        </div>
      </div>
    </div>
  )
}
export default Header
