import { Link, useParams } from "react-router-dom"

import "./Addtocart.css"
import { useState } from "react";


export function Addtocart({ a4 }) {

  let params = useParams();

  let result = a4.find(data => data.id == params.cartID)

  
function deletekaro() {
  
  let boxdelete =document.getElementById("addtocartcontainer");
     boxdelete.innerHTML="";
     setbillvalue(0);
}  


let priceofproduct=parseFloat(result.Price);

let [billvalue,setbillvalue]=useState(1);
  


return <>
    <h1 id="addtocartheading" >Shopping Cart</h1>

    <div id="ADDTOCART">

      <div id="addtocartcontainer">
       
        <div id="addtocartpicturedetails">
          <img className="cartshoesimg" src={result.imgsrc} />
          <div className="addtocartdetails">
            <h4 className="addtocartpara">{result.productDesc}</h4>
            <p className="addtocartpara">Dark Blue / Cloud White / Halo Silver</p>
            <p className="addtocartpara">Size : <select><option>UK 6</option><option>UK 6.5</option><option>UK 7</option><option>UK 7.5</option><option>UK 8</option><option>UK 8.5</option><option>UK 9</option><option>UK 9.5</option><option>UK 10</option><option>UK 10.5</option><option>UK 11</option><option>UK 11.5</option><option>UK 12</option></select>
           
              Quantity : <input id="inputquantity" type="number" placeholder="1" onChange={((evt)=>{setbillvalue(evt.target.value)})} aria-rowspan={2} /></p>
          
          </div>
        </div>
        <div id="addtocartdesc">
          <p>Price: {billvalue*priceofproduct}$</p>
          <img id="deletesvg" src="https://www.svgrepo.com/show/171102/delete.svg" onClick={deletekaro} />
        </div>

        
      </div>



      <div id="summarydisplay">
        <h5 className="summaryheading">Summary</h5>
        <div id="summarycontainer">
          <div id="sumary">
            <div id="subtotal">
              <h6>SUBTOTAL</h6>
              <h6>Rs {billvalue*priceofproduct}.00$</h6>
            </div>
          </div>
          <p>The SubTotal reflects the total price of Your order. Included dues and taxes. before any application discounts. It does not include delivery cost and international transection fee</p>
        </div>
        <Link to="/"> <button id="chekoutbtn" >Chek Out</button></Link>
      </div>


    </div>
  </>
}