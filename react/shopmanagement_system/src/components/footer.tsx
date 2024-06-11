import { Divider } from '@mui/material'
import React from 'react'
export default function Footer() {
    return (
        <footer className='font-sans  w-full text-center pt-3 pb-3 bg-black text-white  h-auto text-sm  hover:text-md   ' >
            <div className='w-full col-span-1 '>
                <div>
                    名字：張文輝
                    電話：0965347203
                    電郵：cheungmanfai330@gmail.com
                </div>
                <div className='text-white'>
                    <Divider />
                </div>
                <div>
                    copyright ©  created by 張文輝（Cheung Man Fai）
                </div>
            </div>

        </footer >
    )
}