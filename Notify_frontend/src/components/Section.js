import React from 'react'
import '../css/section.css'
import vid from '../videos/event1.mp4'
function Section() {
  return (
    <div>
      <div className="container" style={{ marginTop: "5%" }}>
      <h1 style={{ textAlign: 'center' }} className='fontStyle my-5'>Our Purpose</h1>
        <div className="row">
          <div className="col-md-6 col-lg-6 d-none d-md-block align-items-center">
            <video autoPlay muted loop id="myVideo" style={{ width: "100%" }}>
              <source src={vid} type="video/mp4" />
            </video>
          </div>

          <div className="col-md-6 col-lg-6 d-flex align-items-center">
          The Event Reminder project aims to develop a system that allows users to easily set reminders for upcoming events and receive notifications at the appropriate time.

The system will have user-friendly interface that allows users to input event information, including the event name, date, time, as well as any additional notes or details. Users will also be able to set reminder for multiple events at once and receive notifications through email or text message. Additionally, the system will allows users to view and manage their upcoming events in a calendar.

The goal of the project is to provide reminder for upcoming events and never miss an important event. </div>
        </div>
      </div>
    </div>
  )
}

export default Section