import { useRef } from "react";
import SlickSlider from "react-slick";
const Slider = SlickSlider?.default || SlickSlider;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cup from "../Images/our-blog-cup.png";
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
const OurBlog = () => {
    const slideRef = useRef(null);
    // const[currentSlide,setCurrentSlide]=useState(0);
    const blogBtnPressPrev = () => {
        slideRef.current.slickPrev();
    };
    const blogBtnPressNext = () => {
        slideRef.current.slickNext();
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,

        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    const blogData = [
        {
            id: 1,
            title: "How to make a great coffee ",
            content: "Making a cup of coffee doesn't have to be complicated. Start by gathering your supplies: coffee grounds, water, and a French press, mug or other vessel. Next, measure out 2 tablespoons of ground coffee per 8 ounces of water. If you're using a French...",
            image: cup
        },
        {
            id: 2,
            title: "Why does caffeine make us stay awake?",
            content: "Caffeine works by blocking adenosine receptors in the brain, which facilitates energy production and makes us feel more alert. Caffeine also increases adrenaline levels, further boosting your energy and heart rate, as well as other hormones like... ",
            image: cup
        },
        {
            id: 3,
            title: "Different types of coffee Explained",
            content: "Coffee is a staple in the lives of many and comes in a variety of forms. Whether you prefer hot or iced, espresso-based or filter, you’re spoilt for choice. To help beginners navigate their first foray into the world of coffee, let’s breakdown some basic categories: ... fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
            image: cup
        },
        {
            id: 4,
            title: "How to make a great coffee",
            content: "Making a cup of coffee doesn't have to be complicated. Start by gathering your supplies: coffee grounds, water, and a French press, mug or other vessel. Next, measure out 2 tablespoons of ground coffee per 8 ounces of water. If you're using a French press, pour the measured grounds into the bottom of the press followed by hot water (between 195-205 degrees Fahrenheit). Let sit for three minutes before gently pushing down on the filter to trap the grounds at the bottom; this will create an intense flavor with slightly heavier body than filtered methods. If you have neither a French press nor filter, just pour your measured grounds directly into a mug or vessel and top with piping hot water. Give it a stir and let it sit for 3-4 minutes before consuming--but don't leave it too long as this method won't produce quite as bold of a flavor as either filtering or pressing would!",
            image: cup
        },
        {
            id: 5,
            title: "Why does caffeine make us stay awake?",
            content: "Caffeine works by blocking adenosine receptors in the brain, which facilitates energy production and makes us feel more alert. Caffeine also increases adrenaline levels, further boosting your energy and heart rate, as well as other hormones like dopamine that can make you feel more awake. The combination of these effects makes caffeine a stimulant that is all-too common in both food and drinks to give us an extra boost of energy when we need it most. It's no wonder why so many people rely on caffeinated beverages - it really can make us stay awake!",
            image: cup
        },
        {
            id: 6,
            title: "Different types of coffee Explained",
            content: "Coffee is a staple in the lives of many and comes in a variety of forms. Whether you prefer hot or iced, espresso-based or filter, you’re spoilt for choice. To help beginners navigate their first foray into the world of coffee, let’s breakdown some basic categories: Espresso is an especially intense type of brewed coffee made by forcing pressurized water through finely ground beans. It has a strong flavor and can be used to make all manner of delicious drinks like flat whites, cappuccinos and lattes. Filter coffee is made with a paper filter that holds back most grounds before allowing the liquid to drip down into your cup. Its taste is less intense than that of espresso but still robust enough to serve with milk or flavored syrups if desired. Cold brew on the other hand isn't actually brewed using heat but rather steeped in cold water overnight to produce a smooth yet sweet drink - great over ice! Finally there's nitro which takes cold brew and injects it (through nitrogen) with carbon dioxide for an even creamier texture and slightly sweet flavor profile. No matter what you choose, chances are you won't be disappointed!",
            image: cup
        }
    ];
    return (
        <div className="bg-[#55382c] pt-[70px] pb-2">
            <div className=" ">
                <h1 className="hero-heading text-center relative text-[50px] font-[1000] bg-[linear-gradient(90deg,#F8E4BE_20%,#FFF3E0_37%,#FFF8E8_52%,#DFC39D_73%)] bg-clip-text text-transparent">Our Blog</h1>
            </div>
            
            <div className="container-fluid mx-auto pb-2">
                {/* <div className="flex"></div> */}
                <Slider ref={slideRef} {...settings}> {
                    blogData.map((bData) => (
                        <div key={bData.id} className="px-3">

                            <div className="rounded-[25px] p-[30px] overflow-hidden bg-[#987c6b] h-full">

                                <div className="min-h-[35px]"><h1 className="text-[#FFFFFF] text-[14px]">{bData.title}</h1></div>
                                <div className=" h-[100px] overflow-hidden">
                                    <p className="text-[#F6E5DA] text-[12px] leading-[24px] line-clamp-4 ">{bData.content}</p>
                                </div>
                                <p className="text-end pt-2 text-[#FFFFFF]"><a href="#"><u>More</u></a></p>

                            </div>
                        </div>
                    ))
                }

                </Slider>
                <div className="flex justify-between px-3">
                    <div className="text-[#f8e4be] pl-4 pt-2 ">
                        <button onClick={blogBtnPressPrev} >
                            <FaLessThan className="w-[50px] h-[30px]" />
                        </button>
                    </div>
                    <div className="text-[#f8e4be] pr-4 pt-2">
                        <button onClick={blogBtnPressNext}>
                            <FaGreaterThan className="w-[50px] h-[30px]" />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default OurBlog;