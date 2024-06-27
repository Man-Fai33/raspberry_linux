import React, { useEffect, useRef, useState } from 'react';
import Footer from '../components/footer';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import icon from '../components/image/12.jpg';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Avatar, Box, Button, Divider, IconButton, List, ListItemIcon, ListItemText, Stack } from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import ProjectCard from '../components/card/projectcard';
import SkillSwitchTabs from '../components/tabs/skilltabs';
import { Work, School } from '@mui/icons-material';
import ProjectModal from '../components/Modal/projectmodal';
import { CV, Project } from '../models/cvModels';
import Login from './unregister/login';
import Register from './unregister/register';
import { ApiHelper } from '../helper/apihelper';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { RootState } from '../components/redux/store';
import { SignedUser } from '../models/userModels';
import { motion, useScroll, useTransform } from "framer-motion";
import bg_name from "../components/image/background_name.jpg"
import bg_index from "../components/image/bg_index.jpeg"
export default function Index() {
    const [personalProfileDisplay, setPersonalProfileDisplay] = useState(false);
    const [modaldisable, setModaldisable] = useState(false)
    const [modaldata, setModaldata] = useState<Project | null>(null);
    const [login, setLogin] = useState(false)
    const [register, setRegister] = useState(false)
    const navigator = useNavigate()
    const user: SignedUser = useSelector((state: RootState) => state.user)

    const [cv, setCv] = useState<CV | null>(null);
    useEffect(() => {
        if (user.token !== '') {
            navigator(-1)
        }
    }, [])

    const getCv = async () => {
        try {
            await ApiHelper.AsyncCV().then((response) => {
                setCv(response)
            })
        } catch (error) {
            console.error('Error fetching CV:', error);
        }
    };
    useEffect(() => {
        getCv();
    }, []);



    return (
        <div className='relative h-full '>
            <div className=' relative  h-dvh   bg-no-repeat bg-cover w-full   '

                style={{ backgroundImage: `url(${bg_index})` }}
                // style={{ backgroundImage: ` url(https://picsum.photos/2560/1440)` }}
            >

                <div className=' relative  w-full h-dvh '>
                    <div className=' relative flex h-full    ' >
                        <div className={`${login ? 'w-full' : 'w-full'} h-full top-1/2  text-center  items-center  content-center`}>

                            <button className=' animate-pulse pt-3 pb-3 pl-8 pr-8 tracking-wide font-mono bg-gradient-to-r from-cyan-500 to-blue-500 text-3xl font-medium rounded-2xl text-white shadow-lg space-x-8'
                                onClick={() => {
                                    setLogin(!login)
                                    setRegister(false)
                                }}> 登入</button>
                        </div>
                        <div className={` w-full  h-full  z-50   left-1/2  ${login ? '  flex' : ' hidden'}`}>
                            {login ? <Login isRegister={() => {
                                setRegister(!register)
                                setLogin(false)
                            }} /> : <></>}

                        </div>
                        <div className={` w-full h-full  z-50  left-1/2 ${register ? '  flex' : '  hidden'}`}>
                            {register ? <Register Registered={() => {
                                setRegister(!register)
                            }} /> : <></>}
                        </div>
                    </div>
                </div>

                <div className='absolute bottom-0 w-full text-center space-y-2'>
                    <div className='text-2xl'>
                        關於我
                    </div>
                    <button className='animate-bounce shadow-2xl' onClick={() => {
                        setPersonalProfileDisplay(!personalProfileDisplay)
                        setRegister(false)
                        setLogin(false)
                    }}>
                        <KeyboardDoubleArrowDownIcon sx={{ fontSize: 50 }} />
                        <KeyboardDoubleArrowDownIcon sx={{ fontSize: 50 }} />
                        <KeyboardDoubleArrowDownIcon sx={{ fontSize: 50 }} />
                    </button>
                </div>
            </div>




            {
                personalProfileDisplay ?
                    <div className=''>
                        <div className=" relative h-dvh w-full bg-scroll grid grid-cols-6 gap-4    max-lg:grid-cols-1  max-lg:gap-0   justify-self-center bg-cover  "
                            style={{ backgroundImage: `url(${bg_name})` }}
                        >
                            <div className='relative col-span-4 flex p-72 max-2xl:p-40  max-xl:p-20 max-md:p-0'

                            >
                                <div className='text-5xl font-mono  content-center w-full space-y-5  max-lg:text-2xl max-lg:text-center  '>
                                    {cv?.username}
                                    <br />
                                    {cv?.englishname}
                                    <div className='text-xl font-mono subpixel-antialiased  italic p-5 '>
                                        {cv?.professional}
                                    </div>
                                </div>

                            </div>
                            <div className="col-span-2 flex justify-center flex-col space-y-8  max-lg:space-y-4 max-md:space-y-1  justify-self-center   bg-white/60 w-full rounded-md shadow-xl  shadow-inner  ">

                                <div className=' relative flex justify-center'>
                                    <Avatar alt="Remy Sharp" src={icon} sx={{ width: 200, height: 200 }} />
                                </div>
                                <div className="text-center">
                                    {cv?.username}<br />
                                    {cv?.englishname}
                                </div>
                                <div className=' text-center'>
                                    {
                                        cv?.email
                                    }
                                </div>
                                <div className='text-center'>
                                    {cv?.professional}
                                </div>
                                <div className=' flex  space-x-5 justify-center'>
                                    <IconButton aria-label="LinkedIn" onClick={() => {
                                        window.location.href = cv?.link[0].link || "";
                                    }} ><LinkedInIcon fontSize="large" /></IconButton>
                                    <Divider orientation="vertical" variant="middle" flexItem />
                                    <IconButton aria-label="Github" onClick={() => { window.location.href = cv?.link[1].link || "" }}><GitHubIcon fontSize="large" /></IconButton>
                                    <Divider orientation="vertical" variant="middle" flexItem />
                                    <IconButton aria-label="Facebook" onClick={() => { window.location.href = cv?.link[2].link || "" }}><FacebookIcon fontSize="large" /></IconButton>
                                    < Divider orientation="vertical" variant="middle" flexItem />
                                    <IconButton aria-label="Email" onClick={() => { alert(cv?.link[3].link) }} ><EmailIcon fontSize="large" /></IconButton>
                                </div>
                                <div className='text-center'>
                                    <button className='bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-lg text-white  font-mono text-md font-normal hover:underline underline-offset-8 indent-0.5'
                                        onClick={() => { alert("文件") }}
                                    > 履歷文件</button>
                                </div>
                            </div>
                        </div>

                        <div className='h-auto w-full  space-y-8 pl-80 pr-80  max-lg:pr-0 max-lg:pl-0  max-xl:pl-20 max-xl:pr-20 '>
                            <div className='h-fit  bg-scroll overflow-y-auto touch-pan-y space-y-10   max-md:space-y-6 p-5  pb-10 pt-10 max-lg:pt-2 '>
                                <div className='intro font-mono '>
                                    <div className=' static top-0 float-left pt-2 pr-4  text-2xl underline  underline-offset-8'> 自我介紹</div>
                                    <div className='text-xl max-lg:text-md max-md:text-sm tracking-wide text-justify'>
                                        {cv?.introduction}
                                    </div>
                                </div>
                                <div className='futureplane'>
                                    <div className='float-left pt-2 pr-4 text-2xl underline underline-offset-8 shadow-md'  > 未來計畫</div>
                                    <div className='text-xl max-lg:text-md max-md:text-sm tracking-wide text-justify'>
                                        {cv?.futureplan}
                                    </div>
                                </div>
                                <div className='mybackground'>
                                    <div className='float-left pt-2 pr-4 text-2xl underline underline-offset-8'> 我的背景</div>
                                    <div className='text-xl max-lg:text-md max-md:text-sm tracking-wide text-justify' >
                                        {cv?.background}
                                    </div>
                                </div>
                            </div>
                            <div className='h-fit    flex-wrap p-5  overflow-y-scroll touch-pan-y space-y-4 '>

                                <div className='flex  flex-row max-xl:flex-col  max-xl:space-y-4  h-fit max-xl:h-fit '>
                                    <div className='flex-none  w-1/2 max-xl:w-fit '>
                                        <div className='text-3xl max-xl:text-base '>教育 education</div>
                                        <div className='text-base text-left font-sans tracking-normal text-ellipsis max-lg:text-sm'>
                                            <List>
                                                {cv?.education.map((value, index) => (<div key={index} >
                                                    <div className='text-xl max-lg:text-base' >{value.year}</div>
                                                    <div className='flex flex-row'>
                                                        <ListItemIcon>
                                                            <School fontSize='medium' />
                                                        </ListItemIcon>
                                                        <ListItemText className='text-xl max-lg:text-md max-md:text-sm tracking-wide text-justify' primary={value.school} />
                                                    </div>
                                                </div>))}

                                            </List>
                                        </div>
                                    </div>
                                    <div className='flex-none w-1/2 max-xl:w-fit '>
                                        <div className='text-3xl max-xl:text-base'>工作 worker</div>
                                        <div className='text-base text-left font-sans tracking-normal text-ellipsis max-xl:text-sm'>

                                            <List>
                                                {cv?.work.map((value, index) => (<div key={index}>
                                                    <div className='text-xl max-lg:text-base' >{value.duration} - {value.position}  </div>
                                                    <div className='flex flex-row'>
                                                        <ListItemIcon>
                                                            <Work fontSize='medium' />
                                                        </ListItemIcon>
                                                        <ListItemText className='text-xl max-lg:text-md max-md:text-sm tracking-wide text-justify' primary={value.company} />
                                                    </div>
                                                </div>))}
                                            </List>
                                        </div>
                                    </div>
                                </div>
                                <div className=' space-y-3 space-x-3  '>
                                    <div className='float-left  text-2xl pt-2 pr-2 max-md:text-lg max-md:pt-4'>工作經驗</div>
                                    <div className='text-xl max-lg:text-md max-md:text-sm tracking-wide text-justify   '>
                                        {cv?.workexperienced}
                                    </div>
                                </div>

                            </div>
                            <div className='h-dvh  relative overflow-y-auto p-4 touch-pan-y'>
                                <div className=' static top-0 text-3xl pl-2'> 我的技能</div>
                                <div className='p-2 max-md:p-1 pt-6'>
                                    <SkillSwitchTabs data={cv?.technology} />
                                </div>


                            </div>
                            <div className='h-fit relative w-full   p-5 max-md:p-2 space-y-4  overflow-hidden'>
                                <div className=' static top-0 text-3xl'>
                                    處理的項目
                                </div>
                                <div className='relative  flex justify-center content-center items-center h-full  overflow-x-auto pt-10 pb-10'>
                                    <div className='flex flex-nowrap relative  w-full gap-5'>
                                        {cv?.project.map((value, index) => (
                                            <ProjectCard key={index} title={value.title} photo={value.photo} description={value.description} year={value.year} link={''} onclick={() => {
                                                setModaldata(value)
                                                setModaldisable(true);
                                            }} />
                                        ))}
                                    </div>
                                    <ProjectModal data={modaldata} disable={modaldisable} onclick={() => { setModaldisable(!modaldisable) }} />
                                </div>
                            </div>
                        </div >
                        <Footer />
                    </div>

                    : <></>
            }

        </div >

    );
}
