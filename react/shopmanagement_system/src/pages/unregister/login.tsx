import { ButtonGroup, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import backgroundImage from '../../components/image/12.jpg';
import { ApiHelper } from '../../helper/apihelper';
import { SignInUser, SignedUser } from '../../models/userModels';
import { FuncHelper } from '../../helper/funchelper';
import { useDispatch } from 'react-redux';
import store, { setUser } from '../../components/redux/store';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2'
import { motion } from 'framer-motion';

class ErrorMessage {

    pwd: boolean = false;
    email: boolean = false;
}

export default function Login(props: {
    isRegister: () => void
}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [errorDisplay,] = useState<ErrorMessage>(new ErrorMessage())
    const [LoginUser, setLoginUser] = useState<SignInUser>(new SignInUser());
    const [sign, setSignIn] = useState<boolean>(false);
    const LoginFunc = async () => {
        try {
            errorDisplay.email = FuncHelper.validateInputError(LoginUser.email) || !FuncHelper.validateEmail(LoginUser.email)
            errorDisplay.pwd = FuncHelper.validateInputError(LoginUser.password)
            let error = errorDisplay.email || errorDisplay.pwd;
            console.log(LoginUser);
            if (error === false) {
                ApiHelper.AsyncValidateUser(LoginUser).then((result) => {


                    if (result.status === 'success') {

                        setLoginUser(new SignInUser())
                        dispatch(setUser(result.user));
                        navigate('/home')
                    } else {
                        Swal.fire('登入失敗', result.message, "error");
                    }
                });
            } else {
                setSignIn(false)
            }

            console.log(store.getState().user)
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


            <motion.div className=" h-full w-full  text-center space-y-8 flex flex-col justify-center content-center "
                initial={{
                    x: "100vh", // Start below the viewport
                    opacity: 0, // Hidden initially
                    rotate: 1.9
                }}
                animate={{
                    x: 0, // Move to the desired position
                    opacity: 1, // Fade in
                    position: "relative",
                    transitionEnd: {
                        display: "flex",
                    },
                    rotate: 0
                }}
                transition={{
                    duration: 2, // Duration in seconds
                }}>
                <div className="Logo  w-full flex justify-center"

                >
                    {/* <img className='w-72 h-72' src={backgroundImage} /> */}
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
                            setLoginUser({ ...LoginUser, email: e.target.value })
                            console.log(LoginUser.email)
                        }}
                        value={LoginUser.email}
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

                            setLoginUser({ ...LoginUser, password: e.target.value })
                        }}
                        value={LoginUser.password}
                        variant="standard"
                    />
                </div>

                <div className='btn space-x-5   '>

                    <button className=' h-20 text-xl hover:text-2xl  hover:text-slate-700 w-1/4 border-2 rounded-md  border-zinc-950 justify-center' onClick={() => {
                        setSignIn(!sign)


                    }} >登入</button>



                </div>
                <div className=''>
                    <button className='p-2 justify-end' onClick={props.isRegister} >註冊</button>
                </div>

            </motion.div>
        </div>
    )
}   