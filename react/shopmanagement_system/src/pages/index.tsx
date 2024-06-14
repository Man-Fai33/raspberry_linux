import React, { useState } from 'react';
import Footer from '../components/footer';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import backgroundImage from '../components/image/background.jpeg'; // Adjust the path as necessary
import icon from '../components/image/12.jpg';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Avatar, Box, Button, Divider, IconButton, Stack } from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
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
                    <div className=" relative h-dvh w-full bg-scroll grid grid-cols-6 gap-4    max-lg:grid-cols-1  max-lg:gap-0   " >
                        <div className='relative col-span-4   flex p-72  max-lg:p-0   '
                        // style={{ backgroundImage: `url(${backgroundImage})` }}
                        >
                            <div className='text-5xl font-mono  content-center w-full space-y-5 max-lg:text-2xl max-lg:text-center  '>
                                文輝
                                <br />
                                Cheung Man Fai
                                <div className='text-xl font-mono subpixel-antialiased  italic p-5 '>
                                    軟體工程師、前後端工程師、數據庫工程師
                                </div>
                            </div>

                        </div>
                        <div className="col-span-2 flex justify-center flex-col space-y-8  max-lg:space-y-4 max-md:space-y-1  justify-self-center ">

                            <div className=' relative flex justify-center'>
                                <Avatar alt="Remy Sharp" src={icon} sx={{ width: 200, height: 200 }} />
                            </div>
                            <div className="text-center">
                                文輝<br />
                                Cheung Man Fai
                            </div>
                            <div className=' text-center'>
                                基本聯絡方式
                            </div>
                            <div className='text-center'>
                                專業
                            </div>
                            <div className=' flex  space-x-5'>
                                <IconButton aria-label="Facebook" onClick={() => { window.location.href = "https://www.facebook.com/leo.Fai.F/"; }}><FacebookIcon fontSize="large" /></IconButton>
                                <Divider orientation="vertical" variant="middle" flexItem />
                                <IconButton aria-label="LinkedIn" onClick={() => {
                                    window.location.href = "https://www.facebook.com/leo.Fai.F/";
                                }} ><LinkedInIcon fontSize="large" /></IconButton>
                                < Divider orientation="vertical" variant="middle" flexItem />
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
                    <div className='h-auto w-full  pl-80 pr-80  max-md:pr-0 max-md:pl-0  max-lg:pl-20 max-lg:pr-20 '>
                        <div className='h-dvh bg-slate-400 bg-scroll overflow-y-auto space-y-4 p-4  '>
                            <div className='intro font-mono '>
                                <div className='float-left pt-2 pr-4'> 自我介紹</div>
                                <div className='text-sm'>
                                    大家好，我是[你的名字]，一位熱愛前端開發的工程師。我畢業於[你的學校]，獲得了[你的學位]，主修計算機科學。在過去的[相關年數]年裡，我專注於前端開發，積累了豐富的經驗和技術能力。我擅長使用HTML、CSS和JavaScript，並精通現代前端框架如React、Vue.js和Angular。

                                    在職業生涯中，我參與了多個大型項目，從初期的需求分析、設計到最終的實現和部署。我不僅注重代碼的質量和性能，還關心用戶體驗，致力於提供簡潔、高效、美觀的前端界面。我曾在[公司名稱]工作，作為一名高級前端工程師，負責網站的前端架構設計和開發，並在項目中引入了多種前沿技術和最佳實踐，顯著提升了網站的響應速度和用戶滿意度。

                                    我是一個熱衷於學習和挑戰新技術的人，經常參加技術社區活動和開源項目，以保持自己的技術前沿。我相信技術的力量可以改變世界，並且對於每一個細節都追求完美。我期待能夠在一個充滿活力和創新的團隊中，繼續探索前端開發的無限可能性。
                                </div>
                            </div>
                            <div className='futureplane'>
                                <div className='float-left pt-2 pr-4' > 未來計畫</div>
                                <div className='text-sm'>
                                    未來，我計劃繼續深耕前端開發領域，並探索更多新興技術，如WebAssembly、Progressive Web Apps (PWA) 和Server-Side Rendering (SSR) 等。我希望能夠參與到更加複雜和具挑戰性的項目中，進一步提升自己的技術水平和解決問題的能力。

                                    我計劃考取一些重要的技術認證，如Google的Web開發認證和Microsoft的Azure開發者認證，這將有助於我更好地理解和應用各種前端技術。同時，我也希望能夠在工作中承擔更多的領導角色，帶領團隊實現技術突破，並在公司內部推動技術創新和最佳實踐的落地。

                                    此外，我計劃撰寫技術文章和博客，分享我的經驗和心得，並參與更多的開源項目，為技術社區做出貢獻。我相信，通過不斷的學習和實踐，我能夠成為前端領域的一名專家，並在未來的工作中創造更多的價值。
                                </div>
                            </div>
                            <div className='mybackground'>
                                <div className='float-left pt-2 pr-4'> 我的背景</div>
                                <div className='text-sm'>
                                    我來自[你的城市]，從小對技術和編程充滿了濃厚的興趣。大學期間，我主修計算機科學，系統學習了數據結構、演算法、操作系統等基礎知識，並選修了多門與前端開發相關的課程。通過不斷的學習和實踐，我掌握了HTML、CSS、JavaScript等基本技能，並逐漸深入學習了React、Vue.js、Angular等前端框架。

                                    在校期間，我參與了多個校內外的項目，積累了豐富的實戰經驗。例如，我曾經參與設計和開發了一個校園社交平台，負責前端的架構設計和實現，該平台最終獲得了學校的創新獎。畢業後，我加入了[公司名稱]，在那裡，我參與了多個大型項目，並逐漸成長為一名高級前端工程師。

                                    我的工作經歷讓我具備了出色的問題解決能力和團隊合作精神。我善於與產品經理、設計師和後端工程師密切合作，確保項目能夠高質量地按時完成。我不僅關注技術細節，還注重用戶體驗，致力於創建直觀、易用、美觀的前端界面。

                                    作為一名前端工程師，我深知技術的快速變遷，因此我始終保持學習的熱情，經常參加技術培訓和研討會，以了解最新的技術趨勢和行業動態。我相信，只有不斷學習和進步，才能在競爭激烈的技術領域中立於不敗之地。

                                    總之，我是一名熱愛技術、充滿激情和創新精神的前端工程師，期待在未來的工作中，能夠與優秀的團隊一起，創造出更多令人驚艷的作品。希望能夠有機會加入貴公司，共同開創更加美好的未來。
                                </div>
                            </div>
                        </div>
                        <div className='h-dvh bg-slate-400  flex-wrap p-5 '>
                            <div className=' grid  min-md:grid-flow-row  max-md:grid-flow-col max-md:gap-0     grid-cols-2 gap-4 h-1/2 max-md:h-3/5'>
                                <div className='max-md:grid-cols-1'>
                                    <div className='text-xl'>教育 education</div>
                                    <div className='text-base text-left font-sans tracking-normal text-ellipsis'>
                                        2021-2023 <br />
                                        國立臺灣科技大學 學士學位畢業 資訊管理系 <br />
                                        2019-2021 <br />
                                        香港專業教育學院(沙田) 高級文憑 軟體工程 <br />
                                        2018-2019 <br />
                                        香港專業教育學院(沙田) 基礎文憑 資訊科技 <br />
                                        2012-2018 <br />
                                        香港教師會李興貴中學 <br />

                                    </div>
                                </div>
                                <div className='max-md:grid-cols-1'>
                                    <div className='text-xl'>工作 worker</div>
                                    <div className='text-base text-left font-sans tracking-normal text-ellipsis'>
                                        2023/8~2024/10<br />
                                        大博系統工程股份有限公司 <br />
                                        2021/10~2022/10-遠端工程師 <br />
                                        Jedies Advance Technology Limited <br />
                                        July .2020–school intern <br />
                                        Career relating workshop: Working Holiday <br />
                                        July .2019–summer job <br />
                                        PIREN – 暑期工  <br />
                                    </div>
                                </div>
                            </div>
                            <div className=' space-y-3 space-x-3'>
                                <div className='float-left  text-2xl pt-2 pr-2 max-md'>工作經驗</div>
                                <div className='text-xl max-md:text-base'>
                                    I have experienced a particularly deep part-time job as a summer vacation worker in 2019. This job mainly helps the staff of the Housing Department to change their hosts and data. Before that, I needed to make an appointment with the staff who want to update their computers, and also had problems in communicating data with him. In this job, I learned how to communicate with different employees and how to cooperate with IT departments, especially with IT departments, which is very important, which will affect work efficiency. It is a rare opportunity for me, and I believe I will use this kind of communication to meet friends in the future.
                                </div>
                            </div>
                        </div>
                        <div className='h-dvh bg-slate-400 overflow-x-auto p-4'>
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
