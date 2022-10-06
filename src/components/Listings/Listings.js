import React from 'react'

export default function Listings() {
    return (
        <>
        
            <div className="container">
            <div className="row">
            <h4>My Listings</h4>
            <hr />
            </div>
            <div className="row">
                <div class="card mb-3 col-md-12" style={{maxHeight:"max-content"}}>
                    <div class="row">
                        <div class="col-md-3 p-0" style={{maxWidth:"max-content"}}>
                            <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg" class="img-fluid rounded-start" alt="..." width={150} height={150}/>
                        </div>
                        <div class="col-md-5">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3 col-md-12" style={{maxHeight:"max-content"}}>
                    <div class="row">
                        <div class="col-md-3 p-0" style={{maxWidth:"max-content"}}>
                            <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg" class="img-fluid rounded-start" alt="..." width={150} height={150}/>
                        </div>
                        <div class="col-md-5">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                
                </div>
            </div>
        </>
    )
}
