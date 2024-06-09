import React from 'react'
import Upcomingjourneys from '../components/upcomingjourneys'
import JourneyList from './journeys'
import Bookings from '../components/pastBookings'
import PastTrips from '../components/pasttrips'
import UpcomingTrips from '../components/upcomingTrips'

function TripJourneyPage() {
  return (
    <div>
    <div class="dark:bg-gray-50 ">
      <JourneyList/>
    </div>
    <div class="pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
      <UpcomingTrips/>
    </div>
    <div class="pt-0 px-0 sm:px-0 md:px-8 lg:ps-72">
      <PastTrips/>
    </div>
  </div>
  )
}

export default TripJourneyPage