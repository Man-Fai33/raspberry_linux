import { ButtonGroup, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import backgroundImage from '../../components/image/12.jpg';
import { ApiHelper } from '../../helper/apihelper';
import { SignInUser } from '../../models/userModels';
import { FuncHelper } from '../../helper/funchelper';

class ErrorMessage {

    pwd: boolean = false;
    email: boolean = false;
}

export default function Login(props: {
    isRegister: () => void
}) {
    const [errorDisplay,] = useState<ErrorMessage>(new ErrorMessage())
    const [LoginUser,] = useState<SignInUser>(new SignInUser());
    const [sign, setSignIn] = useState<boolean>(false);
    const LoginFunc = async () => {
        let error: Boolean = false
        try {
            errorDisplay.email = FuncHelper.validateInputError(LoginUser.email) || !FuncHelper.validateEmail(LoginUser.email)
            errorDisplay.pwd = FuncHelper.validateInputError(LoginUser.password)
            let error = errorDisplay.email || errorDisplay.pwd;
            if (error === false) {
                ApiHelper.AsyncValidateUser(LoginUser).then((result) => {


                    console.log(result);
                });
            } else {
                setSignIn(false)
            }
        } catch (err) {

        }
    }

    useEffect(() => {
        if (sign) {
            LoginFunc()
        }
    }, [sign])
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
                        error={errorDisplay.email}
                        className=' w-1/2'
                        helperText={errorDisplay.email ? '請輸入包括@的關鍵字' : ''}
                        autoFocus={true}
                        id="standard-required"
                        label="Email"
                        onChange={(e) => {
                            LoginUser.email = e.target.value
                        }}
                        variant="standard"
                    />
                </div>
                <div className=''>
                    <TextField
                        helperText={errorDisplay.pwd ? '請輸入密碼' : ''}
                        error={errorDisplay.pwd}
                        className=' w-1/2'
                        id="standard-required"
                        label="密碼"
                        onChange={(e) => {
                            LoginUser.password = e.target.value
                        }}
                        variant="standard"
                    />
                </div>

                <div className='btn'>
                    <ButtonGroup size="large" aria-label="Large button group">
                        <button className='p-8 text-xl' onClick={() => { setSignIn(!sign) }} >登入</button>

                    </ButtonGroup>
                </div>

                <div className='' >

                    <button className='p-2' onClick={props.isRegister} >註冊</button>
                </div>
            </div>
        </div>
    )
}   