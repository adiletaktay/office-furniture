import React from "react"
import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom"
import { About } from "./components/About"
import { Cabinet } from "./components/Cabinet"
import { Contacts } from "./components/Contacts"
import { MainPage } from "./components/MainPage"
import MainLayout from "./components/MainLayout"

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/cabinet" element={<Cabinet />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    )
  }
}

export default App
