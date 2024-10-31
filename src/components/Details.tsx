import { FormEvent, useState } from "react";
import statusEnum from "../Enums/statusEnum";
import MissionDTO from "../DTO/missionDTO";

interface props{
    setMissons:(x:(x:MissionDTO[])=>MissionDTO[])=>void
}

export default function Details({setMissons}:props) {
    const [name, setName] = useState<string>('');
    const [status, setStatus] = useState<string>(statusEnum.Pending);
    const [priority, setPriority] = useState("Low");
    const [description, setDescription] = useState("")

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        (async()=>{
            try {
                const response = await fetch(import.meta.env.VITE_BASE_URL,{
                    method:"POST",
                    body:JSON.stringify({name, status, priority, description}),
                    headers: {"Content-type": "application/json; charset=UTF-8"}
                })
                if (!response.ok){throw new Error("faild post new mission")}
                const newMission = await response.json()
                setMissons(missions=>[...missions, newMission])
            } catch (error: any) {
                console.log(error.message)
            }
        })()
    }
    return (
    <form onSubmit={handleSubmit}>
        <label className="form_itemms" htmlFor="">Name:</label>
        <input className="form_itemms" type="text" onChange={(e)=>{setName(e.target.value)}}/>
        <select className="form_itemms" onChange={(e)=>{setStatus(e.target.value)}}>
            <option value={statusEnum.Pending}>Pending</option>
            <option value={statusEnum.Progress}>In Progress</option>
            <option value={statusEnum.Completed}>Completed</option>
        </select>
        <select className="form_itemms" onChange={(e)=>{setPriority(e.target.value)}}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
        </select>
        <label className="form_itemms" htmlFor="">Describe mission</label>
        <textarea className="form_itemms" cols={40} rows={5} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
        <input className="addmission" type="submit" value="Add mission" />
    </form>
  )
}
