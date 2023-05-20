import React from 'react'
import '../css/box.css'
import pic1 from '../images/1.avif'
// import img4 from '../images/2.jpg'
import pic2 from '../images/3.jpg'
import pic3 from '../images/4.jpg'
import pic4 from '../images/5.jpg'
import { motion } from 'framer-motion'
function Box() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }} className='fontStyle my-5'>Our objective</h1>
      <motion.div  initial={{ scale: 0 }}
    animate={{ rotate: 360, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20
    }} className="container" style={{ marginTop: "3%" }} >
        <div className="row ">
          <div className="col-sm-3 ">
            <div className="card my-3" style={{ width: "18rem" }}>
              <img className="card-img-top" src={pic1} alt="Card image cap"></img>
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text"><h5>"Remembering an event is easier than remembering to remember an event".</h5></p>

              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card my-3" style={{ width: "18rem" }}>
              <img className="card-img-top" src={pic2} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text"><h5>"A calendar reminder is a small but powerful tool to keep us on track with important events".</h5></p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card my-3" style={{ width: "18rem" }}>
              <img className="card-img-top" src={pic3} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text"><h5>"Our memory is fallible, but technology can help us keep track of important events".</h5></p>

              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card my-3" style={{ width: "18rem" }}>
              <img className="card-img-top" src={pic4} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text"><h5>"The best way to avoid forgetting important events is to set reminders and keep them visible".</h5></p>

              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Box