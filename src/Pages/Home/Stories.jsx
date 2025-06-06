import React from "react";
import CountUp from "react-countup";

const Stories = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12 lg:px-24 max-w-screen-2xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Real Impact, Real Stories
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Every shared meal tells a story of hope, humanity, and heart. Here’s
          how Meals4Gaza is changing lives.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-orange-50 p-6 rounded-xl shadow-sm">
          <p className="text-gray-700 italic">
            “My children went to bed with full stomachs during a blackout week.
            I’m forever grateful.”
          </p>
          <div className="mt-4 text-sm text-accent">— Mariam, Gaza</div>
        </div>

        <div className="bg-orange-50 p-6 rounded-xl shadow-sm">
          <p className="text-gray-700 italic">
            “As a student volunteer, I felt empowered delivering meals. It’s
            more than just food — it’s connection.”
          </p>
          <div className="mt-4 text-sm text-accent">— Khaled, Volunteer</div>
        </div>

        <div className="bg-orange-50 p-6 rounded-xl shadow-sm">
          <p className="text-gray-700 italic">
            “We partnered with Meals4Gaza during Ramadan. Together, we reached
            hundreds of families.”
          </p>
          <div className="mt-4 text-sm text-accent">— Nour Aid Foundation</div>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-4xl font-bold text-orange-500">
            <CountUp
              start={0}
              end={12540}
              enableScrollSpy
              duration={4}
            ></CountUp>
            +
          </h3>
          <p className="text-gray-600 mt-2">Meals Shared</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-orange-500">
            <CountUp
              start={0}
              end={1500}
              enableScrollSpy
              duration={4}
            ></CountUp>
            +
          </h3>
          <p className="text-gray-600 mt-2">Active Volunteers</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-orange-500">
            <CountUp start={0} end={6} enableScrollSpy duration={4}></CountUp>+
          </h3>
          <p className="text-gray-600 mt-2">Regions Supported</p>
        </div>
      </div>
    </section>
  );
};
export default Stories;
