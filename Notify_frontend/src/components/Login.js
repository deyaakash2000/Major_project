import React,{useState,useEffect} from 'react'
import { NavLink,useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/login.css';
function Login() {
  const [credentials, setcredentials] = useState({ email: "", password: "" })
  const Navigate = useNavigate()
  useEffect(()=>{
    let userToken = localStorage.getItem('token')
    if(userToken){
      Navigate('/dashboard')
    }
})

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const{email,password} = credentials
    const response = await fetch("http://localhost:8000/api/auth/login", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({email,password})
  });
  const json = await response.json()
  if(json.success){
    toast.success('Login Successfull')
    localStorage.setItem('token',json.Authtoken)
    Navigate('/dashboard')
  }else{
    alert('invalid')
    // toast.error('enter the valid email and password')
  }
}

  return (
    <>
      <section className="vh-100 backGround">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-8">
              <div className="card border-0 rounded" style={{borderradius: "1rem"}}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-6 d-none d-md-block logiImg">
                    {/* <img src={img2} 
                      alt="login form" className="img-fluid" style={{borderradius: "1rem 0 0 1rem", height: "100%", width: "100%" , }} /> */}
                  </div>
                  <div className="col-md-6 col-lg-6 d-flex align-items-center bg-dark">
                    <div className="card-body p-4 p-lg-5 text-white">
      
                      <form onSubmit={handleSubmit}>
      
                        <div className="d-flex mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{color: "#11BBD9"}}></i>
                          <span className="h2 fw-bold mb-0">Welcome!</span>
                        </div>
      
                        
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form2Example17" style={{fontSize: "12px"}}>User Name</label>
                          <input type="text"  className="form-control form-control-lg input" name="email" id="email"  onChange={onChange} minLength={5} required />
                           
                         
                        </div>
      
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form2Example27" style={{fontSize: "12px"}}>Password</label>
                          <input type="password" className="form-control form-control-lg input" name="password" id="password" value={credentials.password} onChange={onChange} minLength={5} required />
                          
                        </div>
                        <p className="mb-5 pb-lg-2 " style={{color: "white" , textAlign:"right"}}>Don't have an account? <NavLink to='/register'
                            style={{color: "#248f8f", textDecoration:"none"}}>Sign up</NavLink></p>
                        <div className="pt-1 mb-5 text-center">
                          <button className="btn btn-dark btn-lg btn-block " type="submit" style={{backgroundColor: "#11BBD9", padding: "6px 78px"}}>Login</button>
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
// trayee

export default Login
