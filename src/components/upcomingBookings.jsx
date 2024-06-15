import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { navigateToPage } from "../navigations/navigations";

function UpcomingBookings() {
  // This updatename is purely for call the useEffect when status of the hotel is updated
  const [updatedName, setUpdatedName] = useState("");
  const [username, setUsername] = useState("");

  const convertTime = (created_time) => {
    const firebaseTimestamp = created_time;
    const date = new Date(
      firebaseTimestamp._seconds * 1000 + firebaseTimestamp._nanoseconds / 1e6
    );
    return date.toLocaleDateString();
  };

  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    const getBookings = async () => {
      try {
        const responce = await axios.get(
          `${import.meta.env.VITE_PRODUCTION_URL}/api/upcoming_bookings`
        );
        setBookings(responce.data);
      } catch (e) {
        console.log(e);
      }
    };
    getBookings();
    console.log(bookings);
  }, [updatedName]);

  const getUserName = async (uid) => {
    try {
      const response = await axios
        .get(`http://localhost:4000/api/users/${uid}`)
        .then((response) => {
          return response.data.display_name;
        });
    } catch (e) {
      console.log(e);
    }
  };
  getUserName();

  const navigate = useNavigate();
  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-100">
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-400">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-800">
                      Upcoming Bookings
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      See upcoming booking details
                    </p>
                  </div>

                  <div>
                    <div className="inline-flex gap-x-2">
                      <a
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-100 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-200 dark:border-gray-200 dark:text-gray-700 dark:hover:bg-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        href="#"
                      >
                        View all
                      </a>
                    </div>
                  </div>
                </div>

                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-100">
                  <thead className="bg-gray-50 dark:bg-slate-300">
                    <tr>
                      <th scope="col" className="ps-6 py-3 text-start">
                        <label
                          htmlFor="hs-at-with-checkboxes-main"
                          className="flex"
                        ></label>
                      </th>

                      <th
                        scope="col"
                        className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start"
                      >
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-800">
                            User
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-800">
                            Hotel
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-800">
                            Start Date
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-800">
                            End Date
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-800">
                            No of Rooms
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-800">
                            Price
                          </span>
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {bookings.map((booking) => (
                      <tr>
                        <td className="h-px w-px whitespace-nowrap">
                          <div className="ps-6 py-3">
                            <label
                              for="hs-at-with-checkboxes-1"
                              className="flex"
                            ></label>
                          </div>
                        </td>
                        <td className="h-px w-72 whitespace-nowrap">
                          <div className="px-6 py-3">
                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-800">
                              {booking.user_id}
                            </span>
                          </div>
                        </td>
                        <td className="h-px w-72 whitespace-nowrap">
                          <div className="px-6 py-3">
                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-800">
                              {booking.hotel}
                            </span>
                          </div>
                        </td>
                        <td className="h-px w-72 whitespace-nowrap">
                          <div className="px-6 py-3">
                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-800">
                              {convertTime(booking.start_date)}
                            </span>
                          </div>
                        </td>
                        <td className="h-px w-72 whitespace-nowrap">
                          <div className="px-6 py-3">
                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-800">
                              {convertTime(booking.end_date)}
                            </span>
                          </div>
                        </td>

                        <td className="h-px w-72 whitespace-nowrap">
                          <div className="px-6 py-3">
                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-800">
                              {booking.NumberOfRooms}
                            </span>
                          </div>
                        </td>
                        <td className="h-px w-72 whitespace-nowrap">
                          <div className="px-6 py-3">
                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-800">
                              {booking.price}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-semibold text-gray-800 dark:text-gray-800">
                        {bookings.length}
                      </span>{" "}
                      Upcoming Bookings
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpcomingBookings;
