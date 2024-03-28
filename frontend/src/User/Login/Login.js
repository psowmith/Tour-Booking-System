import './Login.css';
import React, { useRef } from 'react';
import Message from '../../Welcomepage/Message';
import { useNavigate } from 'react-router-dom';
import Logindata from './Logindata';
import signupapi from './signupapi';
import signinapi from './signinapi';
const Login = () => {
        const navigate=useNavigate();
        const {isSliding, setIsSliding} = Logindata();
        const {isloginfail,setloginfail}=Logindata();
        const {isloginfaildetail,setloginfaildetail}=Logindata();
        const {issignup,setsignup}=Logindata();
        const {issignup1,setsignup1}=Logindata();
        const {issuccesslogin,setsuccesslogin}=Logindata();
        const {username1,setusername1}=Logindata();
        const {admin,setadmin}=Logindata();
        const password=useRef();
        const username=useRef();
        const email=useRef();
        const password1=useRef();
        const handleSignupClick = () => {
            setIsSliding(true);
          };
          const handleSignupClick1 = () => {
              setIsSliding(false);
            };
        const dataupdate=async ()=>{
            const user = username.current.value;
            const pass = password.current.value;
            const pass1 = password1.current.value;
            const mail = email.current.value;
            signupapi({user,pass,pass1,mail,setIsSliding,setsignup,setsignup1,});
        }
        const loguser=useRef();
        const logpass=useRef();
        const logincheck=async ()=>{
            const u1 = loguser.current.value;
            const p2 = logpass.current.value;
            signinapi({u1,p2,setloginfail,setloginfaildetail,setsuccesslogin,setusername1,setadmin});
        }
      return(
        <div>
            {admin ? (navigate('/admin')) : issuccesslogin ? (navigate('/homepage',{state:username1})):(<div style={{"marginTop":"0%"}}>
                <div className={`${isSliding ? 'slide' : 'body'}`}>
                    <div className='container'>
                        <div className='box signin'>
                            <h2>Already Have an Account</h2>
                            <button className='signinBtn' onClick={handleSignupClick1}>Sign in</button>
                        </div>
                        <div className='box signup'>
                            <h2>Don't Have an Account</h2>
                            <button className='signupBtn' onClick={handleSignupClick}>Sign up</button>
                        </div>
                        <div className='formBx'>
                            <div className='form signinform'>
                                <form onSubmit={(e)=>{e.preventDefault()}}>
                                    <h3>Sign In</h3>
                                    <input type='text' placeholder='Username' ref={loguser}/>
                                    <input type='password' placeholder='Password' ref={logpass}/>
                                    <input type='submit' value="Login" onClick={logincheck}/>
                                    {isloginfail && <Message message={isloginfaildetail}/>}
                                </form>
                            </div>
                            <div className='form signupform'>
                                <form onSubmit={(e)=>{e.preventDefault()}}>
                                    <h3>Sign up</h3>
                                    <input type='text' placeholder='Username' ref={username} required />
                                    <input type='text' placeholder='Email Address' ref={email} required />
                                    <input type='password' placeholder='Password' ref={password} required />
                                    <input type='password' placeholder='Confirm' ref={password1} required />
                                    <input type='submit' value="Register" onClick={dataupdate} required />
                                    {issignup && <Message message="new password and re enter password is not same" />}
                                    {issignup1 && <Message message="please enter the details..." />}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>)}
        </div>
      )
}
export default Login