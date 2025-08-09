import { motion } from "framer-motion";
import { FaUpload, FaSearch, FaHandsHelping } from "react-icons/fa";
import { Link } from "react-router";

const HowToWorks = () => {
  const steps = [
    {
      title: "For Donors",
      icon: <FaUpload className="text-3xl" />,
      desc: "Upload food details (type, quantity, expiry) and set pickup time.",
      color: "bg-secondary",
      textColor: "text-primary",
    },
    {
      title: "For Recipients",
      icon: <FaSearch className="text-3xl" />,
      desc: "Search available meals, reserve, and arrange pickup near you.",
      color: "bg-secondary",
      textColor: "text-primary",
    },
    {
      title: "For Volunteers",
      icon: <FaHandsHelping className="text-3xl" />,
      desc: "Help with delivery, organization checks, or community outreach.",
      color: "bg-secondary",
      textColor: "text-primary",
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Join the fight against hunger and food waste in just three simple
            steps.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`card ${step.color} ${step.textColor} overflow-hidden`}
            >
              <div className="card-body items-center text-center p-8">
                <div className="mb-4 p-4 rounded-full bg-white bg-opacity-20">
                  {step.icon}
                </div>
                <h3 className="card-title text-2xl mb-3">{step.title}</h3>
                <p>{step.desc}</p>
                {index === 0 && (
                  <Link
                    to="/addFood"
                    className="btn btn-sm mt-4 bg-white text-primary hover:bg-gray-100"
                  >
                    Donate Now
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowToWorks;
