import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-3 m-3">
        <div className="col-6 p-3 m">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O,why is my order getting rejected.." />
          <br />
          <a href="">Track account opening</a> <br/>
          <a href="">Track segment activation</a><br/>
          <a href="">Intraday margins</a> <br/>
          <a href="">Kite user manual</a> <br/>
        </div>
        <div className="col-6 p-3">
        
        
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="" style={{lineHeight:"2"}} >Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
    
      </div>
    </section>
  );
}

export default Hero;