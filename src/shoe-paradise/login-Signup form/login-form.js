
import { Link, useNavigate, useParams } from "react-router-dom"
import "./login-Signup-Reset-form.css"

import { useForm } from "react-hook-form"
import axios from "axios";

import { useDispatch } from "react-redux";

import toast from "react-hot-toast";

export function Loginshoestore() {

let {register,handleSubmit}=useForm();

let Params=useParams();

let move=useNavigate()

let dispatch=useDispatch();

function save(data) {
   
  axios.post("/loginuser",data).then((res)=>{
    if(res.data){
      move('/Allproducts')

      localStorage.setItem("logintoken",res.data.mytoken)

      dispatch({
        type:"User-login",
        Payload:res.data.resultlogin
      })
    }
  })
  
}  
  


return<>
<form  onSubmit={handleSubmit(save)} >
  <div id="login-form"  className="container">
  <div className="d-flex justify-content-center h-100">
    <div className="cardloginsign">
      <div className="cardloginsign-header">
        <h3 style={{margin:20  + 'px'}}>Login</h3>
        <div className="d-flex justify-content-end social_icon">
          <span>
            <i className="fab fa-facebook-square" />
          </span>
          <span>
            <i className="fab fa-google-plus-square" />
          </span>
          <span>
            <i className="fab fa-twitter-square" />
          </span>
        </div>
      </div>
      <div className="card-body">
        {/* <form> */}
          <div className="input-group form-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fas fa-user" />
              </span>
            </div>
            <input 
            // required
              type="email"
              className="form-control"
              placeholder="email"
              {...register("email")}
            />
          </div>
          <div className="input-group form-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fas fa-key" />
              </span>
            </div>
            <input 
            id="loginpasswordinput"
              type="password"
              className="form-control"
              placeholder="password"
              {...register("password")}
            />
          </div>
          <div className="row align-items-center remember">
          <input type="checkbox" />
            Remember Me
          </div>
          <div className="form-group">
           {/* <Link to="/Login-Sigup"> */}
           <input 
              type="submit"
              defaultValue="Login"
              className="btn float-right login_btn"
            />
            {/* </Link> */}
          </div>
        {/* </form> */}
      </div>
      <div className="card-footer">
      
        <div className="d-flex justify-content-center links">
          Don't have an account?<Link to="/Signup">Sign Up</Link>
        </div>
      
        <div className="d-flex justify-content-center">
          <Link to="/Reset-info">Forgot your password?</Link>
        </div>
      </div>
    </div>
  </div>
</div>
</form>
  </>
}









