import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const slides = [
    {
      title: "Welcome to Meals4Gaza",
      description: "Share food. Spread kindness. Support Gaza.",
      button: "Get Started",
    },
    {
      title: "Donate Meals with Purpose",
      description: "Every plate you share makes a difference.",
      button: "Donate Now",
    },
    {
      title: "Be the Reason Someone Smiles",
      description: "Join a global effort of love and support.",
      button: "Join Us",
    },
  ];

  const PrevArrow = ({ onClick }) => (
    <button
      className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-30 text-white bg-black/40 hover:bg-black/70 p-2 sm:p-3 rounded-full"
      onClick={onClick}
      aria-label="Previous Slide"
    >
      <FaArrowLeft className="text-sm sm:text-lg" />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-30 text-white bg-black/40 hover:bg-black/70 p-2 sm:p-3 rounded-full"
      onClick={onClick}
      aria-label="Next Slide"
    >
      <FaArrowRight className="text-sm sm:text-lg" />
    </button>
  );

  const styles = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="relative w-full h-[24rem] sm:h-[28rem] md:h-[36rem] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://3vyg2acdxl.ufs.sh/f/vZKcTYAMgkubKV5XgStXP6QS7Ia2q1WiYbfoRBpFxv58LhcM"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <div className="w-full max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-5xl text-center text-white">
          <Slider {...styles}>
            {slides.map((slide, idx) => (
              <div key={idx}>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg mt-3 drop-shadow-sm">
                  {slide.description}
                </p>
                <button className="btn btn-primary mt-6 px-6 py-2 text-sm sm:text-base">
                  {slide.button}
                </button>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Banner;
