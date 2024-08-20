import { useEffect, useState } from "react"
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";



// export default NewsBoard;
const App = () => {
  return (
    <div>
      <Navbar/>
      <NewsBoard/>
    </div>
  )
}

export default App

