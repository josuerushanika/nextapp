import React from 'react'
import AutoCompleteAdress from './AutoCompleteAdress'

function Booking() {
    return (
        <div className='p-5'>
            <h2 className='text-[20px] font-semibold'>Booking</h2>
            <div className='border-[1px] p-5 rounded-md'>
                <AutoCompleteAdress />
            </div>
        </div>
    )
}

export default Booking