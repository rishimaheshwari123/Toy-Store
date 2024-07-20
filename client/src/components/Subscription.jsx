import React from "react";
import sub from "../assets/sub.png";

const Subscription = () => {
  return (
    <div>
      <br />
      <div className="shopbycat lg:ml-16 mt-12">
        <img id="cat-img" src={sub}></img>
      </div>
      <section class="pt-8 pb-8 lg:mt-12 ">
        <div class="max-w-6xl mx-auto px-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* <!-- Basic Plan --> */}
            <div class="border rounded-lg shadow-lg bg-white">
              <div class="bg-gray-100 p-4 text-center">
                <h3 class="text-xl font-semibold text-blue-600">Basic</h3>
              </div>
              <div class="p-4 text-center">
                <p class="font-semibold">Features Include</p>
                <ul class="list-none p-0">
                  <li class="my-2">
                    <strong>2</strong> Users
                  </li>
                  <li class="my-2">
                    <strong>2</strong> Service Workflows
                  </li>
                  <li class="my-2">Unlimited Invoice</li>
                </ul>
              </div>
              <hr />
              <div class="p-4 text-center">
                <div class="mb-4">
                  <div class="text-2xl font-bold text-blue-600">
                    <sup>$</sup>50<small>/month</small>
                  </div>
                  <div class="text-sm text-gray-500">Save $120 Annually</div>
                </div>
                <div>
                  <div class="text-2xl font-bold text-blue-600">
                    <sup>$</sup>60<small>/month</small>
                  </div>
                  <div class="text-sm text-gray-500">
                    $50 when paid annually
                  </div>
                </div>
                <div class="mt-4 flex justify-center   min-w-full ">
                  <a
                    href="https://wa.me/+919300648212"
                    target="_blank"
                    className="lg:px-[110px] px-[70px] py-2 bg-blue-500 text-white rounded"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Plus Plan --> */}
            <div class="border rounded-lg shadow-lg bg-white relative">
              <div class="bg-gray-100 p-4 text-center relative">
                <h3 class="text-xl font-semibold text-orange-600">Plus</h3>
                <label class="block text-red-500 font-semibold">
                  Most Popular
                </label>
                <div class="absolute -top-8 -right-6 mt-2 mr-2">
                  <img
                    class="w-12 h-12"
                    src="https://s3-ap-southeast-2.amazonaws.com/agentcis-wp/wp-content/uploads/20161201053953/christmas-hat-icon.png"
                    alt="Christmas Hat"
                  />
                </div>
              </div>
              <div class="p-4 text-center">
                <p class="font-semibold">Features Include</p>
                <ul class="list-none p-0">
                  <li class="my-2">
                    <strong>5</strong> Users
                  </li>
                  <li class="my-2">
                    <strong>4</strong> Service Workflows
                  </li>
                  <li class="my-2">Unlimited Invoice</li>
                </ul>
              </div>
              <hr />
              <div class="p-4 text-center">
                <div class="mb-4">
                  <div class="text-2xl font-bold text-orange-600">
                    <sup>$</sup>100<small>/month</small>
                  </div>
                  <div class="text-sm text-gray-500">Save $240 Annually</div>
                </div>
                <div>
                  <div class="text-2xl font-bold text-orange-600">
                    <sup>$</sup>120<small>/month</small>
                  </div>
                  <div class="text-sm text-gray-500">
                    $100 when paid annually
                  </div>
                </div>
                <div class="mt-4 flex justify-center">
                  <a
                    href="https://wa.me/+919300648212"
                    target="_blank"
                    class="lg:px-[110px] px-[70px] py-2 bg-orange-500 text-white rounded"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Premium Plan --> */}
            <div class="border rounded-lg shadow-lg bg-white">
              <div class="bg-gray-100 p-4 text-center">
                <h3 class="text-xl font-semibold text-purple-600">Premium</h3>
              </div>
              <div class="p-4 text-center">
                <p class="font-semibold">Features Include</p>
                <ul class="list-none p-0">
                  <li class="my-2">
                    <strong>10</strong> Users
                  </li>
                  <li class="my-2">
                    <strong>8</strong> Service Workflows
                  </li>
                  <li class="my-2">Unlimited Invoice</li>
                </ul>
              </div>
              <hr />
              <div class="p-4 text-center">
                <div class="mb-4">
                  <div class="text-2xl font-bold text-purple-600">
                    <sup>$</sup>150<small>/month</small>
                  </div>
                  <div class="text-sm text-gray-500">Save $360 Annually</div>
                </div>
                <div>
                  <div class="text-2xl font-bold text-purple-600">
                    <sup>$</sup>180<small>/month</small>
                  </div>
                  <div class="text-sm text-gray-500">
                    $150 when paid annually
                  </div>
                </div>
                <div class="mt-4 flex justify-center ">
                  <a
                    href="https://wa.me/+919300648212"
                    target="_blank"
                    class="lg:px-[110px] px-[70px] py-2 bg-purple-500 text-white rounded"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subscription;
