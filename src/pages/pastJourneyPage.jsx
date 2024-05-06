import React from 'react'
import Pastjourneys from '../components/pastjourneys'
import JourneyList from './journeys'

function PastJourneyPage() {
  return (
    <div>
    <div class="dark:bg-gray-50 ">
      <JourneyList/>
    </div>
    <div class="pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
      <Pastjourneys/>
    </div>
  </div>
  )
}

export default PastJourneyPage