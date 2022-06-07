
import { Navbar } from '../Navbar/Navbar'
import  '../Signup/Signup.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

export const Signin = () => {

    const navigate = useNavigate();

    const [errors, setErrors] = useState('')
    const [userData, setData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({...userData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/signin', userData).then((res) => {
        if(res.data.mess) {
            console.log(res.data.mess)
            return setErrors(res.data.mess)
        } else {
            console.log(res.data)
            sessionStorage.setItem('userId', res.data.id)
            navigate('/')
        }
        }).catch((err) => {
            console.log('error', err.message)
        })
    }
    return (
        <>
        <Navbar></Navbar>
        <div className='mainparent'>
        <div className="parent">
            <div className="offerimage"></div>
            <div className="userform">
                <form onSubmit={handleSubmit}>
                    <label id='inputlabel'>Email</label>
                    <br />
                    <input 
                    name='email'
                    value={userData.email}
                    onChange={(e) => handleChange(e)}
                    id='inputbox' type="text" placeholder="Enter Email" />
                    <br />
                    <label id='inputlabel'>Password</label>
                    <br />
                    <input id='inputbox' 
                    name='password'
                    value={userData.password}
                    onChange={(e) => handleChange(e)}
                    type="password" placeholder="Enter Password" />
                    <br />
                    <label className='lastlabel'>By continuing, I agree to the <span className='red'>Terms of Use</span>&<span className='red'>Privacy 
                    <br></br>Policy</span></label>
                    <br />
                    {errors !== ''?<h5>{errors}</h5>:''}
                    <button className="buttonsignup">Signin</button>
                    <label className='lastlabel'>Not  have account? <span className='red' onClick={() => navigate('/signup')}> 
                    Signup</span></label>
                </form>
            </div>
        </div>
        </div>
        </>
    )
}