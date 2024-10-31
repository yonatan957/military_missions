import statusEnum from "../Enums/statusEnum";

export default interface MissionDTO{
    name:string,
    status:statusEnum,
    priority:string,
    description:string,
    _id:string
}