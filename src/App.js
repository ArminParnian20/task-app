import { useState } from 'react';
import '../src/style.css'
import AddTask from './Components/AddTask';
import SimpleContext from './context/contaxt';
import Taskes from './Components/Taskes';
import { Toaster,toast } from 'react-hot-toast';


const App = () => {
    const [getTaskes,setTaskes]=useState([]);
    const [getSingleTask,setSingleTask]=useState("");

    const newTask= event => {
       setSingleTask(event.target.value);
    }
    const addNewTask =()=>{
       const taskes=[...getTaskes];
       const newTask={
           id:Math.floor(Math.random()*10000),
           text:getSingleTask,
           completed:false,
       };
       if(getSingleTask!== "" && getSingleTask !==" "){
           taskes.push(newTask);
           setTaskes(taskes);
           setSingleTask("");
           toast.success("یک کار با موفیقت اضافه شد",{
               style:{
                background:'#333',
                color:'#fff'
               }
           })
       }
    }
    const handlComplete=(id)=>{
        const taskes = [...getTaskes];
        const index=taskes.findIndex((t)=>t.id===id);
        if(!taskes[index].completed){
   toast.success("یک کار انجام شد",{
            style:{
             background:'#333',
             color:'#fff'
            }})
        }else{
            toast.error("این کار هنوز انجام نشده است!",{
                style:{
                 background:'#333',
                 color:'#fff'
                }})    
        }
        taskes[index].completed =! taskes[index].completed;
        setTaskes(taskes);
     
    }
    const handlDeleteTask=(id)=>{
        let taskes = [...getTaskes];
        taskes=taskes.filter((t)=>t.id!==id);
        setTaskes(taskes);
        toast.success("یک کار حذف شد",{
            style:{
             background:'#333',
             color:'#fff'
            }})
     
   }
    return ( 
        <SimpleContext.Provider
        value={{getTaskes:getTaskes,newTask:newTask,getSingleTask:getSingleTask,
        addNewTask:addNewTask,handlComplete:handlComplete,handlDeleteTask:handlDeleteTask}}>
            <div className="parent">
     <AddTask></AddTask>
     <Taskes></Taskes> 
  
            </div>
        <Toaster
        position="top-left"/>
        </SimpleContext.Provider>
     );
}
 
export default App;