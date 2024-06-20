import { ButtonGroup, TextField } from '@mui/material'
import React, { useState } from 'react'
import { ApiHelper } from '../../helper/apihelper'
import { FuncHelper } from '../../helper/funchelper';

class RegisterUser {
    username: string = '';
    password: string = '';
    email: string = '';
}
class ErrorMessage {
    nameerror: boolean = false;
    pwderror: boolean = false;
    emailerror: boolean = false;
}

export default function Register(props: {
    Registered: () => void
}) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const [errorDisplay,] = useState<ErrorMessage>(new ErrorMessage())
    const [user_info,] = useState<RegisterUser>(new RegisterUser());
    const UserRegister = async () => {
        let user = ({
            username: user_info.username,
            password: user_info.password,
            email: user_info.email,
        })
        alert(JSON.stringify(user));
        let response = ApiHelper.AsyncUserCreate(user)
        console.log(response)
    }
    return (
        <div className=" h-dvh w-full  rounded-lg  drop-shadow-2xl shadow-inner shadow-gray-900 backdrop-blur-md  bg-white/50 ">
            <div className=" h-full w-full  text-center space-y-8 flex flex-col justify-center content-center ">
                <div className="Logo">

                </div>
                <div className='text-xl'>
                    註冊帳號
                </div>
                <div className="">
                    <TextField
                        className='w-1/2'
                        error={errorDisplay.nameerror}

                        helperText={''}
                        autoFocus={true}
                        id="standard-required"
                        label="名字"

                        onChange={(e) => {
                            user_info.username = e.target.value
                            if (!FuncHelper.trimSpace(user_info.username) && e.target.value.length > 0) {
                                errorDisplay.nameerror = false

                            } else {
                                errorDisplay.nameerror = true
                            }

                        }}
                        variant="standard"
                    />
                </div>
                <div className="">
                    <TextField
                        type='email'
                        className='w-1/2'
                        error={errorDisplay.emailerror}

                        helperText={errorDisplay.emailerror ? 'Invalid email address' : ''}
                        autoFocus={true}
                        onChange={(e) => {
                            user_info.email = e.target.value
                            if (!FuncHelper.trimSpace(e.target.value) && e.target.value.length > 0) {
                                errorDisplay.nameerror = false
                            } else {
                                errorDisplay.nameerror = true
                            }

                        }}

                        id="standard-required"
                        label="Email"
                        variant="standard"
                    />
                </div>
                <div className=''>
                    <TextField
                        className='w-1/2'

                        error={errorDisplay.pwderror}
                        helperText={''}
                        id="standard-required"
                        label="密碼"
                        onChange={(e) => {
                            user_info.password = e.target.value
                        }}
                        variant="standard"
                    />
                </div>

                <div className='btn'>
                    <ButtonGroup size="large" aria-label="Large button group">

                        <button className='p-2' onClick={UserRegister} >註冊</button>

                    </ButtonGroup>

                </div>
                <div className=''>

                </div>
            </div>
        </div >
    )
}