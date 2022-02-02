import { createContext } from "react";

const SimpleContext=createContext({
    getTaskes:[],
    newTask:()=>{},
    getSingleTask:"",
    addNewTask:()=>{},
    handlComplete:()=>{},
    handlDeleteTask:()=>{},
})

export default SimpleContext;