import React, { useState } from 'react'
import BlogTabs from '../components/tabs/blogtabs'
import { Button } from '@mui/material'
import CreateBlogModal from '../components/Modal/createblogmodal'

export default function Blog() {


    function BlogRankList() {
        return (<div className='max-md:hidden bg-slate-400'>
            list
        </div>)
    }


    function Blogs() {
        return (<div className='col-span-4 max-lg:col-span-3  rounded-md w-full h-fit bg-orange-400 pt-6 pl-16 pr-16'>
            {/* <div className=' relative w-full h-52  bg-cover ' style={{ backgroundImage: 'url(https://picsum.photos/1920/1080)' }}>
                <div className=' absolute w-full  f-full  bottom-0'>
                    sdsd
                </div>
            </div> */}
            <div className=''>
                <BlogTabs />

            </div>

        </div>)
    }



    function Underknow() {
        const [modal, setModal] = useState<boolean>(false);
        return (<div className='max-lg:hidden bg-red-200 pt-5 text-center'>
            <Button variant='outlined' onClick={() => { setModal(true) }}> 發表文章</Button>
            <CreateBlogModal open={modal} setOpen={() => setModal(false)} />
        </div>)
    }






    return (<div className='w-full h-screen flex justify-center pt-4 '>
        <div className='w-4/5  space-x-2  '>

            <div className=' grid grid-cols-6 grid-flow-col gap-4'>
                {BlogRankList()}
                {Blogs()}
                {Underknow()}
            </div>
        </div>

    </div>)
} 