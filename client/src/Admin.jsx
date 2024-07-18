import { Link } from "react-router-dom";

const Admin=()=>{
    return(
        <>
        <div className='registerbox'>
        <div class="screen__content">
          <div className="container-register">
            <div className="screen">
              <form className="login">
                <h1 class="h1 heading">LOGIN </h1>
                <br></br>
                <div className="login__field">
                  <input type="email" name="email" placeholder="Email" required />
                </div>
                <br />
                <div className="login__field">
                  <input type="password" name="password" placeholder="Password" id="myInput" required />
                </div>
                <br />
                <button id="btn" class="btn">Login</button>
                <br/><br/>
                <Link to="/dashboard" className="mynav"> Dashboard </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
        </>
    );
}
export default Admin;