import { Paper } from '@mui/material'
import React from 'react'
import { pieChart } from "../charts/piechart"
import Stack from '@mui/material/Stack';
import PhoneIcon from '@mui/icons-material/Phone';
import ZoomInMapIcon from '@mui/icons-material/ZoomInMap';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { lineChart } from '../charts/linechart'
import Alert from '@mui/material/Alert'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
const Row1 = () => {
    return (
        <div className='dashboard1'>
            <div className='dashboard11'>
                <Paper elevation={3} ><img className='image' src="/sugarloaf-rock-gbdcce8688_640.jpg" alt="pic"></img></Paper>
            </div>
            <div className='dashboard12'>
                <div className='dashboard13'>
                    <Paper elevation={3} className="dashboard131">
                        <div className='zoomTitle'>
                            <h5 className='Title' >Energy Consumption</h5>
                            <ZoomInMapIcon />
                        </div>
                        <h2 style={{ display: "flex", justifyContent: "center", marginTop: "0px" }}>95.7 <br />
                            KW</h2>
                    </Paper>
                    <Paper elevation={3} sx={{ display: "flex", flexDirection: "column" }}>
                        <div className='zoomTitle'>
                            <h4 className='Title' >Energy Sources</h4>
                            <ZoomInMapIcon />
                        </div>
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={pieChart()} />
                    </Paper>
                </div>
                <div className='dashboard14'>
                    <Paper elevation={3} sx={{ display: "flex", flexDirection: "column" }}>

                        <div className='zoomTitle'>
                            <h4 className='Title' >Energy Consumption History</h4>
                            <ZoomInMapIcon />
                        </div>

                        <HighchartsReact
                            highcharts={Highcharts}
                            options={lineChart()} />


                    </Paper></div>
            </div>
            <div >
                <Paper elevation={3} className="alert">
                    <div className='zoomTitle'>
                        <h4 className='Title' >Alerts</h4>
                        <ZoomInMapIcon />
                    </div>
                    <Stack sx={{ width: '90%' }} spacing={2}>
                        <Alert severity="warning" color="primary" sx={{ height: "40px" }}>AirPressure from THINGSEE--AIR<PhoneIcon /><PermContactCalendarIcon /></Alert>
                        <Alert severity="warning" sx={{ height: "40px" }}>lumins from THINGSEE--AIR<PhoneIcon /><PermContactCalendarIcon /></Alert>
                        <Alert severity="warning" sx={{ height: "40px" }}>Tvoc from THINGSEE--AIR<PhoneIcon /><PermContactCalendarIcon /></Alert>
                    </Stack>
                </Paper>
            </div>
        </div>
    )
}

export default Row1