import React, { useState } from 'react';
import Footer from '../components/footer';
import backgroundImage from '../components/image/background.jpeg'; // Adjust the path as necessary
import icon from '../components/image/12.jpg';
import { Avatar, Box, Button, Divider, IconButton, Stack } from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import SkillProgress from '../components/progress/skillprogress';
import ProjectCard from '../components/card/projectcard';
import SkillSwitchTabs from '../components/tabs/skilltabs';


export default function Index() {
    const [personalProfileDisplay, setPersonalProfileDisplay] = useState(false);



    return (
        <div className='relative h-fit'>
            <div className='relative h-dvh bg-cover'

            //  style={{ backgroundImage: `url(${backgroundImage})` }}  
            >

                <div className='absolute  w-full top-1/2'>
                    <div className=' flex justify-center content-center '>
                        <button className='outline-1' onClick={() => { }}>    <div className='pt-3 pb-3 pl-8 pr-8 tracking-wide rounded-lg font-mono bg-gradient-to-r from-cyan-500 to-blue-500 text-3xl font-medium text-white shadow-lg' >登入</div></button>
                    </div>
                </div>
                <div className='absolute bottom-0 w-full text-center   space-y-2'>
                    <div className='text-2xl'>
                        關於我
                    </div>
                    <button className='animate-bounce shadow-2xl' onClick={() => {
                        setPersonalProfileDisplay(!personalProfileDisplay)
                    }}>
                        <KeyboardDoubleArrowDownIcon sx={{ fontSize: 50 }} />
                        <KeyboardDoubleArrowDownIcon sx={{ fontSize: 50 }} />
                        <KeyboardDoubleArrowDownIcon sx={{ fontSize: 50 }} />
                    </button>
                </div>
            </div>




            {personalProfileDisplay ?
                <>
                    <div className=" relative h-dvh w-full bg-scroll grid grid-cols-6 gap-4" >
                        <div className=' relative col-span-4 flex p-72 p '
                        // style={{ backgroundImage: `url(${backgroundImage})` }}
                        >
                            <div className='text-5xl font-mono  content-center w-full space-y-5'>
                                張文輝
                                <br />
                                Cheung Man Fai
                                <div className='text-xl font-mono subpixel-antialiased  italic p-5 '>
                                    軟體工程師、前後端工程師、數據庫工程師
                                </div>
                            </div>

                        </div>
                        <div className="col-span-2 flex justify-center flex-col space-y-8    justify-self-center ">

                            <Avatar alt="Remy Sharp" src={icon} sx={{ width: 200, height: 200 }} />
                            <div className="">
                                張文輝<br />
                                Cheung Man Fai
                            </div>
                            <div className=''>
                                基本聯絡方式
                            </div>
                            <div className=''>
                                專業
                            </div>
                            <div className=' flex  space-x-5'>
                                <IconButton aria-label="Facebook" onClick={() => { alert("fb") }}><FacebookIcon fontSize="large" /></IconButton>
                                <Divider orientation="vertical" variant="middle" flexItem />
                                <IconButton aria-label="LinkedIn" onClick={() => { alert("linkin") }} ><LinkedInIcon fontSize="large" /></IconButton>
                                <Divider orientation="vertical" variant="middle" flexItem />
                                <IconButton aria-label="Email" onClick={() => { alert("cheungmanfai330@gmail.com") }} ><EmailIcon fontSize="large" /></IconButton>
                            </div>
                            <div className='text-center'>
                                <button className='bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-lg text-white  font-mono text-md font-normal hover:underline underline-offset-8 indent-0.5'
                                    onClick={() => { alert("文件") }}
                                > 履歷文件</button>
                            </div>
                        </div>
                    </div>
                    <Divider />
                    <div className='h-auto w-full  pl-80 pr-80  '>
                        <div className='h-dvh bg-slate-400 bg-scroll overflow-y-auto  '>
                            <div className='target font-mono '>

                            </div>
                            <div className=''>


                            </div>
                            <div className='mybackground'>

                            </div>
                        </div>
                        <div className='h-dvh bg-slate-400'>
                            <div className=' grid grid-flow-row  gap-4'>
                                <div>
                                    教育
                                </div>
                                <div>
                                    工作
                                </div>
                                <div className=''>
                                    工作經驗
                                </div>

                            </div>
                        </div>
                        <div className='h-dvh bg-slate-400 overflow-x-auto'>
                            <div className='text-6xl'>  我的技能</div>

                            <SkillSwitchTabs />



                        </div>
                        <div className='h-dvh w-full bg-slate-400 p-5 space-y-4  overflow-hidden'>
                            <div className='text-5xl'>
                                處理的項目
                            </div>
                            <div className=' relative overflow-x-auto pt-10 pb-10'>
                                <div className='flex flex-nowrap relative  w-full gap-5'>
                                    <ProjectCard photo={''} info={''} link={''} />
                                    <ProjectCard photo={''} info={''} link={''} />
                                    <ProjectCard photo={''} info={''} link={''} />
                                    <ProjectCard photo={''} info={''} link={''} />
                                    <ProjectCard photo={''} info={''} link={''} />
                                </div>
                            </div>

                        </div>
                    </div>
                    <Footer />
                </>

                : <></>
            }

        </div >

    );
}
