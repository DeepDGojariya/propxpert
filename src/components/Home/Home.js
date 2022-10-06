import React from 'react'


export default function Home() {
  return (
    <div>




      <div className="p-5 text-center bg-image rounded-3" >
        <div className="mask" >
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-red">
              <h1 className="mb-3" style={{ color: "#1B2430", fontFamily: "Lato" }}>Find the Home you'll Love</h1>
            </div>
          </div>
        </div>
      </div>




      <section className="search-sec">
        <div className="container ">
          <form action="/" method="post" novalidate="novalidate">
            <div className="row">
              <div className="col-lg-12">
                <div className="row m-auto">



                  <div className="col-lg-3 col-md-2 col-sm-12 p-0">
                    <select className="form-control search-slt" id="exampleFormControlSelect1">
                      <option>Location</option>
                      <option>Mumbai</option>
                      <option>Bangalore</option>
                      <option>Delhi</option>
                      <option>Kolkata</option>
                      <option>Chennai</option>
                    </select>
                  </div>


                  <div className="col-lg-3 col-md-2 col-sm-12 p-0">
                    <select className="form-control search-slt" id="exampleFormControlSelect1">
                      <option>Buy</option>
                      <option>Sell</option>
                    </select>
                  </div>

                  <div className="col-lg-3 col-md-2 col-sm-12 p-0">
                    <input type="text" className="form-control search-slt" placeholder="Budget" />
                  </div>
                  <div className="col-lg-3 col-md-2 col-sm-12 p-0 m-auto">
                    <button type="button" className="btn btn-danger">Search</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>


      <div>
        <div className="container">

          <h1 className="fw-light text-center text-lg-start mt-4 mb-0">Thumbnail Gallery</h1>

          <hr className="mt-2 mb-5" />

          <div className="row text-center text-lg-start">

            <div className="col-lg-3 col-md-4 col-6">
              <a href="/" className="d-block mb-4 h-100">
                <img className="img-fluid img-thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1gC9HT_YdK86QKGGk9HsGw8aRodeabTxkJ0kqfmc5ZYn4p8J2a3g6OlarjPk3IjXLL6Y&usqp=CAU" alt="" />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="/" className="d-block mb-4 h-100">
                <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/aob0ukAYfuI/400x300" alt="" />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="/" className="d-block mb-4 h-100">
                <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/EUfxH-pze7s/400x300" alt="" />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="/" className="d-block mb-4 h-100">
                <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/M185_qYH8vg/400x300" alt="" />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="/" className="d-block mb-4 h-100">
                <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/sesveuG_rNo/400x300" alt="" />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="/" className="d-block mb-4 h-100">
                <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/AvhMzHwiE_0/400x300" alt="" />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="/" className="d-block mb-4 h-100">
                <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/2gYsZUmockw/400x300" alt="" />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="/" className="d-block mb-4 h-100">
                <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/EMSDtjVHdQ8/400x300" alt="" />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="/" className="d-block mb-4 h-100">
                <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/8mUEy0ABdNE/400x300" alt="" />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="/" className="d-block mb-4 h-100">
                <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/G9Rfc1qccH4/400x300" alt="" />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="/" className="d-block mb-4 h-100">
                <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/aJeH0KcFkuc/400x300" alt="" />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="/" className="d-block mb-4 h-100">
                <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/p2TQ-3Bh3Oo/400x300" alt="" />
              </a>
            </div>
          </div>

        </div>
      </div>





    </div>
  )
}
