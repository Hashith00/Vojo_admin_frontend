import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { navigateToPage } from "../navigations/navigations";

const users = [
  {
    name: "Christina Bersh",
    email: "christina@site.com",
    vehicle: "Car",
    Model: "Toyota axio",
    status: "Pending",
    filled_details: 4,
    created_date: "28 Dec, 12:12",
  },
];

function HotelListTable() {
  // This updatename is purely for call the useEffect when status of the hotel is updated
  const [updatedName, setUpdatedName] = useState("");

  // Formated the date and time
  const convertTime = (created_time) => {
    if (!created_time || !created_time._seconds || !created_time._nanoseconds) {
      return "Invalid timestamp";
    }

    const firebaseTimestamp = created_time;
    const date = new Date(
      firebaseTimestamp._seconds * 1000 + firebaseTimestamp._nanoseconds / 1e6
    );
    return date.toLocaleString();
  };

  const displayDetails = async (id) => {
    try {
      navigate("/hotelDetails", { state: { userid: id } });
    } catch (e) {
      console.log(e);
    }
  };

  const [hotels, setHotels] = useState([]);

  const getusers = async () => {
    try {
      const responce = await axios.get(
        `${import.meta.env.VITE_PRODUCTION_URL}/api/hotels`
      );
      setHotels(responce.data);
    } catch (e) {
      console.log(e);
    }
  };
  getusers();
  console.log(hotels);
  const approve = async (id) => {
    try {
      const responce = await axios.post(
        `${import.meta.env.VITE_PRODUCTION_URL}/api/update-status`,
        { id }
      );
      setHotels(
        hotels.filter((hotel) => {
          return hotel.id != id;
        })
      );
      console.log(responce.status);
      setUpdatedName("Updated");
    } catch (e) {
      console.log(e);
    }
  };

  // Show status
  function returnStatus(sts) {
    if (sts == true) {
      return (
        <div className=" py-3">
          <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
            <svg
              className="w-2.5 h-2.5"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
            Approved
          </span>
        </div>
      );
    } else if (sts == null) {
      return (
        <div className=" py-3">
          <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
            <svg
              className="w-2.5 h-2.5"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
            Approved
          </span>
        </div>
      );
    } else if (sts == false) {
      return (
        <div class="px-6 py-3">
          <span class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full dark:bg-yellow-500/10 dark:text-yellow-500">
            <svg
              class="w-2.5 h-2.5"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            Pending
          </span>
        </div>
      );
    }
  }
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
                      Hotels
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Aprrove hotels, edit and more.
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
                            Hotel Name & Email
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-800">
                            Location & Contact
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-800">
                            Status
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-800">
                            License Number
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-800">
                            Created Date & Time
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-end"></th>
                      <th scope="col" className="px-6 py-3 text-end"></th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {hotels.map((hotel) => (
                      <tr>
                        <td className="h-px w-px whitespace-nowrap">
                          <div className="ps-6 py-3">
                            <label
                              for="hs-at-with-checkboxes-1"
                              className="flex"
                            ></label>
                          </div>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                            <div className="flex items-center gap-x-3">
                              <span class="inline-flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-full bg-gray-300 dark:bg-gray-700">
                                <span class="font-medium text-gray-800 leading-none dark:text-gray-200">
                                  {hotel.display_name.charAt(0)}
                                </span>
                              </span>
                              <div className="grow">
                                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-800">
                                  {hotel.display_name}
                                </span>
                                <span className="block text-sm text-gray-500">
                                  {hotel.email}
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="h-px w-72 whitespace-nowrap">
                          <div className="px-6 py-3">
                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-800">
                              {hotel.location}
                            </span>
                            <span className="block text-sm text-gray-500">
                              {hotel.phone_number}
                            </span>
                          </div>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          {returnStatus(hotel.is_varified)}
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <div className="px-6 py-3">
                            <div className="flex items-center gap-x-3">
                              <span className="text-xs text-gray-500">
                                {hotel.HotelRegistrationNumbert}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <div className="px-6 py-3">
                            <span className="text-sm text-gray-500">
                              {convertTime(hotel.created_time)}
                            </span>
                          </div>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <div className="px-6 py-1.5">
                            <button
                              onClick={() => approve(hotel.uid)}
                              style={{ color: "blue", fontSize: "14px" }}
                            >
                              Change Status
                            </button>
                          </div>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <div className="px-6 py-1.5">
                            <button
                              onClick={() => displayDetails(hotel.uid)}
                              style={{ color: "blue", fontSize: "14px" }}
                            >
                              More Details
                            </button>
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
                        {hotels.length}
                      </span>{" "}
                      Hotels
                    </p>
                  </div>

                  <div>
                    <div className="inline-flex gap-x-2">
                      <button
                        type="button"
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-200 dark:text-gray-800 dark:hover:bg-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        <svg
                          className="flex-shrink-0 w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="m15 18-6-6 6-6" />
                        </svg>
                        Prev
                      </button>

                      <button
                        type="button"
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-200 dark:text-gray-800 dark:hover:bg-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        Next
                        <svg
                          className="flex-shrink-0 w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </button>
                    </div>
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

export default HotelListTable;
