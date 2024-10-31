import MissionDTO from "../DTO/missionDTO"
import statusEnum from "../Enums/statusEnum"

interface props{
    mission:MissionDTO
}
export default function Card({mission}:props) {
    const color = mission.status == statusEnum.Pending? "red" : mission.status == statusEnum.Progress? "orange":"green";
    return (
    <div style={{backgroundColor:color}}>
        <div >
            <h1>Name: {mission.name}</h1>
            <h3>Status: {mission.status}</h3>
            <h3>Priority: {mission.priority}</h3>
            <h3>Descriptio: {mission.description}</h3>
        </div>
        <div>
            <button style={{backgroundColor:"red"}}>Delete</button>
            <button style={{backgroundColor:"green"}}>Update</button>
        </div>
    </div>
  )
}
