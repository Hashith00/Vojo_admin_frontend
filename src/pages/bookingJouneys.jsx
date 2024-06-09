import React from 'react'
import JourneyList from './journeys'
import UpcomingBookings from '../components/upcomingBookings'
import PastBookings from '../components/pastBookings'

function BookingJourneyPage() {
  return (
    <div>
    <div class="dark:bg-gray-50 ">
      <JourneyList/>
    </div>
    <div class="pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
      <UpcomingBookings/>
    </div>
    <div class="pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
      <PastBookings/>
    </div>
  </div>
  )
}

export default BookingJourneyPage