import Navbar from "../HeaderAndFooter/Navbar";
import Hero from "../Components/Hero";
import OurStory from "../Components/OurStory";
import Services from "../Components/Services";
import Offer from "../Components/Offer";
import Reserve from "../Components/Reserve";
import Recommended from "../Components/Recommended";
import OurBlog from "../Components/OurBlog";
import PopularMenu from "../Components/PopularMenu";
import CustomerReview from "../Components/CustomerReview";
import Subscribe from "../Components/Subscribe";
import Prefooter from "../Components/Prefooter";
import Footer from "../HeaderAndFooter/Footer";
const Home=()=>{
    return(
        <div>
            <Navbar/>
            <Hero/>
            <OurStory/>
            <Services/>
            <Offer/>
            <Reserve/>
            <Recommended/>
            <PopularMenu/>
            <OurBlog/>
            <CustomerReview/>
            <Subscribe/>
            <Prefooter/>
            <Footer/>
        </div>
    );
}
export default Home;