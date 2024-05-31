
import "./About.css"

export function About(){
return <div className="productcontainer">
    {/* For Demo Purpose*/}
    {/* Second Row [Team]*/}
    <h2 id="team" className="font-weight-bold mb-2">Our Team</h2>
    
    <div  className="row pb-5 mb-4">
      <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
        {/* Card*/}
        <div className="card shadow-sm border-0 rounded">
          <div className="card-body p-0">
            <img
              src="https://bootstrapious.com/i/snippets/sn-cards/profile-1_dewapk.jpg"
              alt=""
              className="w-100 card-img-top"
            />
            <div className="p-4">
              <h5 className="mb-0">Mark Rockwell</h5>
              <p className="small text-muted">CEO - Consultant</p>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item m-0">
                  <a href="#" className="social-link">
                    <i className="fa fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item m-0">
                  <a href="#" className="social-link">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item m-0">
                  <a href="#" className="social-link">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li className="list-inline-item m-0">
                  <a href="#" className="social-link">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
        {/* Card*/}
        <div className="card shadow-sm border-0 rounded">
          <div className="card-body p-0">
            <img
              src="https://bootstrapious.com/i/snippets/sn-cards/profile-3_ybnq8v.jpg"
              alt=""
              className="w-100 card-img-top"
            />
            <div className="p-4">
              <h5 className="mb-0">James Richard</h5>
              <p className="small text-muted">Managing Director</p>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item m-0">
                  <a href="#" className="social-link">
                    <i className="fa fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item m-0">
                  <a href="#" className="social-link">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item m-0">
                  <a href="#" className="social-link">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li className="list-inline-item m-0">
                  <a href="#" className="social-link">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
        {/* Card*/}
        <div className="card shadow-sm border-0 rounded">
          <div className="card-body p-0">
            <img
              src="https://bootstrapious.com/i/snippets/sn-cards/profile-2_ujssbj.jpg"
              alt=""
              className="w-100 card-img-top"
            />
            <div className="p-4">
              <h5 className="mb-0">Eddy Andrews</h5>
              <p className="small text-muted">Administrator</p>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item m-0">
                  <a href="#" className="social-link">
                    <i className="fa fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item m-0">
                  <a href="#" className="social-link">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item m-0">
                  <a href="#" className="social-link">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li className="list-inline-item m-0">
                  <a href="#" className="social-link">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Third Row [Profiles]*/}
    <h2 className="font-weight-bold mb-2">Active Profiles</h2>
    <div className="row pb-5 mb-4">
      <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
        {/* Card*/}
        <div className="card rounded shadow-sm border-0">
          <div className="card-body p-0">
            <div className="bg-primary px-5 py-4 text-center card-img-top">
              <img
                src="https://bootstrapious.com/i/snippets/sn-cards/teacher-4.jpg"
                alt="..."
                width={100}
                className="rounded-circle mb-2 img-thumbnail d-block mx-auto"
              />
              <h5 className="text-white mb-0">Emma Nevoresky</h5>
              <p className="small text-white mb-0">Elite user</p>
            </div>
            <div className="p-4 d-flex justify-content-center">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <h5 className="font-weight-bold mb-0 d-block">543</h5>
                  <small className="text-muted">
                    <i className="fa fa-picture-o mr-1 text-primary" />
                    Photos
                  </small>
                </li>
                <li className="list-inline-item">
                  <h5 className="font-weight-bold mb-0 d-block">44.5K</h5>
                  <small className="text-muted">
                    <i className="fa fa-user-circle-o mr-1 text-primary" />
                    Followers
                  </small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
        {/* Card*/}
        <div className="card rounded shadow-sm border-0">
          <div className="card-body p-0">
            <div className="bg-success px-5 py-4 text-center card-img-top">
              <img
                src="https://bootstrapious.com/i/snippets/sn-cards/teacher-2.jpg"
                alt="..."
                width={100}
                className="rounded-circle mb-2 img-thumbnail d-block mx-auto"
              />
              <h5 className="text-white mb-0">Samuel Hardy</h5>
              <p className="small text-white mb-0">Elite user</p>
            </div>
            <div className="p-4 d-flex justify-content-center">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <h5 className="font-weight-bold mb-0 d-block">241</h5>
                  <small className="text-muted">
                    <i className="fa fa-picture-o mr-1 text-success" />
                    Photos
                  </small>
                </li>
                <li className="list-inline-item">
                  <h5 className="font-weight-bold mb-0 d-block">84K</h5>
                  <small className="text-muted">
                    <i className="fa fa-user-circle-o mr-1 text-success" />
                    Followers
                  </small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
        {/* Card*/}
        <div className="card rounded shadow-sm border-0">
          <div className="card-body p-0">
            <div className="bg-info px-5 py-4 text-center card-img-top">
              <img
                src="https://bootstrapious.com/i/snippets/sn-cards/teacher-7.jpg"
                alt="..."
                width={100}
                className="rounded-circle mb-2 img-thumbnail d-block mx-auto"
              />
              <h5 className="text-white mb-0">Tom Sunderland</h5>
              <p className="small text-white mb-0">Elite user</p>
            </div>
            <div className="p-4 d-flex justify-content-center">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <h5 className="font-weight-bold mb-0 d-block">2k</h5>
                  <small className="text-muted">
                    <i className="fa fa-picture-o mr-1 text-info" />
                    Photos
                  </small>
                </li>
                <li className="list-inline-item">
                  <h5 className="font-weight-bold mb-0 d-block">9.5K</h5>
                  <small className="text-muted">
                    <i className="fa fa-user-circle-o mr-1 text-info" />
                    Followers
                  </small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
        {/* Card*/}
        <div className="card rounded shadow-sm border-0">
          <div className="card-body p-0">
            <div className="bg-warning px-5 py-4 text-center card-img-top">
              <img
                src="https://bootstrapious.com/i/snippets/sn-cards/teacher-1.jpg"
                alt="..."
                width={100}
                className="rounded-circle mb-2 img-thumbnail d-block mx-auto"
              />
              <h5 className="text-white mb-0">John Tarly</h5>
              <p className="small text-white mb-0">Elite user</p>
            </div>
            <div className="p-4 d-flex justify-content-center">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <h5 className="font-weight-bold mb-0 d-block">700</h5>
                  <small className="text-muted">
                    <i className="fa fa-picture-o mr-1 text-warning" />
                    Photos
                  </small>
                </li>
                <li className="list-inline-item">
                  <h5 className="font-weight-bold mb-0 d-block">1M</h5>
                  <small className="text-muted">
                    <i className="fa fa-user-circle-o mr-1 text-warning" />
                    Followers
                  </small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* First Row [Statistics]*/}
    <h2 className="font-weight-bold mb-2">Latest Statistics</h2>
    <div className="row pb-5">
      <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
        {/* Card*/}
        <div className="card rounded shadow-sm border-0">
          <div className="card-body p-5">
            <i className="fa fa-bar-chart fa-2x mb-3 text-primary" />
            <h5>Products Sales</h5>
            <p className="small text-muted font-italic">
              Sales are increased day by day due to flat 50% off on products 
            </p>
            <div className="progress rounded-pill">
              <div
                role="progressbar"
                aria-valuenow={70}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "70%" }}
                className="progress-bar rounded-pill"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
        {/* Card */}
        <div className="card rounded shadow-sm border-0">
          <div className="card-body p-5">
            <i className="fa fa-tasks fa-2x mb-3 text-success" />
            <h5>Completed Tasks</h5>
            <p className="small text-muted font-italic">
              Good progress and costumers are satisfied 
            </p>
            <div className="progress rounded-pill">
              <div
                role="progressbar"
                aria-valuenow={80}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "80%" }}
                className="progress-bar bg-success rounded-pill"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
        {/* Card */}
        <div className="card rounded shadow-sm border-0">
          <div className="card-body p-5">
            <i className="fa fa-user-circle-o fa-2x mb-3 text-info" />
            <h5>New Users</h5>
            <p className="small text-muted font-italic">
            on big deals special Discounts are available for new users 
            </p>
            <div className="progress rounded-pill">
              <div
                role="progressbar"
                aria-valuenow={70}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "70%" }}
                className="progress-bar bg-info rounded-pill"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Card */}
      <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
        <div className="card rounded shadow-sm border-0">
          <div className="card-body p-5">
            <i className="fa fa-shopping-bag fa-2x mb-3 text-warning" />
            <h5>New Products</h5>
            <p className="small text-muted font-italic">
              new products are available and unlock their best
            </p>
            <div className="progress rounded-pill">
              <div
                role="progressbar"
                aria-valuenow={70}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "70%" }}
                className="progress-bar bg-warning rounded-pill"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
}