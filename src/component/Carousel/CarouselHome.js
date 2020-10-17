import React from "react";
import '../../styles/css/CarouselHome.css'

function MainCarousel(props) {
    return (
    <>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
			  <ol class="carousel-indicators">
          {props.itemList.map((index)=>{
            let activeClass = (index === 0) ? 'active' : ''
            return(
              <li data-target="#carouselExampleIndicators" data-slide-to={index} class={activeClass}></li>
            )
          })}
			  </ol>
			  <div class="carousel-inner">
        {
                props.itemList.map((item, index)=>{
                  let activeClass = (index === 0) ? 'carousel-item active' : 'carousel-item'
                    return(
                      <div key={index} class={activeClass}  style={{	background: `url(${item.url})`,height:"100%", width:"100%", 	backgroundSize: "100% 100%", backgroundPosition: "center"}}>
                      <div class="info">
                    <h1>{item.name}</h1>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                        </div>
                    </div>
                    )
                })
            }
			  </div>
			  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
			    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
			    <span class="sr-only">Previous</span>
			  </a>
			  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
			    <span class="carousel-control-next-icon" aria-hidden="true"></span>
			    <span class="sr-only">Next</span>
			  </a>
			</div>
    </>
    )
}
export default MainCarousel;