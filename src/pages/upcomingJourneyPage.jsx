import React from 'react'
import Upcomingjourneys from '../components/upcomingjourneys'
import JourneyList from './journeys'

function UpcomingJourneyPage() {
  return (
    <div>
    <div class="dark:bg-gray-50 ">
      <JourneyList/>
    </div>
    <div class="pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
      <Upcomingjourneys/>
    </div>
  </div>
  )
}

export default UpcomingJourneyPage