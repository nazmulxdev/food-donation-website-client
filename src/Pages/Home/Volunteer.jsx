import React from "react";
import { Link } from "react-router";

const Volunteer = () => {
  return (
    <div className="bg-secondary">
      <section className="max-w-screen-2xl mx-auto py-16 px-4 md:px-12 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Volunteer or Partner With Uss
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you're an individual looking to make a difference or an
            organization ready to collaborate — there's a place for you in the
            Meals4Gaza movement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between">
            <div>
              <div className="text-orange-500 text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-semibold mb-2 text-accent">
                Volunteers
              </h3>
              <p className="text-gray-600 mb-4">
                Share your time and energy. Help us deliver meals, organize
                drives, and spread kindness.
              </p>
            </div>
            <Link to="/addFood" className="btn btn-primary text-white w-full">
              Join as Volunteer (Donate Food)
            </Link>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between">
            <div>
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl text-accent font-semibold mb-2">
                Organizations
              </h3>
              <p className="text-gray-600 mb-4">
                Partner with Meals4Gaza to scale your outreach. Collaborate on
                humanitarian projects and food relief efforts.
              </p>
            </div>
            <Link to="/addFood" className="btn btn-primary text-white w-full">
              Become a Partner (Donate Food)
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;
