import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-6 lg:p-8 flex justify-center items-center">
      <div className="max-w-7xl w-full">
        <div className="flex flex-col items-center mx-auto">

          {/* Top Section */}
          <section className="mb-8 border border-gray-800 rounded-lg p-6">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="text-sm text-gray-400">Live Tracking</div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  Advanced insights in{" "}
                  <span className="text-cyan-400">real-time</span>
                </h1>
                <p className="text-gray-400 max-w-xl">
                  Track all markets in real-time with proprietary buy & sell
                  points, multi-timeframe support & resistance zones, auto golden
                  pocket, & more.
                </p>
              </div>
              <div className="relative h-[200px] md:h-[300px] w-full rounded-lg overflow-hidden border border-gray-800">
                <img
                  src="https://www.luxalgo.com/images/product/showcases/showcase_1.png"
                  alt="Live trading chart"
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Bottom Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Bottom Left Section */}
            <section className="space-y-4 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl md:text-2xl font-bold">
                Trade like{" "}
                <span className="text-cyan-400">smart money</span>
              </h2>
              <p className="text-gray-400">
                Easily identify key areas on your chart where the big players are
                likely going to enter. Now introducing Artificial Intelligence (AI)
                Signals.
              </p>
              <div className="relative h-[200px] md:h-[250px] w-full rounded-lg overflow-hidden border border-gray-800">
                <img
                  src="https://www.luxalgo.com/images/product/showcases/showcase_1.png"
                  alt="Smart money trading chart"
                  className="object-cover"
                />
              </div>
            </section>

            {/* Bottom Right Section */}
            <section className="space-y-4 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl md:text-2xl font-bold">
                Identify key{" "}
                <span className="text-cyan-400">momentum shifts</span>
              </h2>
              <p className="text-gray-400">
                Find hidden and regular momentum shifts before they happen for
                maximum confidence.
              </p>
              <div className="relative h-[200px] md:h-[250px] w-full rounded-lg overflow-hidden border border-gray-800">
                <img
                  src="https://www.luxalgo.com/images/product/showcases/showcase_1.png"
                  alt="Momentum shifts chart"
                  className="object-cover"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
