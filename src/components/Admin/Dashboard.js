import React from 'react'
import TrainerTimeline from './TrainerTimeline'

function Dashboard() {

  return (
   <>
     <div className='dashboard_container'>
        <div className='metrics_container'>
            <div className='metrics_header'>
                <p>Total Clients</p>
            </div>
            <div className='metrics_value'>
                <p>20</p>
            </div>
        </div>
        <div className='metrics_container'>
            <div className='metrics_header'>
                <p>New Clients This Month</p>
            </div>
            <div className='metrics_value'>
                <p>2</p>
            </div>
        </div>
        <div className='metrics_container'>
            <div className='metrics_header'>
                <p>Revenue Generated</p>
            </div>
            <div className='metrics_value'>
                <p>6000</p>
            </div>
        </div>
        <div className='metrics_container'>
            <div className='metrics_header'>
                <p>Active Clients</p>
            </div>
            <div className='metrics_value'>
                <p>1</p>
            </div>
        </div>
     </div>
     {/* <TrainerTimeline/> */}
   </>
  )
}

export default Dashboard