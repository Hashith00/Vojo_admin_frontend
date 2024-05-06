import React from 'react'
import JourneyList from './journeys'
import Currentjourneys from '../components/currentjourneys'

function CurrentjourneyPage() {
  return (
    <div>
      <div class="dark:bg-gray-50 ">
        <JourneyList/>
      </div>
      <div class="pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
        <Currentjourneys/>
      </div>
    </div>
  )
}

export default CurrentjourneyPage