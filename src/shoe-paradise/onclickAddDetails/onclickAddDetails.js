import "./onclickAddDetails.css";

import { Link, useParams, Navigate } from "react-router-dom";

import { useState } from "react";

import { useSelector } from "react-redux";

import {loadStripe} from "@stripe/stripe-js";



let stripePromise=loadStripe("pk_test_51ORurYEE75dy9Obg8KTZnQX2pAAUO3DE62TYPK21xZSkx1rge8E1n0rvEBPCSEKaUeFeFTCZpgiIf6Lt9sUrD4N300UxBol0Oc");



export  function Details(props){
  


  const  redirectTocheckout =async ()=>{
    const stripe = await stripePromise;
    const result = await stripe .redirectToCheckout({
        mode: "payment",
        lineItems: [{ price:"price_1OSA2QEE75dy9ObgaPbeqmAb", quantity: 1 }],
        successUrl: `http://localhost:3000/payment-success/`,
        cancelUrl: `http://localhost:3000/payment-error`,
      })
  }

 



    let params = useParams();
   
    let res = props.a1.find( (item)=> item.id == params.orderID )
   
    let [src,setsrc]=useState(res.imgsrc);

    let logeddata =useSelector((store)=>{
    
      return store.loginacceptd;
    
    })   
  
   if(!logeddata.accepted){
  
      return <Navigate to="/login" />;
    
   }


       return <>
       <div className="dell">
    
         <div className="showpageimgcontainer">
    
         <div className="sideshowpageimgcontainer">
          <img className="sideshowpageimgdetails" onMouseOver={function () {
              setsrc(res.sideshowimgsrc1)
          }} src={res.sideshowimgsrc1}/>
          <img className="sideshowpageimgdetails" onMouseOver={function () {
              setsrc(res.sideshowimgsrc2)
          }} src={res.sideshowimgsrc2}/>
          <img className="sideshowpageimgdetails" onMouseOver={function () {
              setsrc(res.sideshowimgsrc3)
          }}src={res.sideshowimgsrc3}/>
          <img className="sideshowpageimgdetails" onMouseOver={function () {
              setsrc(res.sideshowimgsrc4)
          }}src={res.sideshowimgsrc4}/>
         
         <img className="sideshowpageimgdetails" onMouseOver={function () {
              setsrc(res.sideshowimgsrc5)
          }}src={res.sideshowimgsrc5}/>
        <img className="sideshowpageimgdetails" onMouseOver={function () {
              setsrc(res.sideshowimgsrc6)
          }}src={res.sideshowimgsrc6}/>   
         </div>
         
         <div className="sideshowpageimg-container">
           <img className="sideshowpageimg" src={src}/>
         </div>
    
      
         </div>
    
    
         <div  className="showpagecontent">
    
    <div className="showpagecontentcontainer">
      <h2 className="showpagecontentheading">{res. productDesc} </h2>
      <h5 className="showpagecontentparagraph">Grey Two / Collegiate Green / Cloud White</h5>
      <h5 className="showpagecontentparagraph">Price: {res.Price}</h5>
      <h5 className="showpagecontentparagraph">incl of taxes</h5>
      <h5 className="showpagecontentparagraph">(also incl all duty charges)</h5>
    </div>
    
    <div className="showpageshoesizecontainer">
        
        <h5>Available Sizes</h5>
       
        <div className="showpageshoesize">
          <button className="showpageshoesizebtn">UK 6</button>
          <button className="showpageshoesizebtn">UK 6.5</button>
          <button className="showpageshoesizebtn">UK 7</button>
          <button className="showpageshoesizebtn">UK 7.5</button>
          <button className="showpageshoesizebtn">UK 8</button>
          <button className="showpageshoesizebtn">UK 8.5</button>
          <button className="showpageshoesizebtn">UK 9</button>
          <button className="showpageshoesizebtn">UK 9.5</button>
          <button className="showpageshoesizebtn">UK 10</button>
          <button className="showpageshoesizebtn">UK 11</button>
          <button className="showpageshoesizebtn">UK 11.5</button>
          <button className="showpageshoesizebtn">UK 12</button>
        </div>
    
      </div> 
         <Link to={"/addtocart/" + params.orderID}>
         <button className="addtocart ">Add TO Cart</button>
        </Link>
      <button onClick={redirectTocheckout} className="addtocart onlinepayment">Online Payment</button>
      
     
    </div>
    
    </div>
    
       </>
    }