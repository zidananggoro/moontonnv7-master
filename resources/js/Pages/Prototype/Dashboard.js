import Authenticated from "@/Layouts/Authenticated/Index"
const Flickity = require('react-flickity-component');
import {Head} from "@inertiajs/inertia-react"
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";

export default function Dashboard() {
    const flickityOptions = {
        "cellAlign": "left",
        "contain": true,
        "groupCells": 1,
        "wrapAround": false,
        "pageDots": false,
        "prevNextButtons": false,
        "draggable": ">1"
    };
    return <Authenticated>
        <Head>
        <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
        <title>Dashboard</title>
        </Head>
        <div>
                    <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
                    <Flickity className="gap-[30px]" elementType={"div"} options={flickityOptions} disableImagesLoaded={false}>

                        
                        {[1,2,3,4].map((i) => {
                            return (
                            <FeaturedMovie
                            key={i} 
                            slug="the-batman-in-love"
                            name={'the batman '} 
                            category="superhero"
                            thumbnail="/images/featured-1.png"
                            rating={i}
                            ></FeaturedMovie> 
                            );
                        })}
                    </Flickity>
                </div>
                <div className="mt-[50px]">
                    <div className="font-semibold text-[22px] text-black mb-4">Browse</div>
                    <Flickity className="gap-[30px]" elementType={"div"} options={flickityOptions}  disableImagesLoaded={false} >
                    {[1,2,3,4,5,6].map((i) => {
                        return (
                            <MovieCard
                            key={i} 
                            slug="the-batman-in-love"
                            name={'The batman in love '}
                            category="superhero"
                            thumbnail="/images/featured-2.png"
                            
                            ></MovieCard> 
                            );
                        })}
                    </Flickity>
                </div>
    </Authenticated>;
}