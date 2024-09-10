import React, { useContext, useState } from 'react';
import Header from '../compenents/Header';
import { ProductContext } from '../Context/ProductContext';
import CheckoutForm from '../Checkout/CheckoutForm';
import Summary from '../Checkout/Summary';
import ChekoutConfirmation from '../Checkout/Confirmation';
import EmptyCheckout from '../Checkout/EmptyCheckout';

function Checkout() {
  const { goBack,CartItems } = useContext(ProductContext);
  const [confirmed, setConfirmed] = useState(false);
  
  const [formValidation, setFormValidation] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    paymentOption: "cashOnDelivery",
    ePin: "",
    eNumber: ""
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formValidation.name) errors.name = "Name is required";
    if (!formValidation.email || !/\S+@\S+\.\S+/.test(formValidation.email)) errors.email = "Valid email is required";
    if (!formValidation.phone || !/^\+?\d{9,15}$/.test(formValidation.phone)) errors.phone = "Valid phone number is required";
    if (!formValidation.address) errors.address = "Address is required";
    if (!formValidation.zip || !/^\d{5}$/.test(formValidation.zip)) errors.zip = "Valid zip code is required";
    if (!formValidation.city) errors.city = "City is required";
    if (!formValidation.country) errors.country = "Country is required";
    if (formValidation.paymentOption === "e-Money") {
      if (!formValidation.ePin) errors.ePin = "e-Money number is required";
      if (!formValidation.eNumber) errors.eNumber = "e-Money pin is required";
    }
    return errors;
  };

  const handleConfirm = () => {
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setConfirmed(true);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <>
      <div className='bg-black'>
        <Header />
      </div>

      {CartItems.length>0? <> <div className="h-full w-full bg-[#cfcfcfd8] px-[165px] lg:px-6 py-10">
        <p onClick={goBack} className='pt-[40px] font-medium font-sans text-gray-500 hover:text-gray-800 cursor-pointer pb-10'>Go Back</p>
        <div className='grid grid-cols-[60%_40%] lg:grid-cols-1 gap-10'>
          <CheckoutForm formValidation={formValidation} setFormValidation={setFormValidation} formErrors={formErrors} />
          <Summary handleConfirm={handleConfirm} formValidation={formValidation} />
        </div>
      </div>

      {confirmed && 
      <div className='fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-15 grid place-items-center'>
        <ChekoutConfirmation />
      </div>
      }</> : <EmptyCheckout /> 
    }
    </>
  );
}

export default Checkout;
