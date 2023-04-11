import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../components/Firebase';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import "../assets/Styles.css";
 
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
 
    return(
        <>
            
                    <div className='box'>                                            
                        <h2 className="text">Login</h2>                       
                                                       
                        <form>                                              
                            <div style={{padding:"1rem"}}>
                                <label htmlFor="email-address" >
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"    
                                                                
                                    required                                                                                
                                    placeholder="Email address"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>

                            <div className='box1'>
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"                                    
                                    required                                                                                
                                    placeholder="Password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                                                
                            <div className='box1'>
                                <Button
                                          variant='contained'   
                                          color='primary'             
                                    onClick={onLogin}                                        
                                >      
                                    Login                                                                  
                                </Button>
                            </div>                               
                        </form>
                       
                        <p>
                            No account yet? {' '}
                            <NavLink to="/">
                                Sign up
                            </NavLink>
                        </p>
                                                   
                    </div>
                
        </>
    )
}
 
export default Login