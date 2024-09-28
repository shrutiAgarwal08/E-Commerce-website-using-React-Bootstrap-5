import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
const SignUpModal = () => {
    const [username, setUsername] = useState('');
    const[userPassword,setUserPassword]=useState('');
    const [MailId,setMailId]=useState('');
    const navigate=useNavigate();
    const handleSignUp = (e) => {
        e.preventDefault();
        if (username !== '' && userPassword!=='' && MailId!=='') {
            alert(username + " Login successful");
            navigate('/Login');
        } else {
            alert("Please enter username,Email-Id and password");
        }
    }
    const getUsername = (val1) => {
        setUsername(val1.target.value);
    }
    const getUserPassword=(val2)=>{
        setUserPassword(val2.target.value);
    }
    const getMailId=(val)=>{
        setMailId(val.target.value);
      }
    return (
        <div className='col-md-4 col-10 col-sm-10 bg-dark items-center mx-auto m-5 rounded p-3'>
            <div className='flex flex-column gap-5 text-white'>
                <div className='bg-indigo-600 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4 '>
                    <p className='fw-bold pb-2'>Sign Up</p>
                    <form onSubmit={handleSignUp} >
                        <input className="mb-3 form-control " type="text" placeholder=' Enter Username' onChange={getUsername} required/>
                        <input className="mb-3 form-control " type='email' placeholder=' Enter E-mail ID' onChange={getMailId} required />
                        <input className="mb-3 form-control " type='password' placeholder=' Enter Password' onChange={getUserPassword} required />
                        <button className='mb-3 flex form-control border-0' type="submit" style={{ "backgroundColor": "darksalmon"}}>Create Account</button>
                        <p>Already have an account?<Link to='/Login'><button className='bg-transparent border-0' style={{ "color": "darksalmon" }}>Login here</button></Link></p>
                        <div className='form-check'>
                        <small><input type="checkbox" className="form-check-input" id="Check1" />
                           <label className="form-check-label mb-3" for="Check1"> By continuing, I agree to the terms and conditions and the privacy policy  </label></small> 
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default SignUpModal;






