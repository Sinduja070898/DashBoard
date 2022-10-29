import React from 'react'
import { Button } from '@mui/material'
const CommonButton = ({handleSubmit}) => {
  return (
    <div className='btn'>
         <Button variant="contained" onClick={handleSubmit}>{!((window.location.href).includes("login")) ? "Register":"login"}</Button>
    </div>
  )
}

export default CommonButton