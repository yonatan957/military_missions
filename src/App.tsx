import { useEffect, useState } from "react"
import MissionDTO from "./DTO/missionDTO"
import Board from "./components/Board";
import Details from "./components/Details";


function App() {
  const [missions, setMissons] = useState<MissionDTO[]>([]);
  useEffect(()=>{
    (async()=>{
      try {
        const response = await fetch(import.meta.env.VITE_BASE_URL)
        setMissons(await response.json())
      } catch (error:any) {
        console.log(error.message)
      }
    })()
  },[])
  return (
    <div className="app">
      <Details setMissons={setMissons}/>
      {missions.length?<Board setMissons={setMissons} missions={missions}/>: <div><h1>No missions:</h1></div>}
    </div>
  )
}

export default App
