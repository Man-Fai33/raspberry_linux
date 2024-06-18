import { ButtonGroup, TextField } from '@mui/material'
import React from 'react'

export default function Register(props: {
    Registered: () => void
}) {
    return (
        <div className=" h-dvh w-full  rounded-lg  drop-shadow-2xl shadow-inner shadow-gray-900 backdrop-blur-md  bg-white/60 ">
            <div className=" h-full w-full  text-center space-y-8 flex flex-col justify-center content-center ">
                <div className="Logo">

                </div>
                <div className='text-xl'>
                    註冊帳號
                </div>
                <div className="">
                    <TextField
                        className='w-1/2'
                        error={false}
                        required
                        helperText={''}
                        autoFocus={true}
                        id="standard-required"
                        label="名字"

                        variant="standard"
                    />
                </div>
                <div className="">
                    <TextField
                        className='w-1/2'
                        error={false}
                        required
                        helperText={''}
                        autoFocus={true}
                        id="standard-required"
                        label="帳號/Email"
                        variant="standard"
                    />
                </div>
                <div className=''>
                    <TextField
                        className='w-1/2'
                        required
                        helperText={''}
                        id="standard-required"
                        label="密碼"
                        variant="standard"
                    />
                </div>
                <div className=''>
                    <TextField
                        className='w-1/2'
                        required
                        helperText={''}
                        id="standard-required"
                        label="密碼2"
                        variant="standard"
                    />
                </div>
                <div className='btn'>
                    <ButtonGroup size="large" aria-label="Large button group">

                        <button className='p-2' onClick={props.Registered} >註冊</button>

                    </ButtonGroup>

                </div>
                <div className=''>

                </div>
            </div>
        </div>
    )
}