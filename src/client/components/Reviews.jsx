import React from "react";

const Reviews = () => {
  return (
    <section class="pb-12 mx-auto md:pb-20 max-w-7xl">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
      <div class="py-4 text-center md:py-8">
        <h2 class="text-base font-bold tracking-wide text-center uppercase text-primary">
          Reviews
        </h2>
        <p class="mt-2 tracking-tight text-gray-900 text:xl md:text-2xl">
          We have some fans.
        </p>
      </div>

      <div class="gap-8 space-y-8 md:columns-2 lg:columns-3">
        <div class="p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10 flex flex-col">
          <div class="flex gap-4 items-start">
            <img
              class="w-12 h-12 rounded-full"
              src="https://randomuser.me/api/portraits/men/12.jpg"
              alt="user avatar"
              width="400"
              height="400"
              loading="lazy"
            />
            <div class="flex-1 flex justify-between items-start">
              <div>
                <h6 class="text-lg font-medium text-gray-700">Ravi Kumar</h6>
                <p class="text-sm text-gray-500">Driver</p>
              </div>
              <a
                href="https://twitter.com/ravikumar/status/1234567890"
                class="text-blue-500 hover:text-blue-600 ml-4"
              >
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <p class="mt-8 flex-1">
            Parfly has made my job so much easier. The app is user-friendly and helps me find delivery jobs quickly. Highly recommend it to all drivers! <br /><br />
          </p>
        </div>

        <div class="p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10 flex flex-col">
          <div class="flex gap-4 items-start">
            <img
              class="w-12 h-12 rounded-full"
              src="https://randomuser.me/api/portraits/women/14.jpg"
              alt="user avatar"
              width="200"
              height="200"
              loading="lazy"
            />
            <div class="flex-1 flex justify-between items-start">
              <div>
                <h6 class="text-lg font-medium text-gray-700">Anjali Sharma</h6>
                <p class="text-sm text-gray-500">Customer</p>
              </div>
              <a
                href="https://www.instagram.com/p/1234567890"
                class="text-blue-500 hover:text-blue-600 ml-4"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <p class="mt-8 flex-1">
            I love using Parfly for my deliveries. The service is fast and reliable, and the drivers are always professional. Great experience every time! <br/><br/>
          </p>
        </div>

        <div class="p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10 flex flex-col">
          <div class="flex gap-4 items-start">
            <img
              class="w-12 h-12 rounded-full"
              src="https://randomuser.me/api/portraits/men/18.jpg"
              alt="user avatar"
              width="200"
              height="200"
              loading="lazy"
            />
            <div class="flex-1 flex justify-between items-start">
              <div>
                <h6 class="text-lg font-medium text-gray-700">Vijay Singh</h6>
                <p class="text-sm text-gray-500">Driver</p>
              </div>
              <a
                href="https://www.facebook.com/vijaysingh/posts/1234567890"
                class="text-blue-500 hover:text-blue-600 ml-4"
              >
                <i class="fab fa-facebook"></i>
              </a>
            </div>
          </div>
          <p class="mt-8 flex-1">
            Parfly has been a game-changer for me. The app's features make it easy to manage my deliveries and communicate with customers. Highly recommend it!
          </p>
        </div>

        <div class="p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10 flex flex-col">
          <div class="flex gap-4 items-start">
            <img
              class="w-12 h-12 rounded-full"
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="user avatar"
              width="200"
              height="200"
              loading="lazy"
            />
            <div class="flex-1 flex justify-between items-start">
              <div>
                <h6 class="text-lg font-medium text-gray-700">Priya Patel</h6>
                <p class="text-sm text-gray-500">Customer</p>
              </div>
              <a
                href="https://twitter.com/priyapatel/status/1234567890"
                class="text-blue-500 hover:text-blue-600 ml-4"
              >
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <p class="mt-8 flex-1">
            The Parfly app is fantastic! It's so easy to book a delivery, and the drivers are always prompt and courteous. I couldn't be happier with the service.
          </p>
        </div>

        <div class="p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10 flex flex-col">
          <div class="flex gap-4 items-start">
            <img
              class="w-12 h-12 rounded-full"
              src="https://randomuser.me/api/portraits/men/62.jpg"
              alt="user avatar"
              width="200"
              height="200"
              loading="lazy"
            />
            <div class="flex-1 flex justify-between items-start">
              <div>
                <h6 class="text-lg font-medium text-gray-700">Arjun Mehta</h6>
                <p class="text-sm text-gray-500">Driver</p>
              </div>
              <a
                href="https://www.instagram.com/p/1234567890"
                class="text-blue-500 hover:text-blue-600 ml-4"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <p class="mt-8 flex-1">
            Parfly offers great value for drivers. The app is intuitive, and the support team is always ready to help. It's a must-have for anyone in the delivery business.
          </p>
        </div>

        <div class="p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10 flex flex-col">
          <div class="flex gap-4 items-start">
            <img
              class="w-12 h-12 rounded-full"
              src="https://randomuser.me/api/portraits/women/19.jpg"
              alt="user avatar"
              width="400"
              height="400"
              loading="lazy"
            />
            <div class="flex-1 flex justify-between items-start">
              <div>
                <h6 class="text-lg font-medium text-gray-700">Sneha Rao</h6>
                <p class="text-sm text-gray-500">Customer</p>
              </div>
              <a
                href="https://www.facebook.com/sneharao/posts/1234567890"
                class="text-blue-500 hover:text-blue-600 ml-4"
              >
                <i class="fab fa-facebook"></i>
              </a>
            </div>
          </div>
          <p class="mt-8 flex-1">
            Absolutely love Parfly! The app is easy to use, and the delivery service is top-notch. My packages always arrive on time, and the drivers are very professional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;