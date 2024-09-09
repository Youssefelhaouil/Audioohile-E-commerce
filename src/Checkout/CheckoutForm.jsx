import React from 'react'

function CheckoutForm() {
    return (
        <>
            <div className='pt-6 w-full h-auto bg-white p-8 rounded-md flex flex-col gap-6 font-sans'>
                <h1 className=' text-h3 font-semibold  '>Checkout</h1>
                <div>
                    <h2 className='font-semibold text-sm text-orange pb-4'>BILLING DETAILS</h2>
                    <div className='flex flex-row md:flex-col flex-wrap gap-2'>
                        <div className='w-[48%] md:w-full'>
                            <label htmlFor="name" className='font-bold text-[12px]'>Name</label>
                            <input className='h-14 w-full border-2 border-[#cfcfcfd8] rounded-md  focus:outline-orange px-4' type="text" id='name' name='name' />
                        </div>
                        <div className='w-[48%] md:w-full'>
                            <label htmlFor="emailAddress" className='font-bold text-[12px]'>Email Address</label>
                            <input className='h-14 w-full border-2 border-[#cfcfcfd8] rounded-md focus:outline-orange px-4' type="email" id='emailAddress' name='emailAddress' />
                        </div>
                        <div className='w-[48%] md:w-full'>
                            <label htmlFor="phoneNumber" className='font-bold text-[12px]'>Phone Number</label>
                            <input className='h-14 w-full border-2 border-[#cfcfcfd8] rounded-md focus:outline-orange px-4' type="text" id='phoneNumber' name='phoneNumber' />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='font-semibold text-sm text-orange pb-4'>SHIPPING INFO</h2>
                    <div className='flex flex-row md:flex-col flex-wrap gap-2'>
                        <div className='w-[100%]'>
                            <label htmlFor="Address" className='font-bold text-[12px]'>Address</label>
                            <input className='h-14 w-full border-2 border-[#cfcfcfd8] rounded-md focus:outline-orange px-4' type="text" id='Address' name='Address' />
                        </div>
                        <div className='w-[48%] md:w-full'>
                            <label htmlFor="ZipCode" className='font-bold text-[12px]'>Zip Code</label>
                            <input className='h-14 w-full border-2 border-[#cfcfcfd8] rounded-md focus:outline-orange px-4' type="text" id='ZipCode' name='ZipCode' />
                        </div>
                        <div className='w-[48%] md:w-full'>
                            <label htmlFor="City" className='font-bold text-[12px]'>City</label>
                            <input className='h-14 w-full border-2 border-[#cfcfcfd8] rounded-md focus:outline-orange px-4' type="text" id='City' name='City' />
                        </div>
                        <div className='w-[48%] md:w-full'>
                            <label htmlFor="Country" className='font-bold text-[12px]'>Country</label>
                            <input className='h-14 w-full border-2 border-[#cfcfcfd8] rounded-md focus:outline-orange px-4' type="text" id='Country' name='Country' />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='font-semibold text-sm text-orange pb-4'>PAYMENT DETAILS</h2>
                    <div className='flex flex-row justify-between items-start md:flex-col md:gap-4'>
                        <p className='font-bold text-[13px]'>Payment Method</p>
                        <div className='w-[60%] md:w-full flex flex-col gap-4'>
                            <label htmlFor='e-Money' className=' h-16 border-2 border-[#CFCFCFCF]  px-4 flex items-center gap-4 rounded-md'>
                                <input type="radio"
                                    name='paymentMethod'
                                    id='e-Money'
                                    className='accent-orange w-5 h-5' />
                                <label htmlFor="e-Money" className='font-bold text-[15px]'> e-Money</label>
                            </label>
                            <label htmlFor='cashOnDelivery' className=' h-16 border-2 border-[#CFCFCFCF] px-4 flex items-center  gap-4 rounded-md'>
                                <input type="radio"
                                    name='paymentMethod'
                                    id='cashOnDelivery'
                                    className='accent-orange w-5 h-5' />
                                <label htmlFor="cashOnDelivery" className='font-bold text-[15px]'> Cash on Delivery</label>
                            </label>
                        </div>
                    </div>
                    {/* <div className='flex flex-row md:flex-col flex-wrap gap-2 pt-4'>
                        <div className='w-[48%] md:w-full'>
                            <label htmlFor="e-number" className='font-bold text-[12px]'>e-Money Number</label>
                            <input className='h-14 w-full border-2 border-[#cfcfcfd8] rounded-md  focus:outline-orange px-4' type="text" id='e-number' name='e-number' />
                        </div>
                        <div className='w-[48%] md:w-full'>
                            <label htmlFor="emailAddress" className='font-bold text-[12px]'>e-Money Pin</label>
                            <input className='h-14 w-full border-2 border-[#cfcfcfd8] rounded-md focus:outline-orange px-4' type="email" id='e-pin' name='e-number' />
                        </div>
                    </div> */}
                    <div className=' pt-4 flex items-center gap-8'>
                        <img src="src/assets/cashImg.png" alt="cash on delivery img"
                            className='h-12 w-12' />
                        <p className='font-medium text-base text-gray-400'>The ‘Cash on Delivery’ option enables you to pay in cash
                            when our delivery courier arrives at your residence.
                            Just make sure your address is correct so that your order will not be cancelled.</p>
                    </div>
                </div>

            </div>

        </>
    )
}

export default CheckoutForm
