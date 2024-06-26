import { Accordion, AccordionDetails, AccordionSummary, TextField } from '@mui/material'
import React, { ChangeEvent, useEffect, useState } from 'react'
import icon from '../components/image/12.jpg'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { SignedUser } from '../models/userModels'
import { RootState } from '../components/redux/store'
import Swal from 'sweetalert2'
import { ApiHelper } from '../helper/apihelper'

export default function Account() {
    const user: SignedUser = useSelector((state: RootState) => state.user)

    const [image, setImage] = useState<string | null>(null);

    const [action, setAction] = useState<boolean>(false);


    const handleEditInfo = () => {
        Swal.fire('?', 'sohi', 'success')
    }


    useEffect(() => {
        if (action) {
            handleEditInfo()
        }
    }, [action])

    const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
        let response = await ApiHelper.AsyncUploadImage(image);
        console.log(response);
    }


    return (
        <div className='flex relative  justify-center container mx-auto mt-32'   >
            <motion.div className='  relative  h-fit  w-2/5 bg-slate-500 rounded-lg shadow-2xl shadow-cyan-500/50  justify-center flex  flex-col'
                initial={{
                    y: "100vh",
                    opacity: 0,
                    rotate: 1.9
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                    position: "fixed",
                    transitionEnd: {
                        display: "flex",
                    },
                    rotate: 0
                }}
                transition={{
                    duration: 2,
                }}
            >
                <div className='relative w-full flex justify-center -mt-16'>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="imageUpload"
                    />
                    <label htmlFor="imageUpload" className="cursor-pointer">
                        <img className='rounded-full' src={image || icon} alt="Avatar" style={{ width: 200, height: 200 }} />
                    </label>
                </div>

                <div className='flex justify-center text-xl p-3  text-center '>
                    {user.username}
                    <br />
                    {user.email}
                </div>
                <div className='w-full'>

                    <Accordion>
                        <AccordionSummary
                            aria-controls="panel1-content"
                            id="panel1-header"
                            onClick={() => { setAction(!action) }}
                        >
                            <div className='text-center w-full'>
                                個人資料
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className=' overflow-y-scroll '>
                                <div className='space-y-5 flex-none '>
                                    <TextField label={'權限'} variant="standard" fullWidth disabled={user.role === 'user' ? true : false} />

                                    <TextField label={'名字'} variant="standard" fullWidth />
                                    <TextField label={"密碼"} variant="standard" fullWidth />

                                </div>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>

            </motion.div >
        </div >
    )
}