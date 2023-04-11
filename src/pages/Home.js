import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../assets/Styles.css";

 
const Dashboard = () => {
    const navigate=useNavigate();
    const handleBack=()=>{
        navigate(-1);
    }
   
    return(
        <>
            <div className="back" onClick={handleBack}>
                {"< Back"}
                </div>
                <div className="box"> 
                
                <h1 className='text'>
                  Hello World
                </h1>
                </div>
                
           
        </>
    )
}
 
export default Dashboard;