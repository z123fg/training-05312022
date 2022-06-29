import React from "react"
import GlobalStyle from "./styles/GlobalStyle"
import { Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import Home from "./routes/Home"

const App = () => {
  return(
    <>
      <GlobalStyle />
      <Routes>
        <Route path={`/`} element={<Layout />}>
          <Route index element={<Home name="Andrew" />} />
        </Route>
      </Routes>
    </>
  )
}

export default App