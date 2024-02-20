import React from "react";

function Statistics() {
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
                    <svg
                      class="flex-shrink-0 w-4 h-4 text-gray-500"
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
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <path d="M12 17h.01" />
                    </svg>
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
                <span class="font-semibold">24</span>{" "}
                <span class="text-gray-500">/ 100</span>
              </h3>
            </div>
          </div>

          <div class="flex flex-col border rounded-xl dark:border-gray-300">
            <div class="p-4 md:p-5">
              <div class="flex items-center gap-x-2">
                <p class="text-sm font-semibold text-gray-500">Riders</p>
                <div class="hs-tooltip">
                  <div class="hs-tooltip-toggle">
                    <svg
                      class="flex-shrink-0 w-4 h-4 text-gray-500"
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
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <path d="M12 17h.01" />
                    </svg>
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
                <span class="font-semibold">24</span>{" "}
                <span class="text-gray-500">/ 100</span>
              </h3>
            </div>
          </div>

          <div class="flex flex-col border rounded-xl dark:border-gray-300">
            <div class="p-4 md:p-5">
              <div class="flex items-center gap-x-2">
                <p class="text-sm font-semibold text-gray-500">Hotels</p>
                <div class="hs-tooltip">
                  <div class="hs-tooltip-toggle">
                    <svg
                      class="flex-shrink-0 w-4 h-4 text-gray-500"
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
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <path d="M12 17h.01" />
                    </svg>
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
                <span class="font-semibold">24</span>{" "}
                <span class="text-gray-500">/ 100</span>
              </h3>
            </div>
          </div>

          <div class="flex flex-col border rounded-xl dark:border-gray-300">
            <div class="p-4 md:p-5">
              <div class="flex items-center gap-x-2">
                <p class="text-sm font-semibold text-gray-500">Transactions</p>
                <div class="hs-tooltip">
                  <div class="hs-tooltip-toggle">
                    <svg
                      class="flex-shrink-0 w-4 h-4 text-gray-500"
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
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <path d="M12 17h.01" />
                    </svg>
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
                <span class="font-semibold">24</span>{" "}
                <span class="text-gray-500">/ 100</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistics;
