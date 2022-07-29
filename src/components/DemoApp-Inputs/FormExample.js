import React from 'react'

export default function FormExample() {
    return (
        <div className='w-full max-w-xs'>
            <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 '>
                <div className='mb-4'>
                    <label  className='block text-gray-800 text-sm font-bold mb-4' htmlFor='userName'>Kullanıcı Adı </label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 focus:outline-none focus:shadow-violet-600' />
                </div>
            </form>
        </div>
    )
}
