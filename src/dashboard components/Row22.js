import React from 'react'
import { Paper } from '@mui/material'
import ZoomInMapIcon from '@mui/icons-material/ZoomInMap';
import StarIcon from '@mui/icons-material/Star';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts'
import { pieChart } from '../charts/piechart';


const Row22 = () => {
    return (
        <div className='dashboard22'>
            <Paper elevation={3} >
                <div className='zoomTitle'>
                    <h5 className='Title' >Booked Meeting Rooms</h5>
                    <ZoomInMapIcon />
                </div>

                <HighchartsReact
                    highcharts={Highcharts}
                    options={pieChart()} />

            </Paper>
            <Paper elevation={3}>
                <div className='zoomTitle' >
                    <h5 className='Title' >Air Quality Index</h5>
                    <ZoomInMapIcon />
                </div>
                <div className='airIndex'>
                    <div style={{ color: "red" }}>
                        910
                    </div>
                    <div style={{ color: "green" }}>
                        24
                    </div>
                    <div style={{ color: "green" }}>
                        49
                    </div>
                    <div style={{ color: "orange" }}>
                        13
                    </div>
                    <div style={{ color: "green" }}>
                        949
                    </div>
                    <div style={{ color: "orange" }}>
                        48
                    </div>
                </div>
            </Paper>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <Paper elevation={3} sx={{ marginRight: "10px" }}>
                    <div className='zoomTitle' >
                        <h5 className='Title' >WashRoom</h5>
                        <ZoomInMapIcon />
                    </div>

                    <HighchartsReact
                        highcharts={Highcharts}
                        options={pieChart()} />

                </Paper>
                <Paper elevation={3} >
                    <div className='zoomTitle' >
                        <h5 className='Title' >WashRoom (AQ1)</h5>
                        <ZoomInMapIcon />
                    </div>

                    <HighchartsReact
                        highcharts={Highcharts}
                        options={pieChart()} />

                </Paper>
            </div>

            <Paper elevation={3}>
                <div className='zoomTitle'>
                    <h5 className='Title' >Feedback</h5>
                    <ZoomInMapIcon />
                </div>
                <div className='reviews'>
                    <StarIcon color='primary' />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </div>
                <div className='feedbackbody'>
                    <p>4.6</p>
                    <p style={{ marginTop: "4px" }}>Average Ratings</p>
                </div>
            </Paper>
        </div>
    )
}

export default Row22