import React from "react";
import aboutSvg from "../../assets/about.svg";

const About = () => {
  return (
    <>
      <section id="about" class="px-[10vw] py-[5vw]">
      <h2 className="text-center text-primary font-bold text-base pt-[10vh] md:pt-0">
        ABOUT US
      </h2>
        <div class="container mx-auto py-0 md:py-[4vh] px-4 sm:px-6 lg:px-8 ">
          <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div class="max-w-lg">
              <h3 class="text-3xl font-bold text-primary sm:text-3xl">
                Connecting Your World
              </h3>
              <p class="mt-4 text-gray-600 text-lg">
                Parlfly is your go-to platform for fast, secure, and reliable
                delivery solutions. Designed with simplicity and efficiency in
                mind, we make sending and receiving parcels effortless for
                individuals and businesses alike. With real-time tracking,
                trusted couriers, and flexible options, Parlfly ensures your
                packages are always in safe hands.
              </p>
              <div class="mt-8">
                <a href="#" class="text-primary hover:text-primary-dark">
                  Learn more about us <span class="ml-2">&#8594;</span>
                </a>
              </div>
            </div>
            <div class="mt-12 md:mt-0 order-first">
              <img
                src={aboutSvg}
                alt="About Us Image"
                class="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
