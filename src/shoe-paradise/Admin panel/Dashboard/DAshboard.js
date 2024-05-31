import "./Dashboard.css"

import { Link, Navigate } from "react-router-dom"

import { useSelector } from "react-redux/es/hooks/useSelector";

export function Dashboard() {
  
 
  

  let logeddata =useSelector((store)=>{
    
    return store.loginacceptd;
  
  })   

 if(!logeddata.accepted){

    return <Navigate to="/login" />;
  
 }

  return <div id="dashboardcontanier">
    <div id="aside">
      <div id="Dashboard">
        <h5>Dashboard</h5>
        <p>Go To Dashboard</p>
      </div>
      <div id="Products">
        <h5>Products</h5>
       <Link to="/Allproducts"> <p className="link">All Products</p></Link>
       <Link to="/products"> <p className="link">Live Products</p></Link>
        <p>Create Products</p>
      </div>
      <div id="Orders">
        <h5>Orders Details</h5>
        <p>Pending Orders</p>
       <Link to="/Completedorders"> <p className="link">Completed Orders</p></Link>

        <h5>About</h5>
      <Link to="/About"><p className="link">About us</p></Link>
       <Link onClick={function () {
          alert("Go to The Home Page ")
       }} to="/"><p>Logout</p></Link>
      </div>
    </div>





    <div id="asidebody">



      <div id="asidebody1">
        <div id="box1">
          <img id="totalordersimg" src="	https://shoe-paradies-myok1ii3u-aliahmad051999-gmailcom.vercel.app/totalS.png" alt="" />
          <div id="box1content">
            <p >181</p><h6>Total orders</h6>
          </div>
        </div>

        <div id="box1">
          <img id="totalordersimg" src="https://shoe-paradies-myok1ii3u-aliahmad051999-gmailcom.vercel.app/comp2.png" alt="" />
          <div id="box1content">
            <p>163</p><h6>Completed orders</h6>
          </div>
        </div>

        <div id="box1" className="endbox">
          <img id="totalordersimg" src="https://shoe-paradies-myok1ii3u-aliahmad051999-gmailcom.vercel.app/dollor.png" alt="" />
          <div id="box1content">
            <p>81030</p><h6>Total Revenue</h6>
          </div>
        </div>
      </div>





      <div id="asidebody2">

        <div id="box2">
          <div id="orders">
            <p>Orders</p>
          </div>
          <div id="orderlist">
            <ul>
              <li>Years</li>
              <li>Today</li>
              <li>Monthly</li>
            </ul>
            <ul>
              <li>181 Orders</li>
              <li>0 Orders</li>
              <li>7 Orders</li>
            </ul>
          </div>
        </div>

        <div id="box2">
          <div id="orders">
            <img src="https://shoe-paradies-myok1ii3u-aliahmad051999-gmailcom.vercel.app/dollor.png" alt="" />
            <p>Revenue</p>
          </div>
          <div id="orderlist">
            <ul>
              <li>Years</li>
              <li>Today</li>
              <li>Monthly</li>
            </ul>
            <ul>
              <li>81030 RS</li>
              <li>0 RS</li>
              <li>363.345 RS</li>
            </ul>
          </div>
        </div>

        <div className="boxborder" id="box2">
          <div id="orders">
            <p>Completed Orders</p>
          </div>
          <div id="orderlist">
            <ul>
              <li>Years</li>
              <li>Today</li>
              <li>Monthly</li>
            </ul>
            <ul>
              <li>163 Orders</li>
              <li>0 Orders</li>
              <li>6 Orders</li>
            </ul>
          </div>
        </div>
      </div>


      <div id="Ordertails">
        <h4>Pending Orders</h4>

        <div className="orderbox">

          <div className="title">
            <h5>LITE RACER ADAPT 4.0 CLOUDFOAM SLIP-ON SHOES</h5>
            <p>Price : 70 $</p>
          </div>
          <div className="title">
            <p>Explani</p>
            <p id="deliverd">is Deliverd</p>
          </div>
          <div id="description">
            <p>Size : UK 1</p><span></span>
            <p id="quantinty">Quantity 1</p>
          </div>

        </div>


        <div className="orderbox">

          <div className="title">
            <h5>LITE RACER ADAPT 4.0 CLOUDFOAM SLIP-ON SHOES</h5>
            <p>Price : 89.93 $</p>
          </div>
          <div className="title">
            <p>Explani</p>
            <p id="deliverd">is Deliverd</p>
          </div>
          <div id="description">
            <p>Size : UK 1</p><span></span>
            <p id="quantinty">Quantity 1</p>
          </div>

        </div>


        <div className="orderbox">

          <div className="title">
            <h5>DAILY 3.0 SHOES</h5>
            <p>Price : 61.75 $</p>
          </div>
          <div className="title">
            <p>Explani</p>
            <p id="deliverd">is Deliverd</p>
          </div>
          <div id="description">
            <p>Size: UK 7</p><span></span>
            <p id="quantinty">Quantity 1</p>
          </div>

        </div>


        <div className="orderbox">

          <div className="title">
            <h5>HOOPS 3.0 LOW CLASSIC VINTAGE SHOES</h5>
            <p>Price : 66.5 $</p>
          </div>
          <div className="title">
            <p>Explani</p>
            <p id="deliverd">is Deliverd</p>
          </div>
          <div id="description">
            <p>Size: UK7.5</p><span></span>
            <p id="quantinty">Quantity 1</p>
          </div>

        </div>


        <div className="orderbox">

          <div className="title">
            <h5>KANTANA SHOES</h5>
            <p>Price : 72 $</p>
          </div>
          <div className="title">
            <p>Explani</p>
            <p id="deliverd">is Deliverd</p>
          </div>
          <div id="description">
            <p>Size : UK 6</p><span></span>
            <p id="quantinty">Quantity 1</p>
          </div>

        </div>


        <div className="orderbox">

          <div className="title">
            <h5>DAILY 3.0 SHOES</h5>
            <p>Price : 61.75 $</p>
          </div>
          <div className="title">
            <p>Explani</p>
            <p id="deliverd">is Deliverd</p>
          </div>
          <div id="description">
            <p>Size : UK 7</p><span></span>
            <p id="quantinty">Quantity 1</p>
          </div>

        </div>


        <div className="orderbox">

          <div className="title">
            <h5>DAILY 3.0 SHOES</h5>
            <p>Price : 170 $</p>
          </div>
          <div className="title">
            <p>Explani</p>
            <p id="deliverd">is Deliverd</p>
          </div>
          <div id="description">
            <p>Size : UK 9</p><span></span>
            <p id="quantinty">Quantity 1</p>
          </div>

        </div>


        <div className="orderbox">

          <div className="title">
            <h5>CLOUDFOAM PURE SHOES</h5>
            <p>Price : 170 $</p>
          </div>
          <div className="title">
            <p>Explani</p>
            <p id="deliverd">is Deliverd</p>
          </div>
          <div id="description">
            <p>Size : UK 11</p><span></span>
            <p id="quantinty">Quantity 1</p>
          </div>

        </div>


        <div className="orderbox">

          <div className="title">
            <h5>X_PLRBOOST SHOES</h5>
            <p>Price : 90 $</p>
          </div>
          <div className="title">
            <p>Explani</p>
            <p id="deliverd">is Deliverd</p>
          </div>
          <div id="description">
            <p>Size : UK 5</p><span></span>
            <p id="quantinty">Quantity 1</p>
          </div>

        </div>


        <div className="orderbox">

          <div className="title">
            <h5>RACER TR23 SHOES</h5>
            <p>Price : 190 $</p>
          </div>
          <div className="title">
            <p>Explani</p>
            <p id="deliverd">is Deliverd</p>
          </div>
          <div id="description">
            <p>Size : UK 12</p><span></span>
            <p id="quantinty">Quantity 1</p>
          </div>

        </div>


        <div className="orderbox">

          <div className="title">
            <h5>RUNFALCON 2.0 SHOES</h5>
            <p>Price : 230 $</p>
          </div>
          <div className="title">
            <p>Explani</p>
            <p id="deliverd">is Deliverd</p>
          </div>
          <div id="description">
            <p>Size : UK 9</p><span></span>
            <p id="quantinty">Quantity 1</p>
          </div>

        </div>


        <div className="orderbox">

          <div className="title">
            <h5>HOOPS 3.0 LOW CLASSIC VINTAGE SHOES</h5>
            <p>Price : 66.90 $</p>
          </div>
          <div className="title">
            <p>Explani</p>
            <p id="deliverd">is Deliverd</p>
          </div>
          <div id="description">
            <p>Size : UK 11</p><span></span>
            <p id="quantinty">Quantity 1</p>
          </div>

        </div>

      </div>
    </div>
  </div>

}





