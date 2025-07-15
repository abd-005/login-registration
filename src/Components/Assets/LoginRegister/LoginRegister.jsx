import react from 'react'
import './LoginRegister.css'
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const LoginRegister = () =>{
    return(
        <div className='wrapper'>
            <div className="form-box login">
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input   type="text" placeholder='Username' required/>
                        <FaUser className='icon'/>
                    </div>
                    <div className="input-box"><input type="password" placeholder='Password' required/>
                    <FaLock className='icon'/>
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox"/>Remember me</label>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit">Login</button>

                    <div className="register-link">
                        <p>Don't have an account? <a href="#">Register</a></p>
                        
                    </div>
                </form>
            </div>
            <div className="form-box registration">
                <form action="">
                    <h1>Registration</h1>
                    <div className='fullName'>
                        <div className="input-box firstName">
                        <input   type="text" placeholder='First Name' required/>
                        
                    </div>
                    <div className="input-box lastName">
                        <input   type="text" placeholder='Last Name' required/>
                        
                    </div>
                    </div>
                    <div className="input-box">
                        <input   type="text" placeholder='Username' required/>
                        <FaUser className='icon'/>
                    </div>
                    <div className="input-box">
                        <input   type="email" placeholder='Email' required/>
                        <FaEnvelope  className='icon'/>
                    </div>
                    <div className="input-box"><input type="password" placeholder='Password' required/>
                    <FaLock className='icon'/>
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox"/>Remember me</label>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit">Login</button>

                    <div className="register-link">
                        <p>Don't have an account? <a href="#">Register</a></p>
                        
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginRegister