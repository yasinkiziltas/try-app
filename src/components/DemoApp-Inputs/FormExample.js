import React, { useState } from 'react'
import { LOGO } from '../constants/index'

export default function FormExample() {
    const [formState, setFormState] = useState([
        {
            field: 'userName',
            hasError: false,
            label: 'Kullanıcı Adı',
            isRequired: true,
            value: "",
        },
        {
            type: 'password',
            field: 'userPassword',
            hasError: false,
            label: 'Şifre',
            isRequired: true,
            value: "",
        }
    ])

    const [formModel, setFormModel] = useState({
        userName: "",
        userPassword: ""
    })

    const [formErrorModel, setFormErrorModel] = useState({
        userName: false,
        userPassword: false
    })

    const onChange = (value, field) => {
        const stateCopy = [...formState]
        const findedIndex = formState.findIndex((item) => item.field === field)
        stateCopy[findedIndex].value = value;
        setFormState(stateCopy)
    }

    const formValidation = (e) => {
        e.preventDefault()
        const stateCopy = [...formState]
        const newArray = stateCopy.map((item) => {
            if (item.isRequired && item.value.trim() === "") {
                return {
                    ...item,
                    hasError: true
                }
            }
            return {
                ...item,
                hasError: false
            }
        })
        setFormState(newArray)
        const isExistError = newArray.filter((item) => item.hasError)
        if (isExistError.length > 0) {
            alert("Form hatalı!")
        }
        sendFormRequest()
    }

    const sendFormRequest = () => {
        setTimeout(() => {
            alert('Giriş Başarılı!')
        }, 2000);
    }

    return (
        <div className='w-full h-screen bg-[#2F4F4F] flex items-center justify-center'>
            <div className='w-full max-w-xs'>
                <img src={LOGO} width={250} height={250} className='mb-8 ml-6' />

                <form onSubmit={formValidation} className='bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 '>
                    {formState.map((item) => {
                        return (
                            <div className='mb-4' key={item.field}>
                                <label className='block text-gray-800 text-sm font-bold mb-4'
                                    htmlFor="userName"> {item.label} {item.isRequired && <span className='text-red-500 font-bold'>*</span>}</label>
                                <input
                                    type={item.type ? item.type : "text"}
                                    placeholder={item.label}
                                    value={item.value}
                                    onChange={(e) => {
                                        onChange(e.target.value, item.field)
                                    }}
                                    name={item.field}
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 focus:outline-none focus:shadow-violet-600'
                                />
                                {item.hasError && <p className='text-red-600 font-bold text-xs ml-3 mt-2 italic'>*{item.label} zorunludur.</p>}

                            </div>
                        )
                    })}


                    <button
                        onClick={() => { }}
                        className='flex justify-center rounded bg-blue-200 hover:bg-blue-500 w-full border border-blue-500 px-4 py-2 text-black font-bold '>
                        Gönder
                    </button>
                </form>
            </div>
        </div>
    )
}
