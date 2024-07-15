import React, { Suspense } from "react"
import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom"
import { MainPage } from "./components/MainPage"
import { MainLayout } from "./components/MainLayout"

const About = React.lazy(() =>
  import(/*webpackChunkName:"About"*/ "./components/About").then(({ About }) => ({ default: About })),
)
const Contacts = React.lazy(() =>
  import(/*webpackChunkName:"Contacts"*/ "./components/Contacts").then(({ Contacts }) => ({ default: Contacts })),
)
const Cabinet = React.lazy(() =>
  import(/*webpackChunkName:"Cabinet"*/ "./components/Cabinet").then(({ Cabinet }) => ({ default: Cabinet })),
)

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<MainPage />} />
            <Route
              path="/about"
              element={
                <Suspense fallback={<div>Идёт загрузка...</div>}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="/contacts"
              element={
                <Suspense fallback={<div>Идёт загрузка...</div>}>
                  <Contacts />
                </Suspense>
              }
            />
            <Route
              path="/cabinet"
              element={
                <Suspense fallback={<div>Идёт загрузка...</div>}>
                  <Cabinet />
                </Suspense>
              }
            />
          </Route>
        </Routes>
        <Footer />
      </div>
    )
  }
}
export default App
