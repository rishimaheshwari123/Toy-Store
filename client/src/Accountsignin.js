import React from 'react'
import { Link } from 'react-router-dom';

const Accountsignin = () => {
  return (
    <div className="registerbox">
      <div className="screen__content">
        <div className="container-register">
          <div className="screen">
            <h1 id="h1reg" class="h1 heading"> Registration Form</h1>
            <form className="login">
              <div className="login__field">
                <input type="text" name="name" className="login__input" placeholder="User name" required />
              </div>
              <div className="login__field">
                <input type="number" name="number" className='login__input' placeholder="Number" required />
              </div>
              <br />
              <div className="login__field">
                <input type="email" name="email" className="login__input" placeholder="Email" />
              </div>
              <br />
              <div className="login__field">
                <input type="password" name="password" className="login__input" placeholder="Password" />
              </div>
              <br />
              <button id="btn" class="btn">Register Now</button>
              <br />
              <br />
              <div className="linklog">
                <p> Already a user! <Link to="/login" className="mynav">  Login  </Link> </p>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accountsignin;