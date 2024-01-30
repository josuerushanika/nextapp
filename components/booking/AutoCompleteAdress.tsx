import React from 'react'

function AutoCompleteAdress() {
    return (
        <>
            <div className='mt-5'>
                <div>
                    <label className='text-gray-400'>  Where from  </label>
                    <input type="text" className='bg-white p-1 border-[1px] w-full rounded-md outline-none' />

                </div>
            </div>

            <div className='mt-3'>
                <div>
                    <label className='text-gray-400'>  Where To  </label>
                    <input type="text" className='bg-white p-1 border-[1px] w-full rounded-md outline-none' />

                </div>
            </div>
        </>
    )
}

export default AutoCompleteAdress