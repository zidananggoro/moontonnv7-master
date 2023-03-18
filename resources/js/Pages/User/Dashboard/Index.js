import Authenticated from "@/Layouts/Authenticated/Index"
const Flickity = require('react-flickity-component');
import {Head} from "@inertiajs/inertia-react"
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";

export default function Dashboard({auth, featuredMovies, movies}) {
    const flickityOptions = {
        "cellAlign": "left",
        "contain": true,
        "groupCells": 1,
        "wrapAround": false,
        "pageDots": false,
        "prevNextButtons": false,
        "draggable": ">1"
    };
    return <Authenticated auth={auth}>
        <Head>
        <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
        <title>Dashboard</title>
        </Head>
        <div>
                    <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
                    <Flickity className="gap-[30px]" elementType={"div"} options={flickityOptions} disableImagesLoaded={false}>

                        
                        {featuredMovies.map((featuredMovie) => {
                            return (
                            <FeaturedMovie
                            key={featuredMovie.id} 
                            slug={featuredMovie.slug}
                            name={featuredMovie.name}
                            category={featuredMovie.category}
                            thumbnail={featuredMovie.thumbnail}
                            rating={featuredMovie.rating}
                            ></FeaturedMovie> 
                            );
                        })}
                    </Flickity>
                </div>
                <div className="mt-[50px]">
                    <div className="font-semibold text-[22px] text-black mb-4">Browse</div>
                    <Flickity className="gap-[30px]" elementType={"div"} options={flickityOptions}  disableImagesLoaded={false} >
                    {movies.map((movie) => {
                        return (
                            <MovieCard
                            key={movie.id} 
                            slug={movie.slug} 
                            name={movie.name} 
                            category={movie.category} 
                            thumbnail={movie.thumbnail} 
                            
                            ></MovieCard> 
                            );
                        })}
                    </Flickity>
                </div>
    </Authenticated>;
}