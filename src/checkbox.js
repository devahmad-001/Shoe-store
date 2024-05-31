import { useState } from "react";
import checkbox from "./checkbox";
import Checkbox from "./checkbox";

export default  ()=>{
  let [total,setTotal] = useState(0);
  let [data,setData]=useState([
      {
          dish:"biryani",
          price:500
      },
      {
          dish:"Qorma",
          price:500
      },
      {
          dish:"haleem",
          price:500
      }
  ]);

    
  function totallbill() {
    let gettotal=0;
    data.forEach(function (names) {
      if(data.order==true){
        gettotal+= names.price
       console.log(gettotal); 
      }
    })
    setTotal(gettotal)
  }
  

  return(
    <div>
      <table border={1}>
        <tr><td>Dishes</td><td>Price</td><td>Choose</td></tr>
      {
      data.map(function (food) {
        return  (<tr><td>{food.dish}</td><td>{food.price}</td><input type="checkbox" onChange={function (e) {

          food.order=e.target.checked;
          setData([...data]);
          console.log(data);
        }}  ></input></tr>
               
        )
      })
      }
      <tr><button onClick={totallbill}>Bill</button><span>{total}</span></tr>
     </table>
     
    </div>
  )

}