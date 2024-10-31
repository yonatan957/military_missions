import MissionDTO from "../DTO/missionDTO"
import statusEnum from "../Enums/statusEnum"

interface props{
    mission:MissionDTO,
    setMissons:(x:(x:MissionDTO[])=>MissionDTO[])=>void
}
export default function Card({mission, setMissons}:props) {
    const color = mission.status == statusEnum.Pending? "rgb(237, 115, 115)" : mission.status == statusEnum.Progress? "rgb(245, 189, 86)":"lightgreen";
    const deleteMission = async ()=>{
        try {
            const response = await fetch(import.meta.env.VITE_BASE_URL +"/"+ mission._id,{
                method:"DELETE",
                body:"",
                headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            if (!response.ok){throw new Error("faild while trying to delete")}
            setMissons(missions => missions.filter(mis => mis._id !== mission._id))
        } catch (error: any) {
            console.log(error.message)
        }
    }
    const updateMission = async()=>{
        try {
            const response = await fetch(import.meta.env.VITE_BASE_URL + "/progress/" + mission._id,{
                method:"POST",
                body:"",
                headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            if(!response.ok){throw new Error("faild while trying to update")}
            const response2 = await fetch(import.meta.env.VITE_BASE_URL)
            setMissons(await response2.json())
        } catch (error) {
            console.log(error)
        }
    }
    return (
    <div className="card" style={{backgroundColor:color}}>
        <div>
            <h1>Name: {mission.name}</h1>
            <h3>Status: {mission.status}</h3>
            <h3>Priority: {mission.priority}</h3>
            <h3>Descriptio: {mission.description}</h3>
        </div>
        <div>
            <button style={{backgroundColor:"red", marginRight:"10px"}} onClick={deleteMission}>Delete</button>
            <button style={mission.status == statusEnum.Completed?{display:"none"}:{backgroundColor:"green"}} onClick={updateMission}>Update</button>
        </div>
    </div>
  )
}
