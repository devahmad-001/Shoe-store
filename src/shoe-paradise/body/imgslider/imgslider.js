

import "./imgslider.css";

export function Silder() {

  return <div id="carouselExampleCaptions" className="carousel slide">
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={1}
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={2}
        aria-label="Slide 3"
      />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active " >
        <img src="https://www.prodirectsport.com/-/media/prodirect/project/en/running/billboards/shoes/standard/hoka/clifton-9-gore-tex/bb-hoka-clifton-9-gtx-d-250923.jpg?impolicy=thumb&imwidth=1440" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>Hoka Running Champion</h5>
          <p>Go For Comfort And Running for Altra </p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://www.prodirectsport.com/-/media/prodirect/project/en/running/billboards/shoes-and-clothing/adidas/terrex/bb/bb-d-adidas-terrex-mix.jpg" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>Winter Ready</h5>
          <p>Run in water-resistant with PUMA forever run WTR</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>Storm Ahead</h5>
          <p>Nike Juniper Trail 2 GORE-TEX.</p>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>


}

// https:assets.bwbx.io/images/users/iqjWHBFdfxIU/i4jPhKEFw1NE/v0/-1x-1.jpg
// https:www.prodirectsport.com/running