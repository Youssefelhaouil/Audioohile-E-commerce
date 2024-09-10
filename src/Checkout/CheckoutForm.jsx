import React, { useState } from 'react'

function CheckoutForm({ formValidation, setFormValidation, formErrors }) {
    const handleInputChange = (e) => {
        setFormValidation((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <>
            <div className='pt-6 w-full h-auto bg-white p-8 rounded-md flex flex-col gap-6 font-sans'>
                <h1 className=' text-h3 font-semibold  '>Checkout</h1>
                <div>
                    <h2 className='font-semibold text-sm text-orange pb-4'>BILLING DETAILS</h2>
                    <div className='flex flex-row md:flex-col flex-wrap gap-2'>
                        <div className='w-[48%] md:w-full'>
                            <label htmlFor="name" className={`font-bold text-[12px] ${formErrors.name && "text-red-600"}`}>Name</label>
                            <input className={`h-14 w-full border-2 border-[#cfcfcfd8] rounded-md focus:outline-orange px-4 ${formErrors.name && "focus:outline-red-600 border-red-600 "}`}
                                type="text"
                                id='name'
                                name='name'
                                value={formValidation.name}
                                onChange={handleInputChange}
                                placeholder='Youssef' />
                            {formErrors.name && <p className='text-red-600 text-sm'>{formErrors.name}</p>}

                        </div>
                        <div className='w-[48%] md:w-full'>
                            <label htmlFor="emailAddress" className={`font-bold text-[12px] ${formErrors.email && "text-red-600"}`}>Email Address</label>
                            <input className={`h-14 w-full border-2 border-[#cfcfcfd8] rounded-md focus:outline-orange px-4 ${formErrors.email && "focus:outline-red-600 border-red-600 "}`}
                                type="email"
                                id='email'
                                name='email'
                                value={formValidation.email}
                                onChange={handleInputChange}
                                placeholder='Youssef@example.com'
                            />
                            {formErrors.email && <p className='text-red-500 text-sm'>{formErrors.email}</p>}

                        </div>
                        <div className='w-[48%] md:w-full'>
                            <label htmlFor="phoneNumber" className={`font-bold text-[12px] ${formErrors.phone && "text-red-600"}`}>Phone Number</label>
                            <input className={`h-14 w-full border-2 border-[#cfcfcfd8] rounded-md focus:outline-orange px-4 ${formErrors.phone && "focus:outline-red-600 border-red-600 "}`}
                                type="text"
                                id='phone'
                                name='phone'
                                value={formValidation.phone}
                                onChange={handleInputChange}
                                placeholder='+21266124629' />
                            {formErrors.phone && <p className='text-red-500 text-sm'>{formErrors.phone}</p>}

                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='font-semibold text-sm text-orange pb-4'>SHIPPING INFO</h2>
                    <div className='flex flex-row md:flex-col flex-wrap gap-2'>
                        <div className='w-[100%]'>
                            <label htmlFor="Address" className={`font-bold text-[12px] ${formErrors.phone && "text-red-600"}`}>Address</label>
                            <input className={`h-14 w-full border-2 border-[#cfcfcfd8] rounded-md focus:outline-orange px-4 ${formErrors.address && "focus:outline-red-600 border-red-600 "}`}
                                type="text"
                                id='address'
                                name='address'
                                value={formValidation.address}
                                onChange={handleInputChange}
                                placeholder='Hay Mohamadi Rue 274 '
                            />
                            {formErrors.address && <p className='text-red-500 text-sm'>{formErrors.address}</p>}

                        </div>
                        <div className='w-[48%] md:w-full'>
                            <label htmlFor="ZipCode" className={`font-bold text-[12px] ${formErrors.zip && "text-red-600"}`}>Zip Code</label>
                            <input className={`h-14 w-full border-2 border-[#cfcfcfd8] rounded-md focus:outline-orange px-4 ${formErrors.zip && "focus:outline-red-600 border-red-600"}`}
                                type="text"
                                id='zip'
                                name='zip'
                                value={formValidation.zip}
                                onChange={handleInputChange}
                                placeholder='45000'
                            />
                            {formErrors.zip && <p className='text-red-500 text-sm'>{formErrors.zip}</p>}

                        </div>
                        <div className='w-[48%] md:w-full'>
                            <label htmlFor="City" className={`font-bold text-[12px] ${formErrors.city && "text-red-600"}`}>City</label>
                            <input className={`h-14 w-full border-2 border-[#cfcfcfd8] rounded-md focus:outline-orange px-4 ${formErrors.city && "focus:outline-red-600 border-red-600"}`}
                                type="text"
                                id='city'
                                name='city'
                                value={formValidation.city}
                                onChange={handleInputChange}
                                placeholder='Ouarzazate'
                            />
                            {formErrors.city && <p className='text-red-500 text-sm'>{formErrors.city}</p>}

                        </div>
                        <div className='w-[48%] md:w-full'>
                            <label htmlFor="Country" className={`font-bold text-[12px] ${formErrors.country && "text-red-600"}`}>Country</label>
                            <input className={`h-14 w-full border-2 border-[#cfcfcfd8] rounded-md focus:outline-orange px-4 ${formErrors.country && "focus:outline-red-600 border-red-600 "}`}
                                type="text"
                                id='country'
                                name='country'
                                value={formValidation.country}
                                onChange={handleInputChange}
                                placeholder='Morocco'
                            />
                            {formErrors.country && <p className='text-red-500 text-sm'>{formErrors.country}</p>}


                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='font-semibold text-sm text-orange pb-4'>PAYMENT DETAILS</h2>
                    <div className='flex flex-row justify-between items-start md:flex-col md:gap-4'>
                        <p className='font-bold text-[13px]'>Payment Method</p>
                        <div className='w-[60%] md:w-full flex flex-col gap-4'>
                            <label htmlFor='e-Money' className={`h-16 border-2 border-[#CFCFCFCF] ${formValidation.paymentOption === "e-Money" && "border-orange"} px-4 flex items-center  gap-4 rounded-md`}>
                                <input type="radio"
                                    name='paymentOption'
                                    id='e-Money'
                                    value="e-Money"
                                    onChange={handleInputChange}
                                    checked={formValidation.paymentOption === "e-Money"}
                                    className='accent-orange w-5 h-5' />
                                <label htmlFor="e-Money" className='font-bold text-[15px]'> e-Money</label>
                            </label>
                            <label htmlFor='cashOnDelivery' className={`h-16 border-2 border-[#CFCFCFCF] ${formValidation.paymentOption === "cashOnDelivery" && "border-orange"} px-4 flex items-center  gap-4 rounded-md`} >
                                <input type="radio"
                                    name='paymentOption'
                                    id='cashOnDelivery'
                                    value="cashOnDelivery"
                                    onChange={handleInputChange}
                                    checked={formValidation.paymentOption === "cashOnDelivery"}
                                    className='accent-orange w-5 h-5' />
                                <label htmlFor="cashOnDelivery" className='font-bold text-[15px]'> Cash on Delivery</label>
                            </label>
                        </div>
                    </div>
                    {formValidation.paymentOption === "e-Money" ?
                        <div className='flex flex-row md:flex-col flex-wrap gap-2 pt-4'>
                            <div className='w-[48%] md:w-full'>
                                <label htmlFor="e-number" className={`font-bold text-[12px] ${formErrors.eNumber && "text-red-600"}`}>e-Money Number</label>
                                <input className={`h-14 w-full border-2 border-[#cfcfcfd8] rounded-md focus:outline-orange px-4 ${formErrors.eNumber && "focus:outline-red-600 border-red-600"}`}
                                    type="text"
                                    id='eNumber'
                                    name='eNumber'
                                    value={formValidation.eNumber}
                                    onChange={handleInputChange}
                                    placeholder='12345678'
                                />
                                {formErrors.eNumber && <p className='text-red-500 text-sm'>{formErrors.eNumber}</p>}

                            </div>
                            <div className='w-[48%] md:w-full'>
                                <label htmlFor="emailAddress" className={`font-bold text-[12px] ${formErrors.ePin && "text-red-600"}`}>e-Money Pin</label>
                                <input className={`h-14 w-full border-2 border-[#cfcfcfd8] rounded-md focus:outline-orange px-4 ${formErrors.ePin && "focus:outline-red-600 border-red-600"}`}
                                    type="email"
                                    id='ePin'
                                    name='ePin'
                                    value={formValidation.ePin}
                                    onChange={handleInputChange}
                                    placeholder='1234'
                                />
                                {formErrors.ePin && <p className='text-red-500 text-sm'>{formErrors.ePin}</p>}

                            </div>
                        </div>
                        :
                        <div className=' pt-4 flex items-center gap-8'>
                            <img src="/assets/cashImg.png" alt="cash on delivery img"
                                className='h-12 w-12' />
                            <p className='font-medium text-base text-gray-400'>The ‘Cash on Delivery’ option enables you to pay in cash
                                when our delivery courier arrives at your residence.
                                Just make sure your address is correct so that your order will not be cancelled.</p>
                        </div>
                    }

                </div>

            </div>

        </>
    )
}

export default CheckoutForm
