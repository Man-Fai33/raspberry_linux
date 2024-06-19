import { ButtonGroup, TextField } from '@mui/material'
import React, { useState } from 'react'
import backgroundImage from '../../components/image/12.jpg';
import { ApiHelper } from '../../helper/apihelper';

class LoginForm {
    inputva: string = ""
    password: string = ""
}



export default function Login(props: {
    isRegister: () => void
}) {
    const [LoginUser,] = useState<LoginForm>(new LoginForm());
    const LoginFunc = () => {
        let res = ApiHelper.AsyncValidateUser(LoginUser.inputva, LoginUser.password)
        console.log(res);
    }
    return (
        <div className=" h-dvh w-full  rounded-lg  drop-shadow-2xl shadow-inner shadow-gray-900 backdrop-blur-md  bg-white/50 ">
            <div className=" h-full w-full  text-center space-y-8 flex flex-col justify-center content-center ">
                <div className="Logo  w-full flex justify-center"

                >
                    <img className='w-72 h-72' src={backgroundImage} />
                </div>
                <div className='text-xl'>
                    登入帳號
                </div>

                <div className="">
                    <TextField
                        error={false}
                        required
                        className=' w-1/2'
                        helperText={''}
                        autoFocus={true}
                        id="standard-required"
                        label="名字/Email"
                        onChange={(e) => {
                            LoginUser.inputva = e.target.value
                        }}
                        variant="standard"
                    />
                </div>
                <div className=''>

                    <TextField
                        required
                        className=' w-1/2'
                        id="standard-required"
                        label="密碼"
                        defaultValue="Hello World"
                        onChange={(e) => {
                            LoginUser.password = e.target.value
                        }}
                        variant="standard"
                    />
                </div>
                <div className='btn'>
                    <ButtonGroup size="large" aria-label="Large button group">
                        <button className='p-8 text-xl' onClick={LoginFunc} >登入</button>
                        <button className='p-2' onClick={props.isRegister} >註冊</button>
                    </ButtonGroup>

                </div>
                <div className=''>

                </div>
            </div>
        </div>
    )
}   