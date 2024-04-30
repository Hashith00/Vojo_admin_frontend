import React from 'react'
import PaymentsPage from './PaymentsPage'
import RiderPayments from '../components/riderPayments'

function RiderPaymentsPage() {
  return (
    <>
    <div>
      <div class="dark:bg-gray-50 ">
        <PaymentsPage/>
      </div>
      <div class="pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
        <RiderPayments/>
      </div>
    </div>
    </>
  )
}

export default RiderPaymentsPage;