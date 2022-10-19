import React from "react"
import Home from "./containers/home/home"
import { BrowserRouter as Router } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <Router>
      <Home></Home>
    </Router>
  )
}

export default App
