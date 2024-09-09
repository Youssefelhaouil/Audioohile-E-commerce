import React, { useContext ,useState} from 'react'
import Header from '../compenents/Header'
import { ProductContext } from '../Context/ProductContext'
import CheckoutForm from '../Checkout/CheckoutForm'
import Summary from '../Checkout/Summary'
import ChekoutConfirmation from '../Checkout/Confirmation'

function Checkout() {
  const { goBack } = useContext(ProductContext)
  const [confirmed,setConfirmed]=useState(false)


  return (
    <>
      <div className=' bg-black'>
        <Header />
      </div>

      <div className="h-full w-full bg-[#cfcfcfd8] px-[165px] lg:px-6 py-10">
        <p onClick={goBack} className=' pt-[40px] font-medium font-sans text-gray-500 hover:text-gray-800  cursor-pointer pb-10' >Go Back</p>
        <div className='grid grid-cols-[60%_40%] lg:grid-cols-1 gap-10'>
          <CheckoutForm />
          <Summary setConfirmed={setConfirmed} />

        </div>
      </div>
      {confirmed && 
      <div className='fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-15 grid place-items-center'>
        <ChekoutConfirmation />

      </div>
      }
    </>
  )
}

export default Checkout
