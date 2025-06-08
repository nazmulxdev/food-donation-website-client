import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { useState } from "react";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

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
    <motion.button
      className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-30 text-white bg-black/40 hover:bg-black/70 p-2 sm:p-3 rounded-full"
      onClick={onClick}
      aria-label="Previous Slide"
      whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.7)" }}
      whileTap={{ scale: 0.9 }}
    >
      <FaArrowLeft className="text-sm sm:text-lg" />
    </motion.button>
  );

  const NextArrow = ({ onClick }) => (
    <motion.button
      className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-30 text-white bg-black/40 hover:bg-black/70 p-2 sm:p-3 rounded-full"
      onClick={onClick}
      aria-label="Next Slide"
      whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.7)" }}
      whileTap={{ scale: 0.9 }}
    >
      <FaArrowRight className="text-sm sm:text-lg" />
    </motion.button>
  );

  const beforeChange = (oldIndex, newIndex) => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide(newIndex);
      setFade(true);
    }, 300);
  };

  const settings = {
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
    beforeChange: beforeChange,
  };

  return (
    <div className="relative w-full h-[24rem] sm:h-[28rem] md:h-[36rem] overflow-hidden">
      <motion.video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://3vyg2acdxl.ufs.sh/f/vZKcTYAMgkubKV5XgStXP6QS7Ia2q1WiYbfoRBpFxv58LhcM"
        autoPlay
        muted
        loop
        playsInline
        animate={{ opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <div className="w-full max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-5xl text-center text-white">
          <Slider {...settings}>
            {slides.map((slide, idx) => (
              <div key={idx}>
                <motion.div
                  key={`${idx}-${currentSlide}`}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={
                    currentSlide === idx
                      ? fade
                        ? { opacity: 1, y: 0, scale: 1 }
                        : { opacity: 0, y: 20, scale: 0.8 }
                      : { opacity: 0 }
                  }
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-white"
                >
                  <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="mt-4 text-lg drop-shadow-sm">
                    {slide.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-primary mt-8"
                  >
                    {slide.button}
                  </motion.button>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Banner;
