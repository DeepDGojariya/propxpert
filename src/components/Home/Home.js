import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Home({fp}) {
  const [location,setLocation] = useState('')
  const [type,setType] = useState('')
  let url = 'http://localhost:4000/api/v1/filter-property'
  const navigate = useNavigate()
  const searchHandler = (e)=>{
    e.preventDefault()
    console.log(type);
    const queryParams = '?type='+type+'&location='+location
    url=url+queryParams
    fp(url)
    navigate('/properties')
  }

  const settings = {
    dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true
  };

  return (
    <div>
      
      <div className="p-1 text-center bg-image rounded-3" >
        <div className="mask" >
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="">
              <h1 className="mb-3" style={{ color: "#1B2430", fontFamily: "Lato" }}>Find the Home you'll Love</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="search-sec">
        <div className="container">
          <form onSubmit={searchHandler}>
            <div className="row">
              <div className="col-lg-12 ">
                <div className="row ms-5">
                  <div className="col-lg-3 col-md-2 col-sm-12 p-0">
                    <select className="form-control search-slt" id="location-select" value={location} onChange={e=>setLocation(e.target.value)}>
                      <option>Location</option>
                      <option value="mumbai">Mumbai</option>
                      <option value="bangalore">Bangalore</option>
                      <option value="delhi">Delhi</option>
                      <option value="kolkata">Kolkata</option>
                      <option value="chennai">Chennai</option>
                    </select>
                  </div>
                  <div className="col-lg-3 col-md-2 col-sm-12 p-0">
                    <select className="form-control search-slt" id="property-type-select" value={type} onChange={e=>setType(e.target.value)}>
                    <option>Type</option>
                      <option value="sale">Buy</option>
                      <option value="rent">Rent</option>
                    </select>
                  </div>
                  <div className="col-lg-3 col-md-2 col-sm-12 p-0">
                    <input type="text" className="form-control search-slt" id='budget' placeholder="Budget"/>
                  </div>
                  <div className="col-lg-3 col-md-2 col-sm-12 p-0 m-0">
                    <button type="submit" style={{backgroundColor:"#51557E",color:"white"}} className="btn w-50">Search</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      
      <div>
      <div><div>
<div><br></br></div>
<div className="container my-2">
   <Slider {...settings}>
    <div class="col-md-3">
    <img src="https://media.istockphoto.com/photos/gateway-of-india-mumbai-maharashtra-monument-landmark-famous-place-picture-id1307189136?b=1&k=20&m=1307189136&s=170667a&w=0&h=F-BSrbduokK7pz1AEOwOGuoDe2xd28wnSyZpll4Jzks=" class="img-fluid rounded-start" alt="..." style={{height:"400px", width :"400px"}}/>
    </div>
    <div class="col-md-3">
    <img src="https://wallpaperaccess.com/full/1180008.jpg" class="img-fluid rounded-start" alt="..." style={{height:"400px", width :"400px"}} />
</div>
<div class="col-md-3">
<img src="https://images.pexels.com/photos/6210324/pexels-photo-6210324.jpeg?cs=srgb&dl=pexels-kulish-rawal-6210324.jpg&fm=jpg" class="img-fluid rounded-start" alt="..." style={{height:"400px", width :"400px"}}/>
 </div>
<div class="col-md-3">
    <img src="https://www.pallaviintlhotel.com/img/Howrah.jpg" class="img-fluid rounded-start" alt="..." style={{height:"400px", width :"400px"}}/>
</div>
<div class="col-md-3">
 <img src="https://wallpaperaccess.com/full/1896134.jpg" class="img-fluid rounded-start" alt="..." style={{height:"400px", width :"400px"}} />
</div>
<div class="col-md-3">
 <img src="https://i.pinimg.com/originals/62/5c/f7/625cf7d1f13aeababb4669a880e2c4cc.jpg" class="img-fluid rounded-start" alt="..." style={{height:"400px", width :"400px"}} />
</div>
 
<div class="col-md-3">
 <img src="https://akshardham.com/newdelhi/wp-content/uploads/2015/05/akshardham_monument_with_sarovar-002.jpg" class="img-fluid rounded-start" alt="..." style={{height:"400px", width :"400px"}} />
</div>
 
<div class="col-md-3">
 <img src="https://image3.mouthshut.com/images/imagesp/925773303s.jpg" class="img-fluid rounded-start" alt="..." style={{height:"400px", width :"400px"}} />
</div>
 
<div class="col-md-3">
 <img src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlbm5haSUyQyUyMGluZGlhfGVufDB8fDB8fA%3D%3D&w=1000&q=80" class="img-fluid rounded-start" alt="..." style={{height:"400px", width :"400px"}} />
</div>
 
<div class="col-md-3">
 <img src="https://ancientterminus.com/wp-content/uploads/2020/04/Mahabalipuram-Feature-Img.jpg" class="img-fluid rounded-start" alt="..." style={{height:"400px", width :"400px"}} />
</div>
 
<div class="col-md-3">
 <img src="https://media.istockphoto.com/photos/side-view-of-mgr-central-railway-station-at-night-chennai-tamilnaidu-picture-id1336468767?b=1&k=20&m=1336468767&s=170667a&w=0&h=D8wAs8y_SnKzg4vBIPvY31qXyeo6ua-iXgDvakWDWZI=" class="img-fluid rounded-start" alt="..." style={{height:"400px", width :"400px"}} />
</div>
 
 
 
<div class="col-md-3">
 <img src="https://cutewallpaper.org/22/india-4k-wallpapers/842121161.jpg" class="img-fluid rounded-start" alt="..." style={{height:"400px", width :"400px"}} />
</div>
<div class="col-md-3">
 <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIwZGVsaGklMjBpbmRpYXxlbnwwfHwwfHw%3D&w=1000&q=80" class="img-fluid rounded-start" alt="..." style={{height:"400px", width :"400px"}} />
</div>
<div class="col-md-3">
<img src="https://images.pexels.com/photos/6210324/pexels-photo-6210324.jpeg?cs=srgb&dl=pexels-kulish-rawal-6210324.jpg&fm=jpg" class="img-fluid rounded-start" alt="..." style={{height:"400px", width :"400px"}}/>
 </div>
      <div class="col-md-3">
<img src="https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto,q_auto:eco,c_limit/21644818922669.jpg" class="img-fluid rounded-start" alt="..." style={{height:"400px", width :"400px"}}/>
 </div>
    </Slider>
    </div>
    <div><br></br></div>
    <div><br></br></div>
  </div></div>
      </div>
    </div>
  )
}
