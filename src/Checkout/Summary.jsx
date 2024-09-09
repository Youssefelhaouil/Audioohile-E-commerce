import React, { useContext, useState } from 'react';
import { ProductContext } from '../Context/ProductContext';


function Summary({setConfirmed}) {
    const { CartItems,GlobalTotal } = useContext(ProductContext)
    const Vat= GlobalTotal*0.2;
    return (
        <>
            <div className='w-full h-fit lg:h-auto bg-white p-8 rounded-md flex flex-col gap-6'>
                <h1 className='text-h3 font-semibold'>Summary</h1>
                {CartItems.length > 0 && CartItems.map((CartItem, index) =>
                    <div key={index} className=' flex justify-between items-center'>
                        <div className='flex items-center  gap-4'>
                            <div className='h-16 w-16 bg-light-gray-1 rounded-md flex justify-center items-center'>
                                <img src={CartItem.itemImg} alt={`${CartItem.itemName} image`} className='h-12 w-12' />
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='font-bold text-base'>{CartItem.itemName}</h1>
                                <p className='text-sm '>$  {CartItem.itemPrice} </p>
                            </div>
                        </div>
                        <h1>x{CartItem.itemQty}</h1>
                    </div>
                )}

                <div className='flex flex-col gap-2'>
                    <div className='flex justify-between '>
                        <h1 className='text-h6 font-medium text-gray-500' >TOTAL</h1>
                        <p className='pointer-cursor text-h6 font-bold   '>$ {GlobalTotal}</p>
                    </div>
                    <div className='flex justify-between '>
                        <h1 className='text-h6 font-medium text-gray-500' >SHIPPING</h1>
                        <p className='pointer-cursor text-h6 font-bold   '>$ 50</p>
                    </div>
                    <div className='flex justify-between '>
                        <h1 className='text-h6 font-medium text-gray-500' >VAT(INCLUDED)</h1>
                        <p className='pointer-cursor text-h6 font-bold   '>$ {Vat.toFixed(0)}</p>
                    </div>
                    <div className='flex justify-between pt-4'>
                        <h1 className='text-h6 font-medium text-gray-500' >GRAND TOTAL</h1>
                        <p className='pointer-cursor text-h6 font-bold text-orange  '>$ {GlobalTotal+50}</p>
                    </div>
                </div>
                <button onClick={()=>setConfirmed(true)} className='w-full h-12 bg-orange hover:bg-accent-orange cursor-pointer text-white '>CONTINUE</button>
            </div>
            

        </>
    )
}

export default Summary
