import { FormEvent, useState } from "react";
import statusEnum from "../Enums/statusEnum";

const BASE_URL="https://reactexambackend.onrender.com/missions/8854554"

export default function Details() {
    const [name, setName] = useState<string>('');
    const [status, setStatus] = useState<string>(statusEnum.Pending);
    const [priority, setPriority] = useState("Low");
    const [description, setDescription] = useState("")
    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        (async()=>{
            const response = await fetch(BASE_URL,{
                method:"POST",
                body:JSON.stringify({name, status, priority, description}),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            if (!response.ok){throw new Error("faild post new mission")}
        })()
    }
    return (
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
        <select onChange={(e)=>{setStatus(e.target.value)}}>
            <option value={statusEnum.Pending}>Pending</option>
            <option value={statusEnum.Progress}>In Progress</option>
            <option value={statusEnum.Completed}>Completed</option>
        </select>
        <select onChange={(e)=>{setPriority(e.target.value)}}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
        </select>
        <label htmlFor="">Describe mission</label>
        <textarea cols={40} rows={5} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
        <input type="submit" value="Add mission" />
    </form>
  )
}
