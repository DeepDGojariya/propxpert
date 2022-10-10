import React from 'react'

export default function Listings() {
  return (
    <>
 
      <div class="container">
    <h2>My Listings</h2>
        <div class="row">
          <div class="col-12 mt-3">
            <div class="card">
              <div class="card-horizontal" style={{display: "flex",flex: "1 1 auto"}}>
                <div class="img-square-wrapper col-3">
                  <img className='card-img img-thumbnail' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe8IQrpci_lb0KcKSoTutxeFX25kDxHk2SfcDguEUp&s" alt="Card cap" />
                </div>
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
              {/* <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div> */}
            </div>
          </div>
          <div class="col-12 mt-3">
            <div class="card">
              <div class="card-horizontal" style={{display: "flex",flex: "1 1 auto"}}>
                <div class="img-square-wrapper col-3">
                  <img className='card-img img-thumbnail' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe8IQrpci_lb0KcKSoTutxeFX25kDxHk2SfcDguEUp&s" alt="Card cap" />
                </div>
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
              {/* <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div> */}
            </div>
          </div>
          <div class="col-12 mt-3">
            <div class="card">
              <div class="card-horizontal" style={{display: "flex",flex: "1 1 auto"}}>
                <div class="img-square-wrapper col-3">
                  <img className='card-img img-thumbnail' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe8IQrpci_lb0KcKSoTutxeFX25kDxHk2SfcDguEUp&s" alt="Card cap" />
                </div>
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
              {/* <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
