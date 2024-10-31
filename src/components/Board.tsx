import MissionDTO from "../DTO/missionDTO"
import Card from "./Card"

interface props{
    missions:MissionDTO[]
}
export default function Board({missions}:props) {
  return (
    <div>
        <h1 style={{color:"red"}}>Mission</h1>
        {missions.map(mission=><Card mission={mission}/>)}
    </div>
  )
}
