import React from "react";
import '../../styles/css/CarouselHome.css'

function CarouselHome(props) {
    return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
			  <ol className="carousel-indicators">
          {props.itemList.map((item, index)=>{
            let activeClass = (index === 0) ? 'active' : ''
            return(
              <li key={item.id} data-target="#carouselExampleIndicators" data-slide-to={index} className={activeClass}></li>
            )
          })}
			  </ol>
			  <div className="carousel-inner">
        {
                props.itemList.map((item, index)=>{
                  let activeClass = (index === 0) ? 'carousel-item active' : 'carousel-item'
                    return(
                      <div key={item.id} className={activeClass}  style={{	background: `url(${item.url})`,height:"100%", width:"100%", 	backgroundSize: "100% 100%", backgroundPosition: "center"}}>
                      <div className="info">
                    <h1>{item.name}</h1>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                        </div>
                    </div>
                    )
                })
            }
			  </div>
			  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
			    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
			    <span className="sr-only">Previous</span>
			  </a>
			  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
			    <span className="carousel-control-next-icon" aria-hidden="true"></span>
			    <span className="sr-only">Next</span>
			  </a>
			</div>
    </>
    )
}
export default CarouselHome;