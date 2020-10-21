import React from 'react'
import AdsDirectory from '../component/Ads-Directory/AdsDirectory';
import CarouselHome from '../component/Carousel/CarouselHome'
// import HomeCarousel from '../component/Carousel/HomeCarousel'
import '../styles/scss/Home.scss'

const photos =[
    {
        id:1,
        name:"Carousel-1",
        url:"https://images.unsplash.com/photo-1526178613552-2b45c6c302f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    },
    {
        id:2,
        name:"Carousel-2",
        url:"https://images.unsplash.com/photo-1513451732213-5775a1c40335?ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
    },
    {
        id:3,
        name:"Carousel-3",
        url:"https://images.unsplash.com/photo-1583316174775-bd6dc0e9f298?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    },
    {
        id:4,
        name:"Carousel-4",
        url:"https://images.unsplash.com/photo-1583316174775-bd6dc0e9f298?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    }
]
const Home = () => {
    console.log("me");
    return (
        <>
        <div className="Homepage">
            {/* <HomeCarousel></HomeCarousel> */}
            <CarouselHome itemList={photos}></CarouselHome>
        </div>
        {/* <div className="container-fluid"> */}
        <AdsDirectory></AdsDirectory>
        {/* </div> */}
        </>
    )
}
export default Home
