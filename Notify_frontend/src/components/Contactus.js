import React from 'react'
import Navlnks from './Navlnks'
import '../css/Contact.css'
import Footer from './Footer'
function Contactus() {
    return (
        <div>
            <Navlnks></Navlnks>
            <div className="contact-page">
                <div className="contact_overlay">
                    <h1>Contact Us</h1>
                    <p>"A gentle reminder can go a long way in ensuring that important events are not overlooked"</p>
                </div>
            </div>
            <div class="container my-5">
                <div class="row">
                    <div class="col">
                    <center><h2>Get in Touch</h2></center>
                       <form className='container my-3'>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
            
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Valueable feedback</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                   
                </div>
                <button type="button" class="btn btn-secondary" style={{float : "right"}}>Submit</button>
            </form>
                    </div>
                    <div class="col">
                    <center><h2>Talk To Us</h2></center>
                    <center><h4>Email</h4>
                    <p>notify@gmail.com</p>
                    <h4>Phone No.</h4>
                    <p>9876545678</p>
                    <p>033 2543-9876</p>
                    <h4>Address</h4>
                    <p>375, Prince Anwar Shah Rd,</p><p> South City Complex</p></center>
                    </div>
                </div>
            </div>
            
            <Footer></Footer>
        </div>
    )
}

export default Contactus
