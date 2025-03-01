import React from "react";
import deliveryGuy from "../../assets/deliveryGuyWithLogo.svg";
import background from "../../assets/background.svg";
import realTimeTracking from "../../assets/realtimeTracking.svg";
import discount from "../../assets/discount.svg";

const Features = () => {
  return (
    <section id="features">
      <h2 className="text-center text-primary font-bold text-4xl pt-[10vh] md:pt-0">
        Features
      </h2>
      <div class="flex justify-center align-middle flex-wrap gap-[2.75vw] p-10">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="relative w-auto h-autox` aspect-w-643 aspect-h-360">
            <img
              src={background}
              alt="phone svg"
              className="absolute top-0 left-0 w-full h-auto z-0"
            />
            <img
              src={deliveryGuy}
              alt="delivery guy svg"
              className="absol w-full h-auto z-10 motion-translate-x-loop-[-30%] motion-translate-y-loop-[0%] motion-duration-[2000ms] motion-ease-spring-smooth"
            />
          </div>

          <div class="p-5 pb-0">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Fast Delivery
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              We prioritize speed to ensure your packages are delivered on time,
              every time.
            </p>
          </div>
        </div>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <div className="relative w-auto h-autox` aspect-w-643 aspect-h-360">
              <img
                src={realTimeTracking}
                alt="phone svg"
                className=" top-0 left-0 w-full h-auto z-0"
              />
            </div>
          </a>
          <div class="p-5 pb-0">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Real-Time Tracking
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Monitor your shipments with our advanced real-time tracking
              system.
            </p>
          </div>
        </div>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <div className="relative w-auto h-autox` aspect-w-643 aspect-h-360">
              <img
                src={discount}
                alt="phone svg"
                className="top-0 left-0 w-full h-auto z-0"
              />
            </div>
          </a>
          <div class="p-5 pb-0">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Affordable Rates
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Enjoy reliable courier services at competitive prices tailored to
              your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
