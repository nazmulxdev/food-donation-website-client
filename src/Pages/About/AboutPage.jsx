import {
  FaLeaf,
  FaHandsHelping,
  FaHeart,
  FaMapMarkerAlt,
  FaUsers,
  FaUtensils,
  FaHandHoldingHeart,
} from "react-icons/fa";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Link } from "react-router";

const AboutPage = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="hero min-h-[70vh] relative overflow-hidden">
        {/* Background with opacity */}
        <div className="absolute inset-0 bg-[url('https://3vyg2acdxl.ufs.sh/f/vZKcTYAMgkub1aUtcMPy8fSNEdI5XqpuMGo9wt7Vc4LmaYh0')] bg-cover bg-center">
          <div className="absolute inset-0  opacity-10"></div>
        </div>

        {/* Hero content with more meaningful elements */}
        <div className="hero-content text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block mb-6"
            >
              <FaHandHoldingHeart className="text-6xl text-secondary mx-auto" />
            </motion.div>
            <h1 className="mb-6 text-4xl md:text-6xl font-bold">
              Nourishing <span className="text-secondary">Gaza</span>, One Meal
              at a Time
            </h1>
            <p className="mb-8 text-xl md:text-2xl">
              We transform surplus into sustenance, connecting compassion with
              need in our community
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link to="/addFood" className="btn btn-primary text-white btn-lg">
                <FaUtensils className="mr-2" /> Donate Food
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Wavy divider */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="fill-secondary w-full h-16 md:h-24"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
            ></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </section>

      {/* Mission Section - Now with secondary background */}
      <section className="py-16 px-4 md:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={container}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={item}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral">
                Our Mission to <span className="text-primary">Nourish</span>
              </h2>
              <p className="text-lg mb-6 text-neutral">
                In a land where resources are scarce but resilience is abundant,
                Meals4Gaza stands as a beacon of hope. We believe that access to
                food is a fundamental right, not a privilege.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: <FaLeaf className="mt-1 text-2xl" />,
                    title: "Sustainability",
                    description:
                      "Reducing food waste while feeding communities",
                    color: "text-primary",
                  },
                  {
                    icon: <FaHandsHelping className="mt-1 text-2xl" />,
                    title: "Solidarity",
                    description:
                      "Building bridges between those who can give and those in need",
                    color: "text-accent",
                  },
                  {
                    icon: <FaHeart className="mt-1 text-2xl" />,
                    title: "Dignity",
                    description:
                      "Ensuring everyone receives nourishment with respect",
                    color: "text-primary",
                  },
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className={`${feature.color}`}>{feature.icon}</div>
                    <div>
                      <h3 className={`font-bold text-xl ${feature.color}`}>
                        {feature.title}
                      </h3>
                      <p className="text-neutral">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={item} className="order-1 md:order-2">
              <div className="card bg-base-100 shadow-xl overflow-hidden">
                <figure>
                  <img
                    src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Community sharing food"
                    className="w-full h-64 md:h-96 object-cover"
                  />
                </figure>
                <div className="card-body bg-base-100">
                  <h3 className="card-title text-neutral">
                    Together We Are Stronger
                  </h3>
                  <p className="text-neutral">
                    Every shared meal represents a story of hope and community
                    resilience in Gaza.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Adjusted for theme */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our <span className="text-primary">Impact</span> in Numbers
            </h2>
            <p className="text-xl mt-4">
              Real change measured in meals shared and lives touched
            </p>
          </motion.div>
          <motion.div
            variants={container}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              {
                value: 1250,
                suffix: "+",
                label: "Meals Shared",
                icon: <FaUtensils />,
              },
              {
                value: 320,
                suffix: "+",
                label: "Active Donors",
                icon: <FaUsers />,
              },
              {
                value: 45,
                suffix: "+",
                label: "Communities",
                icon: <FaMapMarkerAlt />,
              },
              {
                value: 98,
                suffix: "%",
                label: "Positive Feedback",
                icon: <FaHeart />,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={item}
                className="card bg-secondary bg-opacity-20 p-6 backdrop-blur-sm rounded-lg"
              >
                <div className="text-3xl mb-3 text-accent">{stat.icon}</div>
                <div className="stat-value text-4xl md:text-5xl font-bold text-primary">
                  <CountUp end={stat.value} duration={3} />
                  {stat.suffix}
                </div>
                <div className="text-primary mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 md:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral">
              How <span className="text-primary">Meals4Gaza</span> Works
            </h2>
            <p className="text-xl mt-4 text-neutral">
              A simple process creating meaningful impact
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 justify-center ">
            {[
              {
                icon: <FaUsers className="text-xl" />,
                title: "1. Join Our Community",
                description: "Register as a donor or recipient in just minutes",
                color: "bg-primary",
              },
              {
                icon: <FaLeaf className="text-xl" />,
                title: "2. Share or Request",
                description:
                  "Post available meals or browse what's being offered",
                color: "bg-accent",
              },
              {
                icon: <FaMapMarkerAlt className="text-xl" />,
                title: "3. Connect Locally",
                description: "Our system matches donations with nearby needs",
                color: "bg-primary",
              },
              {
                icon: <FaHandsHelping className="text-xl" />,
                title: "4. Distribute with Care",
                description: "Coordinate pickup through our secure platform",
                color: "bg-accent",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`mb-8`}
              >
                <div className=" card bg-base-100 p-6 shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`p-3 rounded-full ${step.color} text-secondary`}
                    >
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-neutral">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-neutral">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl mb-8 text-accent">
              Your action today can fill a plate tomorrow
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/addFood" className="btn btn-primary text-white btn-lg">
                <FaUtensils className="mr-2" /> Donate Food
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
