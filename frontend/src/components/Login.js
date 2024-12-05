import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from '../api/axiosConfig';

const Login = () => {
    const [username, setUsername] = useState('');
    const[userPassword,setUserPassword]=useState('');
    const navigate=useNavigate();
    function handleLogin(e){
        e.preventDefault();
        if (username !== '' && userPassword!=='') {
            const logindata={ mailId:username,userPassword:userPassword};

            axiosInstance.post('http://localhost:8080/api/users/login',logindata)
            .then(
                function(response){
                    alert(response.data);
                    navigate('/');
                })
                .catch(function(error){
                    alert('Login failed. '+error.response.data);
                });
            
        } else {
            alert("Please enter both username and password");
        }
    }
    const getUsername = (val1) => {
        setUsername(val1.target.value);
    }
    const getUserPassword=(val2)=>{
        setUserPassword(val2.target.value);
    }

    return (
        <div className='col-10 col-sm-10 col-md-4 bg-dark flex justify-center items-center mx-auto m-3 rounded p-3 my-5'>
            <div className=' flex flex-col gap-5 text-white'>
                <div className='bg-indigo-600 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4 '>
                    <p className='fw-bold pb-2 fs-5'>LOG IN</p>
                    <form onSubmit={handleLogin}>
                        <input className="mb-3 form-control " type='text' placeholder=' Enter Username' onChange={getUsername} required />
                        <input className="mb-3 form-control " type='password' placeholder=' Enter Password' onChange={getUserPassword} required />
                        <button className='mb-3 flex form-control border-0' type='submit' style={{ "backgroundColor": "darksalmon" }}>Log In</button>
                        <p>Don't have an account?<Link to='/SignUpModal' ><button className='bg-transparent border-0 ' style={{ "color": "darksalmon" }}>Create one</button></Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login