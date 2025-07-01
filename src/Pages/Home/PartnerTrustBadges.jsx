import { motion } from "framer-motion";
import {
  FaHandshake,
  FaHospital,
  FaUniversity,
  FaStore,
  FaNewspaper,
  FaMicrophone,
  FaTv,
  FaQuoteLeft,
} from "react-icons/fa";

const PartnerTrustBadges = () => {
  // Partner Data
  const partners = [
    {
      name: "Medical Centers",
      icon: <FaHospital className="text-4xl" />,
      count: "12+",
      color: "bg-secondary text-primary",
    },
    {
      name: "Universities",
      icon: <FaUniversity className="text-4xl" />,
      count: "8+",
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200",
    },
    {
      name: "Local Businesses",
      icon: <FaStore className="text-4xl" />,
      count: "25+",
      color:
        "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-200",
    },
  ];

  // Media Data
  const media = [
    {
      quote: "MediaGaza is revolutionizing food rescue in Palestine.",
      source: "Al-Quds News",
      icon: <FaNewspaper className="text-3xl text-primary" />,
    },
    {
      quote: "A model for zero-waste humanitarian aid.",
      source: "Gaza FM",
      icon: <FaMicrophone className="text-3xl text-primary" />,
    },
    {
      quote: "Featured in our 'Innovations for Good' series.",
      source: "Middle East Today",
      icon: <FaTv className="text-3xl text-primary" />,
    },
  ];

  return (
    <section className="bg-base-100">
      {/* Partners Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-16"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="bg-primary text-primary-content p-4 rounded-full shadow-lg"
            >
              <FaHandshake className="text-4xl" />
            </motion.div>
          </div>
          <h2 className="text-4xl font-bold mb-4">Our Trusted Network</h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto mb-12">
            Collaborating with organizations across sectors to maximize impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`card ${partner.color} p-6 shadow-md rounded-xl`}
              >
                <div className="flex justify-center mb-4">{partner.icon}</div>
                <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                <p className="text-2xl font-bold">{partner.count} Partners</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Media Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="py-16 bg-secondary"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            As Featured In
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {media.map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="card bg-base-100 shadow-xl p-6"
              >
                <div className="flex items-start gap-4 mb-4">
                  {item.icon}
                  <FaQuoteLeft className="text-2xl opacity-20" />
                </div>
                <p className="text-lg mb-4">{item.quote}</p>
                <div className="border border-primary badge badge-outline p-3 font-bold text-primary">
                  {item.source}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PartnerTrustBadges;
