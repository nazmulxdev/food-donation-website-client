import { motion } from "framer-motion";
import { FaTrophy, FaUsers, FaCalendarAlt, FaShareAlt } from "react-icons/fa";
import Lottie from "lottie-react";
import celebrationAnimation from "../../assets/Animation - 1751380370062.json";

const CommunityChallenge = () => {
  const challenge = {
    title: "Ramadan Food Drive",
    goal: 1000,
    progress: 684,
    endDate: "2024-04-10",
    participants: 127,
  };
  // Calculate days remaining
  const daysRemaining = Math.max(
    0,
    Math.ceil(
      (new Date(challenge.endDate).getTime() - new Date().getTime()) /
        (1000 * 60 * 60 * 24),
    ),
  );
  // Calculate progress percentage
  const progressPercent = Math.min(
    Math.round((challenge.progress / challenge.goal) * 100),
    100,
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20 bg-secondary relative"
    >
      {/* Main Content Container */}
      <div className="container mx-auto px-4">
        {/* Header with Lottie on the right */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-16 ">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Community Challenge
            </h2>
            <p className="text-xl text-primary/80 max-w-2xl">
              Join our mission to reduce food waste
            </p>
          </div>

          {/* Lottie Animation - Right side of header */}
          <div className="w-full md:w-1/3 max-w-xs">
            <Lottie
              animationData={celebrationAnimation}
              loop={true}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Challenge Card */}
        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          className="card bg-base-100 shadow-xl border border-primary/20 max-w-3xl mx-auto"
        >
          <div className="card-body p-6 md:p-8">
            {/* Title */}
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-primary text-primary-content">
                <FaTrophy className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-primary">
                {challenge.title}
              </h3>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm mb-2 text-primary">
                <span>{challenge.progress} meals shared</span>
                <span>Goal: {challenge.goal} meals</span>
              </div>
              <div className="w-full bg-primary/20 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${progressPercent}%` }}
                  transition={{ duration: 1.5 }}
                  className="h-full bg-primary"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="stats bg-primary/10 shadow">
                <div className="stat">
                  <div className="stat-figure text-primary">
                    <FaUsers className="text-2xl" />
                  </div>
                  <div className="stat-title text-primary">Participants</div>
                  <div className="stat-value text-primary">
                    {challenge.participants}
                  </div>
                </div>
              </div>

              <div className="stats bg-primary/10 shadow">
                <div className="stat">
                  <div className="stat-figure text-primary">
                    <FaCalendarAlt className="text-2xl" />
                  </div>
                  <div className="stat-title text-primary">Days Left</div>
                  <div className="stat-value text-primary">{daysRemaining}</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-primary btn-lg flex-1 text-white"
              >
                Join Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-outline btn-primary btn-lg flex-1 gap-2"
              >
                <FaShareAlt /> Share
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CommunityChallenge;
