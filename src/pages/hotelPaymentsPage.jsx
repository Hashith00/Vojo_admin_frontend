import React from 'react'
import PaymentsPage from './PaymentsPage'
import HotelPayments from '../components/hotelPayments'

function HotelPaymentsPage() {
  return (
    <>
    <div>
      <div class="dark:bg-gray-50 ">
        <PaymentsPage/>
      </div>
      <div class="pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
        <HotelPayments/>
      </div>
    </div>
    </>
  )
}

export default HotelPaymentsPage