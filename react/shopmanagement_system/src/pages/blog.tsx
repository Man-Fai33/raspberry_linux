import React from 'react'
import BlogTabs from '../components/tabs/blogtabs'
export default function Blog() {


    function BlogRankList() {
        return (<div className='max-md:hidden bg-slate-400'>
            list
        </div>)
    }


    function Blogs() {
        return (<div className='col-span-2 max-lg:col-span-3  rounded-md w-full h-fit bg-orange-400 pt-6 pl-16 pr-16'>
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



    function underknow() {
        return (<div className='max-lg:hidden bg-red-200'>??
        </div>)
    }






    return (<div className='w-full h-screen flex justify-center pt-4 '>
        <div className='  w-4/5  space-x-2  '>

            <div className=' grid grid-cols-4 grid-flow-col gap-4'>
                {BlogRankList()}
                {Blogs()}
                {underknow()}
            </div>
        </div>

    </div>)
} 