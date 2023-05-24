import Category from "../Category/Category";
import Featured from "../Fetaured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import Banner from "./Banner/Banner";
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet><title>Bistro-Boss | Home</title></Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;