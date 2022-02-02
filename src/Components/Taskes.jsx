import { useContext } from "react";
import SimpleContext from './../context/contaxt';
import Taske from './Taske';

const Taskes = () => {
    const context=useContext(SimpleContext);
    const {getTaskes}=context;
    return (
        <div> {getTaskes.length > 0 ? (
            getTaskes.map((t)=>{
              return(
                  <div className="pt-3">
                     <Taske
                key={t.id}
                text={t.text}
                complete={t.completed}
                completed={()=>context.handlComplete(t.id)}
                deleted={()=>context.handlDeleteTask(t.id)}
                >
                </Taske>  
                  </div>
               
              )
            })
            )
            :
           ( <div className="pt-5">
                      <p className="lead bg-warning w-75 m-auto p-4 fw-bolder rounded-pill">
            هیچ کاری برای نمایش وجود ندارد دوست من !
                      </p>
                    </div>)
                }
          
            
        </div>  );
    }
     

 
export default Taskes;