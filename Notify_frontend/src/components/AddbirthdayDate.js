import React, { useState, useEffect, useContext } from "react";
import eventstate from "../contex/user/projectContex";
import DateTimePicker from "react-datetime-picker"
import { useNavigate } from 'react-router-dom';
import EventContainer from "./EventContainer";
import '../css/logoutBtn.css'
import '../css/addevent.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
export default function AddbirthdayDate() {
  const eventDetails = useContext(eventstate);
  const { addetails, info, fetchEvents } = eventDetails
  const Navigate = useNavigate()
  useEffect(() => {
    let userToken = localStorage.getItem('token')
    if (userToken === '' || userToken === null) {
      Navigate('/login')
    }
  })
  useEffect(() => {
    fetchEvents()
  })
  const [msg, setmsg] = useState("")

  const [remindTime, setremindTime] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success('Event add')
    setmsg(" ")
    setremindTime()

    addetails(msg, remindTime)

  }
  const logout = () => {
    localStorage.removeItem('token')
    Navigate('/login')
  }
  return (
    <>
      <section className="vh-100 addback">
        <div className="d-flex justify-content-end p-4">
          <button type="button" onClick={logout} className="logoutBtn ">
            Logout
          </button>
        </div>

        <div className="container py-2 h-50">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-6 d-none d-md-block align-items-center"><h4 style={{ fontSize: "95px", color: "#ccccb3", fontFamily: "sans-serif" }}>Don't Miss Your Important Event</h4></div>
                <div className="col-md-6 col-lg-6 d-flex align-items-center">
                  <button type="button" className="btn  event-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Set your Reminder</button>
                </div>
              </div>
            </div>
          </div>
          {/* tabiIndex="-1" */}
          <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Add your Event</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">

                  <form onSubmit={handleSubmit}>
           
                      
                     
                     <center> <DateTimePicker
                      value={remindTime}
                      name="time"
                      onChange={setremindTime}
                      minDate={new Date()}
                      minutePlaceholder="mm"
                      hourPlaceholder="hh"
                      dayPlaceholder="DD"
                      monthPlaceholder="MM"
                      yearPlaceholder="YYYY"
                    /> </center>
                
                    
                   
                    <div className="mb-3">
                      <label htmlFor="message-text" className="col-form-label">Message :</label>
                      <textarea className="form-control" name="name" id="name" value={msg} onChange={e => setmsg(e.target.value)} minLength={3} required></textarea>
                    </div>
                    {/* <div className="button"> */}
                    <input type="submit" className="btn btn-primary" />
                    {/* </div> */}
                    <button type="button" className="btn btn-secondary mx-3" data-bs-dismiss="modal">Close</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="modal fade" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-body-ku">
                  <div>
                    <div className="containers">
                      <div className="modal-header">
                        <div className="title"><h1> <b>Add your Event</b></h1></div>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>

                      <div className="content">
                        <form onSubmit={handleSubmit}>
                          <div className="user-details">
                            <div className="input-box">
                              <span className="details">Add your Todos</span>
                              <textarea className="form-control output" rows="1" placeholder="Enter Reminder" name="name" id="name" value={msg} onChange={e => setmsg(e.target.value)} minLength={3}
                                required style={{ width: "100%" }}></textarea></div>

                            <DateTimePicker
                              value={remindTime}
                              name="time"
                              onChange={setremindTime}
                              minDate={new Date()}
                              minutePlaceholder="mm"
                              hourPlaceholder="hh"
                              dayPlaceholder="DD"
                              monthPlaceholder="MM"
                              yearPlaceholder="YYYY"
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <label className="form-label" htmlhtmlFor="form2Example17" style={{ fontSize: "15px" }}>Notification Email</label>
                            <input type="text" className="form-control form-control-lg input" name="email" id="email" value={email} onChange={e => setemail(e.target.value)} required />
                          </div>
                          <div className="button">
                            <input type="submit" />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark" />
        <div className="row">
          {info.length === 0 && <center><div style={{ color: "white", fontSize: "25px" }}>No notification here</div></center>}
          {
            info.map((iteam, index) => {
              return <EventContainer key={iteam._id} iteam={iteam} />;
            })}
        </div>
      </section>

    </>
  );
}
