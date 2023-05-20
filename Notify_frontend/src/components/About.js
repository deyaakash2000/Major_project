import React from 'react'
// import { NavLink } from 'react-router-dom'
import Navlnks from './Navlnks'
import '../css/About.css'
import Footer from './Footer'
import img1 from '../images/section1.png'
function About() {
  return (
    <>
      <Navlnks></Navlnks>
      <div className="about-page">
      
        <div className="overlay">
        <h1>About Us</h1>
        <p> "A reminder is a sign of thoughtfulness and can make all the difference in someone's day."</p>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col col-md-5 my-5">
            <img src={img1}></img>
          </div>
          <div class="col col-mx-3 my-5">
            <b> At Notify, we understand the importance of staying organized and never missing out on any important events or appointments. Our project is designed to help you manage your schedule effectively and ensure that you never forget an event again.
            With our user-friendly interface and intuitive features, you can effortlessly keep track of upcoming events, set reminders, and stay on top of your busy life. Whether it's a business meeting,
             a social gathering, or a personal milestone, our Event Reminder Project has got you covered.</b>
            
           <b> Key Features :</b>
           <ol>
              <li> Event Management: Easily create and manage events in a centralized platform. Add event details such as title, date, time, location, and description, making it easier for you to plan and organize your activities.</li>
              <li>Reminder Notifications: Receive timely reminders before each event, ensuring that you are well-prepared and never caught off guard. Our system will send you alerts via email, SMS, or push notifications, based on your preferences.</li>
              <li> Customizable Settings: Tailor the project to suit your needs. Set your preferred notification timings, choose notification methods, and personalize your event categories and labels to create a system that aligns with your unique requirements.</li>
            </ol>


           <b> We believe that our Event Reminder Project will simplify your life, reduce stress, 
            and enhance your productivity by keeping you on top of your schedule. 
            Sign up today and start enjoying the benefits of effortless event management!</b>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default About
