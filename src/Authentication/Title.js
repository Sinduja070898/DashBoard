import React from 'react'

const Title = () => {
    if(window!==undefined){
        return ((window.location.href).includes("login")) ? <h1>Login</h1> :<h1>Register</h1>}
}

export default Title