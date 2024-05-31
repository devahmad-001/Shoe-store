import { useSelector } from "react-redux"
import "./allproducts.css"

import { Link, useNavigate, Navigate } from "react-router-dom"



export function Allproducts() {


  let adsdata=useSelector((data)=>{
 
    return data.Ads;
 
  });

 

  return <div id="carddisplaycontaoner" >

    {
     adsdata.map(function (obj,index) {
        return <div className="productcarddisplay" style={{ width: "18rem" }}>
          <img id="displaycardsimgs"
            src={obj.imgsrc}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title"></h5>
            <h6 className="card-subtitle mb-2 text-muted">{obj. producttitle}</h6>
            <p className="card-text">
             {obj.productDesc}<span className="articleprize">: {obj.Price}</span>
            </p>    
             <Link to={"/order/" + obj.id} className="btn mr-2">
              <i className="fas fa-link" /> Order here
            </Link>
        
             
           <Link  to="/About" className="btn ">
              <i className="fab fa-github" />
            </Link>
          </div>
        </div>
      })
    }
  </div>

}