import React, { useState } from 'react'
import { TextField } from '@mui/material'
import Title from './Title'
import CommonButton from './CommonButton'
import { Link, useNavigate } from 'react-router-dom'
import { fetchRoute } from '../helper functions/helper'
const Form = () => {
    const navigate = useNavigate()
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [registerError, setRegisterError] = useState(false)
    const [loginError, setLoginError] = useState(false)
    const handleUserName = (e) => {
        const val = e.target.value
        setUsername(val)
    }
    const handleEmail = (e) => {
        const val = e.target.value
        setEmail(val)

    }
    const handlePassword = (e) => {
        const val = e.target.value
        setPassword(val)

    }
    const setState = () => {
        setEmail("")
        setPassword("")
        setUsername("")
    }
    const handleSubmit = () => {
        if (!(fetchRoute() === "login")) {
            const formData = {
                userName,
                email,
                password
            }
            const getItem = localStorage?.getItem("users")
            console.log(getItem)
            let filterData
            if (getItem) {
                filterData = JSON.parse(getItem).some((item) => {
                    return (item.userName === formData.userName || item.email === formData.email)
                })
                if (filterData) {
                    setRegisterError(true)
                }
                else {
                    setRegisterError(false)
                    setState()
                    window.localStorage.setItem("users", JSON.stringify([...JSON.parse(getItem), formData]))
                    alert("succesfully registered")
                    navigate("/login")
                }
            } else {
                console.log("Initallist", [formData])
                setRegisterError(false)
                setState()
                navigate("/login")
                window.localStorage.setItem("users", JSON.stringify([formData]))
            }
            console.log("list", JSON.parse(getItem))
        } else {
            const formData = {
                email,
                password
            }
            const getItem = localStorage?.getItem("users")
            const filterData = JSON.parse(getItem).some((item) => {
                return item.email === formData.email && item.password === formData.password
            })
            if (filterData) {
                setLoginError(false)
                localStorage.setItem("login", "true")
                navigate("/dashboard")
            }
            else {
                setLoginError(true)
            }
        }

    }
    return (
        <div className='Main'>
            <Title />
            {loginError && <p style={{ color: "red" }}> email or password is wrong</p>}
            {registerError && <p style={{ color: "red" }}>userName or email already exists</p>}
            <div className='registerMain'>
                {!((window.location.href).includes("login")) && <TextField required id="username" value={userName} label="UserName" variant="outlined" onChange={(e) => { handleUserName(e) }} />}
                <TextField required id="email" value={email} label="email" variant="outlined" onChange={(e) => { handleEmail(e) }} />
                <TextField required id="password" value={password} label="password" variant="outlined" onChange={(e) => { handlePassword(e) }} />
            </div>
            <CommonButton handleSubmit={handleSubmit} />
            {!((window.location.href).includes("login")) && <p>If Already Logged In , please <Link to="/login" className='login'>login</Link> here</p>}

        </div>
    )
}

export default Form