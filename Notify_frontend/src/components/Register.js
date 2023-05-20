import React, { useState,useEffect } from 'react'
import '../css/Register.css'
import { useNavigate,NavLink } from 'react-router-dom';

function Register() {
  const Navigate = useNavigate()
  const host = "http://localhost:8000";
  const [credentials, setcredentials] = useState({ name: "", email: "", password: "" })

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
   
  }
  useEffect(()=>{
    let userToken = localStorage.getItem('token')
    if(userToken){
      Navigate('/dashboard')
    }
})


  const handleSubmit = async (e)=>{
    e.preventDefault()
    const {name, email, password} = credentials
      const response = await fetch(`${host}/api/auth/createuser`,{
          method:'POST',
          headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password}),
      })
      const data = await response.json()
      console.log(data)
      if(data.success){
        localStorage.setItem('toke',data.Authtoken)
        Navigate('/login')
      }else{
        console.log("error")
      }
  }

  return (
    <>
     
      {/* <div className='bodystructure'>
        <div className="containers">
          <div className="title">Registration</div>
          <div className="content">
            <form onSubmit={handleSubmit}>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Full Name</span>
                  <input type="text" placeholder="Enter your name" name="name" id="name"  onChange={onChange} minLength={5} required />
                </div>

                <div className="input-box">
                  <span className="details">Email</span>
                  <input type="email" placeholder="Enter your email" name="email" id="email"  onChange={onChange} minLength={5} required />
                </div>

                <div className="input-box">
                  <span className="details">Password</span>
                  <input type="password" placeholder="Enter your password" name="password" id="password" value={credentials.password} onChange={onChange} minLength={5} required />
                </div>
              </div>
                <NavLink to='/login' type="button" className="mx-3">Login</NavLink>
              <div className="gender-details">
          <input type="radio" name="gender" id="dot-1"/>
          <input type="radio" name="gender" id="dot-2"/>
          <input type="radio" name="gender" id="dot-3"/>
          <span className="gender-title">Gender</span>
          <div className="category">
            <label htmlFor="dot-1">
            <span className="dot one"></span>
            <span className="gender">Male</span>
          </label>
          <label htmlFor="dot-2">
            <span className="dot two"></span>
            <span className="gender">Female</span>
          </label>
          <label htmlFor="dot-3">
            <span className="dot three"></span>
            <span className="gender">Prefer not to say</span>
            </label>
          </div>
        </div>
              <div className="button">
                <input type="submit" />
              </div>
            </form>
          </div>
        </div>

      </div> */}

      <section className="vh-100 back" >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-8">
              <div className="card border-0">
                <div className="row g-0">
                  <div className="col-md-6 col-lg-6 d-none d-md-block regimg">
                  </div>
                  <div className="col-md-6 col-lg-6 d-flex align-items-center bg-dark">
                    <div className="card-body p-4 p-lg-5 text-white">
      
                      <form onSubmit={handleSubmit}>
      
                        <div className="d-flex mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{color: "#ff0066"}}></i>
                          <span className="h2 fw-bold mb-0">Sign up!</span>
                        </div>
      
                        
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form2Example17" style={{fontSize: "12px"}}>Full Name</label>
                          <input type="text" placeholder="Enter your name"  className="form-control form-control-lg input" name="name" id="name"  onChange={onChange} minLength={5} required />
                            </div>
                            <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form2Example17" style={{fontSize: "12px"}}>Email</label>
                          <input type="text" placeholder="Enter email"  className="form-control form-control-lg input" name="email" id="email"  onChange={onChange} minLength={5} required />
                            </div>   
      
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form2Example27" style={{fontSize: "12px"}}>Password</label>
                          <input type="password" placeholder="Enter password" className="form-control form-control-lg input" name="password" id="password" value={credentials.password} onChange={onChange} minLength={5} required />
                          
                        </div>
                        <p className="mb-5 pb-lg-2 " style={{color: "white" , textAlign:"right"}}>Already have an account? <NavLink to='/login'
                            style={{color: "#248f8f", textDecoration:"none"}}>Login</NavLink></p>
                        <div className="pt-1 mb-5 text-center">
                          <button className="btn btn-dark btn-lg btn-block " type="submit" style={{backgroundColor: "#ff0066", padding: "6px 78px"}}>Sign in</button>
                         
                        </div>
      
                        
                     
                      </form>
      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Register
