import React from "react";
import RealDashboard from "./Realdash";

function Profiles() {
  return(
    <>
    
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

  <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-black">System Admins</h2>
  </div>
 


  <div class="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
    <div class="grid sm:flex sm:items-center gap-y-3 gap-x-4">
      <a class="flex-none text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:none"
              href="#"
              aria-label="Brand">
      <img class="rounded-lg size-20" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
      </a>
      <div class="sm:flex sm:flex-col sm:h-full">
        <div>
          <h3 class="font-medium text-gray-800 dark:text-gray-900">
            David Forren
          </h3>
          <p class="mt-1 text-xs uppercase text-gray-900">
            Founder / CEO
          </p>
        </div>
      
      </div>
    </div>
    

    <div class="grid sm:flex sm:items-center gap-y-3 gap-x-4">
    <a class="flex-none text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:none"
              href="#"
              aria-label="Brand">
      <img class="rounded-lg size-20" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
       </a>
      <div class="sm:flex sm:flex-col sm:h-full">
        <div>
          <h3 class="font-medium text-gray-800 dark:text-gray-900">
            Amil Evara
          </h3>
          <p class="mt-1 text-xs uppercase text-gray-900">
            User Admin
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>

  </>
  );
}

export default Profiles;