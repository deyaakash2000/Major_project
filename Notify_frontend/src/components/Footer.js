import React from 'react'
import '../css/footer.css'
function Footer() {
  return (
<>

<footer className="text-center text-white" style={{backgroundColor: "#f1f1f1"}}>

  <div className="container pt-4">

    <section className="mb-4">

      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://www.facebook.com/login/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fa-brands fa-facebook"></i>
      </a>


      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://twitter.com/i/flow/login"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-twitter"></i
      ></a>

      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://accounts.google.com/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-google"></i
      ></a>


      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://www.instagram.com/accounts/login/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-instagram"></i
      ></a>


      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://www.linkedin.com/login/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-linkedin"></i
      ></a>

      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://github.com/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-github"></i
      ></a>
    </section>
  
  </div>



  <div className="text-center text-dark p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.3)"}}>
    © 2023 Copyright:
    <a className="text-dark" href="https://mdbootstrap.com/">Notify.com</a><br></br>
    <p className='my-3'>Developement by : Aakash Dey & Trayee Ghosh</p>
  </div>

</footer>

</>
   
  )
}

export default Footer