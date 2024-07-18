import { Link } from "react-router-dom";

const Accountlogin = () => {
  return (
    <>
      <div className='registerbox'>
        <div class="screen__content">
          <div className="container-register">
            <div className="screen">
              <form className="login">
                <h1 class="h1 heading">LOGIN  FORM</h1>
                <div className="login__field">
                  <input type="email" name="email" placeholder="Email" required />
                </div>
                <br />
                <div className="login__field">
                  <input type="password" name="password" placeholder="Password" id="myInput" required />
                </div>
                <br />
                <select name="userRoll" className="select-option">
                  <option>Customer</option>
                  <option>Admin</option>
                </select>
                <button id="btn" class="btn">Sign In</button>
                <br/><br/>
                <p>New User Register Here! <Link to="/signin" className="mynav"> Sign up </Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default Accountlogin;