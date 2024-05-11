import React from 'react'
import Upcomingjourneys from '../components/upcomingjourneys'
import JourneyList from './journeys'
import Bookings from '../components/bookings'

function BookingJourneyPage() {
  return (
    <div>
    <div class="dark:bg-gray-50 ">
      <JourneyList/>
    </div>
    <div class="pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
      <Bookings/>
    </div>
  </div>
  )
}

export default BookingJourneyPage