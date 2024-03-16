import React, { useState, useEffect } from 'react';
import axios from "axios";
import RealDashboard from '../pages/Realdash';
const Statistics = () => {
  //Se the count to the variables
  const [riderCount, setRiderCount] = useState(0);
  const [hotelCount, setHotelCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);

  useEffect(() => {
    // Fetching the count of riders
    const fetchRiderCount = async () => {
      try {
        const response = await axios.get('http://localhost:1000/api/rider/count');
        const { val } = response.data; 
        setRiderCount(val);
        
      } catch (error) {
        console.error('Error fetching riders count:', error);
      }
    };

    fetchRiderCount();

    // Fetching the count of hotels
    const fetchHotelCount = async () => {
      try {
        const response = await axios.get('http://localhost:1000/api/hotel/count');
        const { val } = response.data; 
        setHotelCount(val);
        
      } catch (error) {
        console.error('Error fetching hotels count:', error);
      }
    };

    fetchHotelCount();

    // Fetching the count of users
    const fetchUsersCount = async () => {
      try {
        const response = await axios.get('http://localhost:1000/api/user/count');
        const { val } = response.data; // Extract the val from the response
        setUsersCount(val);
        
      } catch (error) {
        console.error('Error fetching users count:', error);
      }
    };

    fetchUsersCount();
  }, );
  return (
    <>
    
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 dark:bg-slate-100 p-6 rounded-xl">
          <div class="flex flex-col border rounded-xl dark:border-gray-300">
            <div class="p-4 md:p-5">
              <div class="flex items-center gap-x-2">
                <p class="text-sm font-semibold text-gray-500">Users</p>
                <div class="hs-tooltip">
                  <div class="hs-tooltip-toggle">
                    
                    <span
                      class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700"
                      role="tooltip"
                    >
                      The number of domains
                    </span>
                  </div>
                </div>
              </div>

              <h3 class="mt-2 text-2xl sm:text-3xl lg:text-4xl text-gray-800 dark:text-gray-800">
                <span class="font-semibold">{usersCount}</span>{" "}
              </h3>
            </div>
          </div>

          <div class="flex flex-col border rounded-xl dark:border-gray-300">
            <div class="p-4 md:p-5">
              <div class="flex items-center gap-x-2">
                <p class="text-sm font-semibold text-gray-500">Riders</p>
                <div class="hs-tooltip">
                  <div class="hs-tooltip-toggle">
                    <span
                      class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700"
                      role="tooltip"
                    >
                      The number of domains
                    </span>
                  </div>
                </div>
              </div>

              <h3 class="mt-2 text-2xl sm:text-3xl lg:text-4xl text-gray-800 dark:text-gray-800">
                <span class="font-semibold">{riderCount}</span>{" "}
              </h3>
            </div>
          </div>

          <div class="flex flex-col border rounded-xl dark:border-gray-300">
            <div class="p-4 md:p-5">
              <div class="flex items-center gap-x-2">
                <p class="text-sm font-semibold text-gray-500">Hotels</p>
                <div class="hs-tooltip">
                  <div class="hs-tooltip-toggle">
          
                    <span
                      class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700"
                      role="tooltip"
                    >
                      The number of domains
                    </span>
                  </div>
                </div>
              </div>

              <h3 class="mt-2 text-2xl sm:text-3xl lg:text-4xl text-gray-800 dark:text-gray-800">
                <span class="font-semibold">{hotelCount}</span>{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistics;
