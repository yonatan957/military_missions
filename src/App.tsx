import { useEffect, useState } from "react"
import MissionDTO from "./DTO/missionDTO"
import Board from "./components/Board";
import Details from "./components/Details";

const BASE_URL="https://reactexambackend.onrender.com/missions/8854554"

function App() {
  const [missions, setMissons] = useState<MissionDTO[]>([]);
  useEffect(()=>{
    (async()=>{
      try {
        const response = await fetch(BASE_URL)
        setMissons(await response.json())
      } catch (error:any) {
        console.log(error.message)
      }
    })()
  },[])
  return (
    <>
      <Details/>
      <Board missions={missions}/>
    </>
  )
}

export default App
