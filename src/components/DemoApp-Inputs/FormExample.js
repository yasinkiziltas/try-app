import React, { useState } from 'react'
import { LOGO } from '../constants/index'


export default function FormExample() {
    const [formModel, setFormModel] = useState({
        userName: "",
        userPassword: ""
    })
    const [formErrorModel, setFormErrorModel] = useState({
        userName: false,
        userPassword: false
    })

    const onChange = (value, field) => {
        setFormModel({ ...formModel, [field]: value })
    }

    const formValidation = (e) => {
        e.preventDefault()
        const obj = {
            userName: formModel.userName.trim() === "",
            userPassword: formModel.userPassword.trim() === ""
        }
        setFormErrorModel(obj)
        if (Object.values(obj).includes(true)) {
            alert("Hata Mevcut!")
            return;
        }
        sendFormRequeest()
    }

    const sendFormRequeest = () => {
        setTimeout(() => {
            alert('Giriş Başarılı!')
        }, 2000);
    }

    return (
        <div className='w-full h-screen bg-[#2F4F4F] flex items-center justify-center'>
            <div className='w-full max-w-xs'>
                <img src={LOGO} width={250} height={250} className='mb-8 ml-6' />

                <form onSubmit={formValidation} className='bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 '>
                    <div className='mb-4'>
                        <label className='block text-gray-800 text-sm font-bold mb-4'
                            htmlFor='userName'>Kullanıcı Adı </label>
                        <input
                            placeholder='Kullanıcı Adı..'
                            value={formModel.userName}
                            onChange={(e) => {
                                onChange(e.target.value, 'userName')
                            }}
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 focus:outline-none focus:shadow-violet-600'
                        />
                        {formErrorModel.userName && <p className='text-red-600 font-bold text-xs ml-3 mt-2 italic'>*Bu alan zorunludur</p>}
                    </div>

                    <div className='mb-4'>
                        <label
                            className='block text-gray-800 text-sm font-bold mb-4'
                            htmlFor='password'>Parola </label>
                        <input
                            onChange={(e) => {
                                onChange(e.target.value, 'userPassword')
                            }}
                            type={"password"}
                            value={formModel.userPassword} placeholder="***********"
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 focus:outline-none focus:shadow-violet-600'
                        />
                        {formErrorModel.userPassword && <p className='text-red-600 font-bold text-xs ml-3 mt-2 italic'>*Bu alan zorunludur</p>}
                    </div>

                    <div className='mb-4 justify-center flex'>
                        <button
                            type="submit"
                            onClick={() => { }}
                            className={`bg-blue-500 rounded hover:bg-blue-600 text-white font-normal w-full`}
                        >Gönder</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
