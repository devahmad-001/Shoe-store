import "./login-Signup-Reset-form.css"




import { Link, useParams } from "react-router-dom"
import "./login-Signup-Reset-form.css"
import { useForm } from "react-hook-form"
import axios from "axios";

import { v4 } from "uuid";
import { useEffect, useState } from "react";

export function Resetinfo() {

let {register,handleSubmit}=useForm();


function resetdata(data) {
  
  axios.put("/user-update",data)

}  
  


return<>
<form  onSubmit={handleSubmit(resetdata)} >
  <div id="login-form"  className="container">
  <div className="d-flex justify-content-center h-100">
    <div className="cardloginsign">
      <div className="cardloginsign-header">
        <h3 style={{margin:20  + 'px'}}>Reset Info</h3>
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
              placeholder="new-password"
              {...register("password")}
            />
          </div>
           <input 
              type="submit"
              defaultValue="Login"
              className="btn float-right login_btn"
            />
          </div>
      </div>
      </div>
    </div>
</form>
  </>
}









