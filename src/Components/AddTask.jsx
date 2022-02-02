import { useContext } from 'react/cjs/react.development';
import '../style.css';
import SimpleContext from './../context/contaxt';

const AddTask = () => {
    const context =useContext(SimpleContext);
    const add=()=>{
        context.addNewTask();
    }
    return ( <div className="pt-5">

       
        <form className="inp-box" onSubmit={e => e.preventDefault}>
        <input type="text" className="input-group-sm inp" value={context.getSingleTask} onChange={context.newTask} placeholder="کار جدید خود را اضافه کنید" />
        <i className="fas fa-save fa-2x" type="submit" onClick={add} ></i>
        </form>
        </div> );
}
 
export default AddTask;