import "./App.css"

import { Completedorders } from "./shoe-paradise/Admin panel/completed orders/completedorders";

import { Allproducts } from "./shoe-paradise/Admin panel/All products/allproducts";

import { About } from "./shoe-paradise/Admin panel/About/About";

import { Products } from "./shoe-paradise/Admin panel/live products/live products";

import { BrowserRouter,Routes,Route, Link } from "react-router-dom"

import { Loginshoestore } from "./shoe-paradise/login-Signup form/login-form";

import { Signuphoestore } from "./shoe-paradise/login-Signup form/Signup-form";

import { Resetinfo } from "./shoe-paradise/login-Signup form/Reset-form";

import { Nav } from "./shoe-paradise/nav/nav"

import { Footer } from "./shoe-paradise/footer/footer"

import { Body } from "./shoe-paradise/body/body"

import { Details } from "./shoe-paradise/onclickAddDetails/onclickAddDetails";

import { Dashboard } from "./shoe-paradise/Admin panel/Dashboard/DAshboard"

import { Addtocart } from "./shoe-paradise/Add to Cart/Addtocart";

import axios from "axios";

import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";



export default function App() {

  let array =[
    {
      id:1,
      imgsrc:"https://m.media-amazon.com/images/I/711br4NBDtL._AC_SX535_.jpg",
      producttitle:"Brand: NIKE",
      productDesc:"NIKE Nike Air Zoom Vomero 14",
      Price:"144$",
      sideshowimgsrc1:"https://m.media-amazon.com/images/I/71MurPslsGL._AC_SY695_.jpg",
      sideshowimgsrc2:"https://m.media-amazon.com/images/I/717jzeTAJCL._AC_SX535_.jpg",
      sideshowimgsrc3:"https://m.media-amazon.com/images/I/61g363CQF+L._AC_SY675_.jpg",
      sideshowimgsrc4:"https://m.media-amazon.com/images/I/714O35qMJDL._AC_SX535_.jpg",
      sideshowimgsrc5:"https://m.media-amazon.com/images/I/7197OWaSWqL._AC_SX535_.jpg",
      sideshowimgsrc6:"https://m.media-amazon.com/images/I/41HiWupLQgL._AC_.jpg",

    },

    {
      id:2,
      imgsrc:"https://m.media-amazon.com/images/I/51FO4JZqqOL._AC_SY535_.jpg",
      producttitle:"Brand: Nike",
      productDesc:"Nike Air Zoom Pegasus 37 Tb",
      Price:"132$",
      sideshowimgsrc1:"https://m.media-amazon.com/images/I/51GdKgc5IcL._AC_SY535_.jpg",
      sideshowimgsrc2:"https://m.media-amazon.com/images/I/51xOevXG55L._AC_SY535_.jpg",
      sideshowimgsrc3:"https://m.media-amazon.com/images/I/51lF59G8xRL._AC_SY535_.jpg",
      sideshowimgsrc4:"https://m.media-amazon.com/images/I/51lF59G8xRL._AC_SY535_.jpg",
      sideshowimgsrc5:"https://m.media-amazon.com/images/I/51FO4JZqqOL._AC_SY535_.jpg",
      sideshowimgsrc6:"https://m.media-amazon.com/images/I/51GdKgc5IcL._AC_SY535_.jpg"
    },

    {
      id:3,
      imgsrc:"https://m.media-amazon.com/images/I/61cp7bIjU+L._AC_SX535_.jpg",
      producttitle:"Brand:Nike",
      productDesc:"NIKE Unisex's Metcon 5 Track Shoe",
      Price:"90$",
      sideshowimgsrc1:"https://m.media-amazon.com/images/I/61k6l7BJFaL._AC_SX675_.jpg",
      sideshowimgsrc2:"https://m.media-amazon.com/images/I/61k6l7BJFaL._AC_SX535_.jpg",
      sideshowimgsrc3:"https://m.media-amazon.com/images/I/61J9ut17SbL._AC_SX535_.jpg",
      sideshowimgsrc4:"https://m.media-amazon.com/images/I/61DCUzKl63L._AC_SX535_.jpg",
      sideshowimgsrc5:"https://m.media-amazon.com/images/I/61+PNOJ4McL._AC_SX535_.jpg",
      sideshowimgsrc6:"https://m.media-amazon.com/images/I/61cp7bIjU+L._AC_SX535_.jpg"
    },
    {
      id:4,
      imgsrc:"https://m.media-amazon.com/images/I/81lcbNmRh4L._AC_SX535_.jpg",
      producttitle:"Brand: NIKE",
      productDesc:"NIKE M NIKE AIR MAX ALPHA",
      Price:"120$",
      sideshowimgsrc1:"https://m.media-amazon.com/images/I/81YdBjid8eL._AC_SX535_.jpg",
      sideshowimgsrc2:"https://m.media-amazon.com/images/I/71sDpNk+ZgL._AC_SY535_.jpg",
      sideshowimgsrc3:"https://m.media-amazon.com/images/I/81UgqYvN6SL._AC_SY535_.jpg",
      sideshowimgsrc4:"https://m.media-amazon.com/images/I/71gTWsy5zbL._AC_SY695_.jpg",
      sideshowimgsrc5:"https://m.media-amazon.com/images/I/71HkKbmLkEL._AC_SX535_.jpg",
      sideshowimgsrc6:"https://m.media-amazon.com/images/I/81lcbNmRh4L._AC_SX535_.jpg"
    },
    {
      id:5,
      imgsrc:"https://m.media-amazon.com/images/I/51xO+XHOgBL._AC_SY500_.jpg",
      producttitle:"Brand: NIKE",
      productDesc:"NIKE Men's Metcon 6 Soccer Shoe",
      Price:"65$",
      sideshowimgsrc1:"https://m.media-amazon.com/images/I/51KBBAuchBL._AC_SY500_.jpg",
      sideshowimgsrc2:"https://m.media-amazon.com/images/I/6131zwHYFsL._AC_SY500_.jpg",
      sideshowimgsrc3:"https://m.media-amazon.com/images/I/51+Jqd1zFHL._AC_SY500_.jpg",
      sideshowimgsrc4:"https://m.media-amazon.com/images/I/51ACI7n7S4L._AC_SY500_.jpg",
      sideshowimgsrc5:"https://m.media-amazon.com/images/I/71U3ld67mZL._AC_SY500_.jpg",
      sideshowimgsrc6:"https://m.media-amazon.com/images/I/51xO+XHOgBL._AC_SY500_.jpg"
    },
    {
      id:6,
      imgsrc:"https://m.media-amazon.com/images/I/61D0z21DwPL._AC_SY625_.jpg",
      producttitle:"Brand:Nike",
      productDesc:"Nike Revolution 6 Flyease Nn mens Shoes",
      Price:"76$",
      sideshowimgsrc1:"https://m.media-amazon.com/images/I/61CB6ZwyJQL._AC_SY625_.jpg",
      sideshowimgsrc2:"https://m.media-amazon.com/images/I/71ExAMdCd8L._AC_SY625_.jpg",
      sideshowimgsrc3:"https://m.media-amazon.com/images/I/714nb4-IuOL._AC_SY625_.jpg",
      sideshowimgsrc4:"https://m.media-amazon.com/images/I/61BtOuZXzQL._AC_SY625_.jpg",
      sideshowimgsrc5:"https://m.media-amazon.com/images/I/810rp6FxrgL._AC_SY625_.jpg",
      sideshowimgsrc6:"https://m.media-amazon.com/images/I/61D0z21DwPL._AC_SY625_.jpg"
    },
    {
      id:7,
      imgsrc:"https://m.media-amazon.com/images/I/71rcqCwDSgL._AC_SY535_.jpg",
      producttitle:"Armour Store",
      productDesc:"Under Armour UA Surge 3-BLU",
      Price:"36$",
      sideshowimgsrc1:"https://m.media-amazon.com/images/I/615AQp7tanL._AC_SY500_.jpg",
      sideshowimgsrc2:"https://m.media-amazon.com/images/I/71rcqCwDSgL._AC_SY535_.jpg",
      sideshowimgsrc3:"https://m.media-amazon.com/images/I/71rcqCwDSgL._AC_SY535_.jpg",
      sideshowimgsrc4:"https://m.media-amazon.com/images/I/71t2K0cL05L._AC_SY535_.jpg",
      sideshowimgsrc5:"https://m.media-amazon.com/images/I/71VgcnARK2L._AC_SY535_.jpg",
      sideshowimgsrc6:"https://m.media-amazon.com/images/I/71rcqCwDSgL._AC_SY535_.jpg"
    },
    {
      id:8,
      imgsrc:"https://m.media-amazon.com/images/I/71ZFjuzSWJL._AC_SX535_.jpg",
      producttitle:"Brand: adidas",
      productDesc:"adidas Duramo 10 Shoes MN mens",
      Price:"73$",
      sideshowimgsrc1:"https://m.media-amazon.com/images/I/71ZFjuzSWJL._AC_SX535_.jpg",
      sideshowimgsrc2:"https://m.media-amazon.com/images/I/61pjnTP8c2L._AC_SY695_.jpg",
      sideshowimgsrc3:"https://m.media-amazon.com/images/I/71xrwS-I0uL._AC_SX535_.jpg",
      sideshowimgsrc4:"https://m.media-amazon.com/images/I/712+yYEvTlL._AC_SX535_.jpg",
      sideshowimgsrc5:"https://m.media-amazon.com/images/I/61lMXN-1R8L._AC_SX535_.jpg",
      sideshowimgsrc6:"https://m.media-amazon.com/images/I/71ZFjuzSWJL._AC_SX535_.jpg",
    },
    {
      id:9,
      imgsrc:"https://m.media-amazon.com/images/I/81zww09lYSL._AC_SX535_.jpg",
      producttitle:"Brand: Nike",
      productDesc:"Nike Nike Downshifter 8 mens",
      Price:"123$",
      sideshowimgsrc1:"https://m.media-amazon.com/images/I/91l1XQyf8UL._AC_SX535_.jpg",
      sideshowimgsrc2:"https://m.media-amazon.com/images/I/71qGMaOCVHL._AC_SX535_.jpg",
      sideshowimgsrc3:"https://m.media-amazon.com/images/I/71fXpRIBb3L._AC_SY695_.jpg",
      sideshowimgsrc4:"https://m.media-amazon.com/images/I/71JNg80B7+L._AC_SY675_.jpg",
      sideshowimgsrc5:"https://m.media-amazon.com/images/I/81QScUyRTnL._AC_SX535_.jpg",
      sideshowimgsrc6:"https://m.media-amazon.com/images/I/81zww09lYSL._AC_SX535_.jpg"
    },
    {
      id:10,
      imgsrc:"https://m.media-amazon.com/images/I/61palErTFEL._AC_SY535_.jpg",
      producttitle:"Brand: Nike",
      productDesc:"Nike Quest 5 mens Shoes Air comfort",
      Price:"69$",
      sideshowimgsrc1:"https://m.media-amazon.com/images/I/51mOZbgcIPL._AC_SY535_.jpg",
      sideshowimgsrc2:"https://m.media-amazon.com/images/I/71zA4r2+GKL._AC_SY535_.jpg",
      sideshowimgsrc3:"https://m.media-amazon.com/images/I/81NME60DPdL._AC_SY535_.jpg",
      sideshowimgsrc4:"https://m.media-amazon.com/images/I/711nJfoyc6L._AC_SY535_.jpg",
      sideshowimgsrc5:"https://m.media-amazon.com/images/I/611Z8abQNiL._AC_SY535_.jpg",
      sideshowimgsrc6:"https://m.media-amazon.com/images/I/61palErTFEL._AC_SY535_.jpg"
    },
    {
      id:11,
      imgsrc:"https://m.media-amazon.com/images/I/81SmlGeoJPL._AC_SX535_.jpg",
      producttitle:"Brand:Nike",
      productDesc:"Nike Air Zoom Pegasus 39 mens",
      Price:"76$",
      sideshowimgsrc1:"https://m.media-amazon.com/images/I/81gSKa+AZ4L._AC_SX535_.jpg",
      sideshowimgsrc2:"https://m.media-amazon.com/images/I/71I4pulT1mL._AC_SY535_.jpg",
      sideshowimgsrc3:"https://m.media-amazon.com/images/I/71-qtz8xK9L._AC_SX535_.jpg",
      sideshowimgsrc4:"https://m.media-amazon.com/images/I/81RamV-s0NL._AC_SX535_.jpg",
      sideshowimgsrc5:"https://m.media-amazon.com/images/I/81PvHpXJX2L._AC_SX535_.jpg",
      sideshowimgsrc6:"https://m.media-amazon.com/images/I/81SmlGeoJPL._AC_SX535_.jpg"
    },
    {
      id:12,
      imgsrc:"https://m.media-amazon.com/images/I/811V2e8vZuL._AC_SX535_.jpg",
      producttitle:"Brand:Nike",
      productDesc:"NIKE Nike Air Zoom Structure 24",
      Price:"87$",
      sideshowimgsrc1:"https://m.media-amazon.com/images/I/91IG5ul-uIL._AC_SY695_.jpg",
      sideshowimgsrc2:"https://m.media-amazon.com/images/I/71QjOewqLoL._AC_SX535_.jpg",
      sideshowimgsrc3:"https://m.media-amazon.com/images/I/71QjOewqLoL._AC_SX535_.jpg",
      sideshowimgsrc4:"https://m.media-amazon.com/images/I/81KBTs91mjL._AC_SX535_.jpg",
      sideshowimgsrc5:"https://m.media-amazon.com/images/I/81KBTs91mjL._AC_SX535_.jpg",
      sideshowimgsrc6:"https://m.media-amazon.com/images/I/811V2e8vZuL._AC_SX535_.jpg"
    },


    {
    id:13,
    imgsrc:"https://m.media-amazon.com/images/I/71zskCThEtL._AC_SX535_.jpg",
    producttitle:"Brand:Nike",
    productDesc:"Nike NIKE METCON 6 Men's Soccer ",
    Price:"99$",
    sideshowimgsrc1:"https://m.media-amazon.com/images/I/71mOTqU-wlL._AC_SY535_.jpg",
    sideshowimgsrc2:"https://m.media-amazon.com/images/I/81Bnnd+JfQL._AC_SX535_.jpg",
    sideshowimgsrc3:"https://m.media-amazon.com/images/I/71zskCThEtL._AC_SX535_.jpg",
    sideshowimgsrc4:"https://m.media-amazon.com/images/I/71mOTqU-wlL._AC_SY535_.jpg",
    sideshowimgsrc5:"https://m.media-amazon.com/images/I/81FHMfTgchL._AC_SX535_.jpg",
    sideshowimgsrc6:"https://m.media-amazon.com/images/I/81Bnnd+JfQL._AC_SX535_.jpg"
  },


  {
    id:14,
    imgsrc:"https://m.media-amazon.com/images/I/81+QsTiSxFL._AC_SX535_.jpg",
    producttitle:"Brand:Nike ",
    productDesc:"Nike Air Max Exosense Running Shoe",
    Price:"122$",
    sideshowimgsrc1:"https://m.media-amazon.com/images/I/717bCYaZjWL._AC_SY695_.jpg",
    sideshowimgsrc2:"https://m.media-amazon.com/images/I/71F0bHegTeL._AC_SY695_.jpg",
    sideshowimgsrc3:"https://m.media-amazon.com/images/I/710rado3ytL._AC_SX535_.jpg",
    sideshowimgsrc4:"https://m.media-amazon.com/images/I/81aFsPvU0ZL._AC_SX535_.jpg",
    sideshowimgsrc5:"https://m.media-amazon.com/images/I/81VO5B8I6aL._AC_SX535_.jpg",
    sideshowimgsrc6:"https://m.media-amazon.com/images/I/81+QsTiSxFL._AC_SX535_.jpg"
  },

  {
    id:15,
    imgsrc:"https://m.media-amazon.com/images/I/71rSyW++jsS._AC_SX535_.jpg",
    producttitle:"Brand:Nike",
    productDesc:"NIKE Men's React Element 55 Running Element",
    Price:"93$",
    sideshowimgsrc1:"https://m.media-amazon.com/images/I/71skVi-9sVS._AC_SY695_.jpg",
    sideshowimgsrc2:"https://m.media-amazon.com/images/I/71-nlGDBwZS._AC_SY695_.jpg",
    sideshowimgsrc3:"https://m.media-amazon.com/images/I/71AWgiOom7S._AC_SX535_.jpg",
    sideshowimgsrc4:"https://m.media-amazon.com/images/I/71afC8BVDDS._AC_SX535_.jpg",
    sideshowimgsrc5:"https://m.media-amazon.com/images/I/81zFlzsvmTS._AC_SX535_.jpg",
    sideshowimgsrc6:"https://m.media-amazon.com/images/I/71rSyW++jsS._AC_SX535_.jpg"
  },


  {
    id:16,
    imgsrc:"https://m.media-amazon.com/images/I/71oJoVLS5jL._AC_SX535_.jpg",
    producttitle:"Brand:Nike",
    productDesc:"Nike Metcon 6 Men Soccer Pure cloud",
    Price:"122$",
    sideshowimgsrc1:"https://m.media-amazon.com/images/I/71UtFWx5PaL._AC_SX535_.jpg",
    sideshowimgsrc2:"https://m.media-amazon.com/images/I/61BldlbRKaL._AC_SY695_.jpg",
    sideshowimgsrc3:"https://m.media-amazon.com/images/I/61WYbXGBjHL._AC_SY695_.jpg",
    sideshowimgsrc4:"https://m.media-amazon.com/images/I/61Iym46ivEL._AC_SX535_.jpg",
    sideshowimgsrc5:"https://m.media-amazon.com/images/I/71TEY++QHML._AC_SX535_.jpg",
    sideshowimgsrc6:"https://m.media-amazon.com/images/I/71oJoVLS5jL._AC_SX535_.jpg"
  },


  ];


  let dispatch =useDispatch();

  useEffect(()=>{

    axios.post('/local-storage',{Token:localStorage.getItem("logintoken")}).then((res)=>{
      
      dispatch(
        {
        type:"User-login",
        Payload:res.data
      }
    )

    })    

  },[])

  return <>
   
   
    <BrowserRouter>
     <Nav/>
    <Routes>
    <Route path="/" element={<Body a3={array}/>}></Route> 
    <Route path="/Login" element={<Loginshoestore/>}></Route>
    <Route path="/Login/nid" element={<Loginshoestore/>}></Route>
    <Route path="/Signup" element={<Signuphoestore/>}></Route>
    <Route path="/Reset-info" element={<Resetinfo/>}></Route>
    <Route path="/Adminpanel" element={<Dashboard/>}></Route>
    <Route path="/products" element={<Products />}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/addtocart/:cartID" element={<Addtocart a4={array}/>}></Route>
    <Route path="/order/:orderID" element={<Details a1={array}  />}></Route>
    <Route path="/Allproducts" element={<Allproducts  />}></Route>
    <Route path="/Completedorders" element={<Completedorders/>}></Route>
    <Route path="/Table" element={<Table/>}></Route> 
    <Route path="/" element={<Table/>}></Route>
    </Routes>
     <Footer/>
    </BrowserRouter>
  </>
}






function Table() {
 
  let [user,newuser]=useState([]);

useEffect(()=>{

  axios.get("/get-user").then((res)=>{
        newuser(res.data);
  })

},[]) 

return <table>
  <thead>
        <tr>
          <th>Name</th>---------
          <th>Email</th>----------
          <th>Password</th>---------
          <th>Id</th>
        </tr>
      </thead>
  {
    user.map((data,index)=>{
      return <tr>
        <td>{data.username}</td>-----------
        <td>{data.email}</td>-----------
        <td>{data.password}</td>-----------
        <td>{data.id}</td>-----------
        <td><button onClick={()=>{
            
            axios.delete('/delete-user?key='+index)
            
            user.splice(index,1);

            newuser([...user])

        }}>Delete</button></td>-----------

        
      
      </tr>
      
    })
  }
</table>
}











// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import { Navfrombootstrap } from "./crud operator/nav/Navbootstrap";
// import { Form } from "./crud operator/Form/Form";
// import { Table } from "./crud operator/table";
// import { Login } from "./crud operator/Form/Form";
// export default function App() {
//   return <>
//   <BrowserRouter>
//   <Navfrombootstrap/>
//   <Routes>
//     <Route path="/login" element={<Login/>}></Route>
//     <Route path="/sign/:userid" element={<Form/>}></Route>
//     <Route path="/sign" element={<Form/>}></Route>
//     <Route path="/dummy" element={<Dummy/>}></Route>
//     <Route path="/table" element={<Table/>}></Route>
//   </Routes>
//   </BrowserRouter>
//   </>
// }


// function Dummy() {
//   return <div>
//     Hello this is the working in which we are groomed 
//   </div>
// }





