import { ButtonGroup, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ApiHelper } from '../../helper/apihelper'
import { FuncHelper } from '../../helper/funchelper'
import { SignUpUser } from '../../models/userModels'
import Swal from 'sweetalert2'
import { motion } from 'framer-motion'

class ErrorMessage {
    name: boolean = false;
    pwd: boolean = false;
    email: boolean = false;
}

export default function Register(props: {
    Registered: () => void
}) {


    const [errorDisplay,] = useState<ErrorMessage>(new ErrorMessage())
    const [user_info, setUserInfo] = useState<SignUpUser>(new SignUpUser());
    const [register, setRegister] = useState<boolean>(false)
    const UserRegister = async () => {
        let error: Boolean = false
        try {
            errorDisplay.email = FuncHelper.validateInputError(user_info.email) || !FuncHelper.validateEmail(user_info.email)

            errorDisplay.name = FuncHelper.validateInputError(user_info.username)
            errorDisplay.pwd = FuncHelper.validateInputError(user_info.password)

            let error = errorDisplay.email || errorDisplay.pwd || errorDisplay.name;

            if (error === false) {

                ApiHelper.AsyncUserCreate(user_info).then((res) => {
                    if (res.error) {
                        Swal.fire('登入失敗', res.message, "error");
                    } else {
                        Swal.fire(res.message)
                        setUserInfo(new SignUpUser())
                        props.Registered()
                    }
                })
            } else {
                setRegister(false)
            }
        } catch (err) {
            console.log(error)
        }

    }
    useEffect(() => {
        if (register) {
            UserRegister();
        }
    }, [register]);




    return (
        <div className=" h-dvh w-full  rounded-lg  drop-shadow-2xl shadow-inner shadow-gray-900 backdrop-blur-md  bg-white/50 ">
            <motion.div className=" h-full w-full  text-center space-y-8 flex flex-col justify-center content-center "
                initial={{
                    x: 0, // Start below the viewport
                    opacity: 0, // Hidden initially
                    rotate: 4
                }}
                animate={{
                    x: 10, // Move to the desired position
                    opacity: 1, // Fade in
                    position: "relative",
                    transitionEnd: {
                        display: "flex",
                    },
                    rotate: 0
                }}
                transition={{
                    duration: 0.5, // Duration in seconds
                }}

            >
                <div className="Logo">

                </div>
                <div className='text-xl'>
                    註冊帳號
                </div>
                <div className="">
                    <TextField
                        className='w-1/2'
                        error={errorDisplay.name}
                        autoFocus={true}
                        id="standard-required"
                        label="名字"
                        helperText={errorDisplay.name ? '請輸入名字' : ''}
                        onChange={(e) => {

                            setUserInfo({ ...user_info, username: e.target.value })


                        }}
                        value={user_info.username}
                        variant="standard"
                    />
                </div>
                <div className="">
                    <TextField
                        type='email'
                        className='w-1/2'
                        error={errorDisplay.email}

                        helperText={errorDisplay.email ? '請輸入包括@的關鍵字' : ''}
                        autoFocus={true}
                        onChange={(e) => {
                            setUserInfo({ ...user_info, email: e.target.value })

                        }}
                        value={user_info.email}
                        id="standard-required"
                        label="電郵Email"
                        variant="standard"
                    />
                </div>
                <div className=''>
                    <TextField
                        className='w-1/2'

                        error={errorDisplay.pwd}
                        helperText={errorDisplay.pwd ? '請輸入密碼' : ''}
                        id="standard-required"
                        label="密碼"
                        onChange={(e) => {

                            setUserInfo({ ...user_info, password: e.target.value })

                        }}
                        value={user_info.password}
                        variant="standard"
                    />
                </div>

                <div className='btn'>
                    <ButtonGroup size="large" aria-label="Large button group">

                        <button className='p-2' onClick={(e) => { setRegister(!register) }} >註冊</button>

                    </ButtonGroup>

                </div>
                <div className=''>

                </div>
            </motion.div>
        </div >
    )
}