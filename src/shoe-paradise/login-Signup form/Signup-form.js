import "./login-Signup-Reset-form.css"

import { useForm } from "react-hook-form"
import axios from "axios";
import { Link, useParams } from "react-router-dom"
import { v4 } from "uuid";

import { useEffect, useState } from "react";


export function Signuphoestore() {

 
    let {register,handleSubmit ,reset}=useForm();
  
   

    function signupdata(signup) {
      
      signup.id=v4();
  
      axios.post('/create-user',signup)
      
    };
  
  return<>
  <form  onSubmit={handleSubmit(signupdata)} >
    <div id="login-form"  className="container">
    <div className="d-flex justify-content-center h-100">
      <div className="cardloginsign">
        <div className="cardloginsign-header">
          <h3 style={{margin:20  + 'px'}}>Sign Up</h3>
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
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-user" />
                </span>
              </div>
              <input 
              // required
                type="text"
                className="form-control"
                placeholder="username"
                {...register("username")}
              />
            </div>
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
              // required
                id="Password1"
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
             {/* <Link to="/Login" > */}
             <input 
                type="submit"
                defaultValue="Login"
                className="btn float-right login_btn"
              />
             {/* </Link> */}
              {/* </Link> */}
            </div>
        </div>
      </div>
    </div>
  </div>
  </form>
    </>
  }
  