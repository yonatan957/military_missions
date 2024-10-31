import MissionDTO from "../DTO/missionDTO"
import Card from "./Card"

interface props{
    missions:MissionDTO[],
    setMissons:(x:(x:MissionDTO[])=>MissionDTO[])=>void
}
export default function Board({missions, setMissons}:props) {
  return (
    <div>
        <h1 style={{color:"red"}}>Mission</h1>
        {missions.map(mission=><Card key={mission._id} setMissons={setMissons} mission={mission}/>)}
    </div>
  )
}
