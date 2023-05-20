import React, { useContext } from "react";

import Button from "react-bootstrap/Button";
import eventstate from "../contex/user/projectContex";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/eventcontainer.css'

function EventContainer(props) {
  const eventDetails = useContext(eventstate);
  const { deleteEvents } = eventDetails;
  const { iteam } = props;
  console.log(iteam.reminderMsg)
  console.log(iteam.remindAt)
  return (
    <div className=' col-md-3'>
      <div className="card my-3 mx-2 adding">
        <h3 className='mx-2'><span className="badge bg-secondary mx-3">{iteam.email}</span></h3>
        <div className="card-body">
          <h5 className="card-title">{iteam.reminderMsg}</h5>

          <p className="card-text">
            {/* {String(new Date(iteam.remindAt.toLocaleString(undefined, { timezone: "Asia/Kolkata" })))} */}
          {iteam.remindAt}</p>
          <Button variant="warning" onClick={() => deleteEvents(iteam._id)}>Delete</Button>
        </div>
      </div>
    </div>
   





  );
}

export default EventContainer;
