import React, {useState} from "react";
import '../../styles/scss/HomeCarousel.scss'

const photos =[
    {
        name:"Carousel-1",
        url:"https://images.unsplash.com/photo-1526178613552-2b45c6c302f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    },
    {
        name:"Carousel-2",
        url:"https://images.unsplash.com/photo-1513451732213-5775a1c40335?ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
    },
    {
        name:"Carousel-3",
        url:"https://images.unsplash.com/photo-1583316174775-bd6dc0e9f298?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    }
]

function HomeCarousel() {
    const [x, setX] = useState(0);
    const goLeft=()=>{
        x === 0 ? setX(-100 * (photos.length - 1)) : setX(x + 100)
    };
    const goRight=()=>{
        x === -100 * (photos.length - 1 ) ? setX(0) : setX(x - 100)
    };

    return(
        <div className="slider">
            {
                photos.map((photo, index)=>{
                    return(
                        <div key={index} className="slide" style={{transform:`translateX(${x}%)`}}>
                            <img src={photo.url} alt={photo.name} style={{width:'100%', height:'400px'}}></img>
                        </div>
                    )
                })
            }
            <button id="goLeft" onClick={goLeft}>
            <i class="fas fa-chevron-left"></i>
            </button>
            <button id="goRight" onClick={goRight}>
            <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    )
}
export default HomeCarousel;