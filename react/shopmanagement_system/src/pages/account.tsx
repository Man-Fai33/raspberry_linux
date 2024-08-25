import { Accordion, AccordionDetails, AccordionSummary, TextField } from '@mui/material'
import React, { ChangeEvent, useEffect, useState } from 'react'
import icon from '../components/image/12.jpg'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { SignedUser } from '../models/userModels'
import { RootState } from '../components/redux/store'
import Swal from 'sweetalert2'
import { ApiHelper } from '../helper/apihelper'
import { setUser, updateIconUrl } from '../components/redux/store';



export default function Account() {
    const data: SignedUser = useSelector((state: RootState) => state.user)
    const [user, setUserInfo] = useState<SignedUser>(data)
    const [image, setImage] = useState<string | null>(data.iconUrl);
    const [action, setAction] = useState<boolean>(false);
    const dispatch = useDispatch();
    class UserEdit {
        role: string = user.role;
        username: string = user.username;
        password: string = user.password;
    }
    const [useredit, setUseredit] = useState<UserEdit>(new UserEdit())

    const handleEditInfo = () => {

        ApiHelper.AsyncUserEdit({ ...user, username: useredit.username, password: useredit.password, role: useredit.role }).then((result) => {

            if (result.status !== 'failed') {
                dispatch(setUser({ ...result.user, token: user.token }))
                Swal.fire('更新個人資料', "更新成功", "success")
            } else {
                Swal.fire('更新個人資料', '更新失敗', 'error')
            }
        })

    }

    useEffect(() => {
        setUserInfo(data)
    }, [data, image])

    useEffect(() => {
        if (!action) {
            if (useredit.password !== user.password || useredit.role !== user.role || useredit.username !== user.username) {
                handleEditInfo()
            }
        }
    }, [action])

    const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            let response = await ApiHelper.AsyncUploadImage(file, user._id, "user");
            dispatch(updateIconUrl(response.path))
            setImage(response.path)
        }
    }


    return (
        <div className='flex relative  justify-center container mx-auto mt-32'   >
            <motion.div className='  relative  h-fit  w-2/5 max-xl:w-2/3 max-md:w-5/6  bg-slate-500 rounded-lg shadow-2xl shadow-cyan-500/50  justify-center flex  flex-col'
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
                        accept="image/jpg,image/jpeg,image/png,image/gif"
                        onChange={handleImageUpload}
                        multiple
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
                            onClick={(e) => { setAction(!action) }}
                        >
                            <div className='text-center w-full'>
                                {action ? "提交修改" : "個人資料"}
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className=' overflow-y-scroll '>
                                <div className='space-y-5 flex-none '>
                                    <TextField label={'權限'} variant="standard" value={useredit.role} fullWidth disabled={user.role === 'user' ? true : false} />
                                    <TextField label={'名字'} variant="standard" value={useredit.username} onChange={(e) => { setUseredit({ ...useredit, username: e.target.value }) }} fullWidth />
                                    <TextField label={"密碼"} type='password' variant="standard" value={useredit.password} onChange={(e) => { setUseredit({ ...useredit, password: e.target.value }) }} fullWidth />

                                </div>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>

            </motion.div >
        </div >
    )
}