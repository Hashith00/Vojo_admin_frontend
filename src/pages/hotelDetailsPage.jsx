
import React from "react";

function HotelDetails() {
  return (
    <>
      <div className="w-full h-[250px]">
        <img
          src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
          class="w-full h-full rounded-tl-lg rounded-tr-lg"
        />
      </div>
      <div class="flex flex-col items-center -mt-40">
        <img
          src="src\assets\hotel.jpeg"
          class="w-40 h-40 border-4 border-white rounded-full"
        />
        <div className="flex items-center space-x-2 mt-5">
          <p className="text-2xl">Hilton Colombo</p>
          <span className="bg-blue-500 rounded-full p-1" title="Verified">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-100 h-2.5 w-2.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </span>
        </div>
        <p className="text-gray-700">
        2 Sir Chittampalam A Gardiner Mawatha, Colombo 02
        </p>
        <p className="text-sm text-gray-500">Colombo</p>
      </div>
      <div class="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2 gap-2">
        <div class="flex items-center space-x-4 mt-2">
          <button class="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
            </svg>
            <span>Approve</span>
          </button>
          <button class="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Remove</span>
          </button>
        </div>
      </div>

      <div className="my-4 ">
        <div class="w-full flex flex-col 2xl:w-1/3">
          <div class="flex-1 bg-white rounded-lg shadow-xl p-8">
            <h4 class="text-xl text-gray-900 font-bold">Hotel Info</h4>
            <ul class="mt-2 text-gray-700 justify-center">
            <li class="flex border-b py-2">
                <span class="font-bold w-24">Avaiablity :</span>
                <span class="text-gray-700">True</span>
              </li>
              <li class="flex border-y py-2">
                <span class="font-bold w-24">Hotel name:</span>
                <span class="text-gray-700">Hilton Colombo</span>
              </li>

              <li class="flex border-b py-2">
                <span class="font-bold w-24">Location</span>
                <span class="text-gray-700">Colombo</span>
              </li>
              <li class="flex border-b py-2">
                <span class="font-bold w-24">Mobile:</span>
                <span class="text-gray-700">(123) 123-1234</span>
              </li>
              <li class="flex border-b py-2">
                <span class="font-bold w-24">Email:</span>
                <span class="text-gray-700">hotelname@example.com</span>
              </li>
              <li class="flex border-b py-2">
                <span class="font-bold w-24">Location:</span>
                <span class="text-gray-700">New York, US</span>
              </li>
              <li class="flex border-b py-2">
                <span class="font-bold w-24">Number of Rooms :</span>
                <span class="text-gray-700"> 5 </span>
              </li>
              <li class="flex border-b py-2">
                <span class="font-bold w-24">Price :</span>
                <span class="text-gray-700"> 120 USD</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default HotelDetails;
