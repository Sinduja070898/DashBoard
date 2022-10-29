import React from 'react'
import { Link } from 'react-router-dom'
import Row1 from './dashboard components/Row1';
import Row21 from './dashboard components/Row21';
import Row22 from './dashboard components/Row22';


const DashBoard = () => {
    const handleLogout = () => {
        window.location.href = "http://localhost:3000"
        window.localStorage.setItem("login", "false")
    }
    return (
        <div>
            <Link onClick={handleLogout}>logout</Link>
            <div className="dashboard">
                <Row1 />
                <div className='dashboard2'>
                    <Row21 />
                    <Row22 />
                </div>
            </div>
        </div>
    )
}

export default DashBoard