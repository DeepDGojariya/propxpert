import React from 'react'


export default function Properties() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Filters</h5>
                        <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                            <input type="checkbox" class="btn-check" id="bhk1" autocomplete="off" />
                            <label class="btn btn-outline-primary" for="bhk1">1BHK</label>

                            <input type="checkbox" class="btn-check" id="bhk2" autocomplete="off" />
                            <label class="btn btn-outline-primary" for="bhk2">2BHK</label>

                            <input type="checkbox" class="btn-check" id="bhk3" autocomplete="off" />
                            <label class="btn btn-outline-primary" for="bhk3">3BHK</label>
                        </div>
                        <br />
                        <br />
                        <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                            <input type="checkbox" class="btn-check" id="city1" autocomplete="off" />
                            <label class="btn btn-outline-primary" for="city1">Mumbai</label>

                            <input type="checkbox" class="btn-check" id="city2" autocomplete="off" />
                            <label class="btn btn-outline-primary" for="city2">Bangalore</label>

                            <input type="checkbox" class="btn-check" id="city3" autocomplete="off" />
                            <label class="btn btn-outline-primary" for="city3">Delhi</label>
                            <br />
                            <br />
                            <input type="checkbox" class="btn-check" id="city4" autocomplete="off" />
                            <label class="btn btn-outline-primary" for="city4">Kolkata</label>

                            <input type="checkbox" class="btn-check" id="city5" autocomplete="off" />
                            <label class="btn btn-outline-primary" for="city5">Chennai</label>
                        </div>
                        <br />
                        <br />
                        <div className="" style={{ width: "200px" }}>
                            <label for="customRange1" class="form-label"><h6>Price Range</h6></label>
                            <input type="range" class="form-range" id="customRange1"></input>
                        </div>

                        <button className="btn btn-primary my-2">Filter Properties</button>
                    </div>
                    <div className="col-md-8">
                        <h5>Properties</h5>
                        <div className="container">
                            <div class="card mb-3" style={{maxWidth: "540px"}}>
                                <div class="row g-0">
                                    <div class="col-md-3">
                                        <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg" class="img-fluid rounded-start" alt="..."/>
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
                            <div class="card mb-3" style={{maxWidth: "540px"}}>
                                <div class="row g-0">
                                    <div class="col-md-3">
                                        <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg" class="img-fluid rounded-start" alt="..."/>
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
                </div>
            </div>
        </div>
    )
}
