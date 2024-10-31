import MissionDTO from "../DTO/missionDTO"
import Card from "./Card"

interface props{
    missions:MissionDTO[],
    setMissons:(x:(x:MissionDTO[])=>MissionDTO[])=>void
}
export default function Board({missions, setMissons}:props) {
  return (
    <div className="board">
        <h1 style={{color:"red"}}>Missions</h1>
        <div  className="missions">
            {missions.map(mission=><Card key={mission._id} setMissons={setMissons} mission={mission}/>)}
        </div>
    </div>
  )
}
