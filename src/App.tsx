import { useRoutes } from "react-router-dom"
import routers from "./router"
import React, { Suspense } from "react"

function App() {
  return <div className="App">
    <Suspense>
      <div>{useRoutes(routers)}</div>
    </Suspense>
  </div>
}

export default App
