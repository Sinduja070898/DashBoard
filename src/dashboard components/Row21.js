import { Paper } from '@mui/material'
import React from 'react'
import { areaChart } from '../charts/areachart'
import { barChart } from '../charts/barchart'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import ZoomInMapIcon from '@mui/icons-material/ZoomInMap';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import HeatPumpIcon from '@mui/icons-material/HeatPump';
const Row21 = () => {
  return (
    <div className='dashboard21'>
      <Paper elevation={3}>
        <div className='zoomTitle' >
          <h5 className='Title' >Total Occupancy <span style={{ color: "green" }}>(Now-12)</span></h5>
          <ZoomInMapIcon />
        </div>

        <HighchartsReact
          highcharts={Highcharts}
          options={areaChart()} />
      </Paper>
      <Paper elevation={3}>
        <HighchartsReact
          highcharts={Highcharts}
          options={barChart()} />
      </Paper>
      
      <Paper elevation={3}>
        <div className='zoomTitle'>
          <h5 className='Title' >Environment Social Governance</h5>
          <ZoomInMapIcon />
        </div>
        <HighchartsReact
          highcharts={Highcharts}
          options={areaChart()} />
      </Paper>

      <Paper elevation={3} sx={{ display: "flex", flexDirection: "column" }}>
        <div className='zoomTitle'>
          <h4 className='Title' >Fault Reports</h4>
          <ZoomInMapIcon />
        </div>
        <div className='bodyZoom'>
          <DirectionsCarFilledIcon />
          <span>Parking Slots almost full</span>
        </div>
        <div className='bodyZoom'>
          <HeatPumpIcon />
          <span>Energy Utilization Increased by 20%</span>
        </div>
      </Paper>


    </div>
  )
}

export default Row21