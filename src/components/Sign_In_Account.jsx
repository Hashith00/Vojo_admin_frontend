import React from "react"

function SignInAccount() {
  return(
    <>
    <div class="bg-white/[.6] backdrop-blur-lg dark:bg-slate-900/[.6]">
  <div class="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
    <div class="grid justify-center sm:grid-cols-2 sm:items-center gap-4">
      <div class="flex items-center gap-x-3 md:gap-x-5">
    
        <div class="grow">
          <p class="md:text-xl text-gray-800 font-semibold dark:text-gray-900">
            Hi there,
          </p>
          <p class="text-sm md:text-base text-gray-800 dark:text-gray-900">
            See New Updates
          </p>
        </div>
      </div>
      

      <div class="text-center sm:text-start flex sm:justify-end sm:items-center gap-x- md:gap-x-4">
        <a class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          Pending
        </a>
        <a class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          Approved
        </a>
        <a class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          Rejected
        </a>
      </div>
      
    </div>
    
  </div>
</div>
    </>
  );
}

export default SignInAccount;