import { useDispatch, useSelector } from "react-redux";

import "./nav.css"

import { Link } from "react-router-dom";

export function Nav() {

  let dispatch = useDispatch();

  let logeddata = useSelector((store) => {

    return store.loginacceptd.accepted;

  })

  return <div>
    <nav>
      <div class="nav-wrapper">
        <ul id="nav-mobile" >
          <li><Link to="/"><img className="naver" src="https://shoe-paradies-myok1ii3u-aliahmad051999-gmailcom.vercel.app/_next/image?url=%2Faddidas.jpg&w=96&q=75" /></Link></li>
          <span>{logeddata != null ? logeddata.email : null}</span>
          {
            logeddata == null ? <><li><Link to="/Login" className="navtext1">Log in </Link></li>

            </>

              : <li><Link to="/Login" className="navtext1" onClick={(() => {

                dispatch({
                  type: "User-logout"
                })

              })}>Logout </Link></li>
          }
          <li><Link to="/Adminpanel" className="navtext2">Admin panel</Link></li>
        </ul>
      </div>
    </nav>
  </div>
}







