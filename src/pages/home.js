import React from 'react'
import MainCarousel from '../component/Carousel/CarouselHome'
// import HomeCarousel from '../component/Carousel/HomeCarousel'

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
    },
    {
        name:"Carousel-4",
        url:"https://images.unsplash.com/photo-1583316174775-bd6dc0e9f298?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    }
]
const Home = () => {
    console.log("me");
    return (
        <div>
            {/* <HomeCarousel></HomeCarousel> */}
            <MainCarousel itemList={photos}></MainCarousel>
        </div>
    )
}
export default Home
