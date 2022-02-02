import { useContext } from 'react/cjs/react.development';
import SimpleContext from './../context/contaxt';
import '../style.css';
import { toast, ToastContainer } from 'react-toastify';

const Taske = ({text,complete,completed,deleted}) => {
    const context=useContext(SimpleContext)
return ( <div className="bg-white w-75 rounded-3 m-auto p-3">
        {complete? (
             <del className="border-t">{text}
                 <div className="icon-box">
                <i className="fas fa-check-circle text-success" onClick={completed}></i>
                <i className="fas fa-trash-alt text-warning" onClick={deleted}></i>
            </div>
             </del>
             
        ):(
            <div className="border-f">
            {text}
            <div className="icon-box">
                <i className="fas fa-check-circle text-danger" onClick={completed}></i>
                <i className="fas fa-trash-alt text-warning" onClick={deleted}></i>
              </div>
        </div> 
        )
        }
  
       
</div> );}

export default Taske;

    
