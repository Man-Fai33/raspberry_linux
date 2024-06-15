import * as React from 'react';
import Modal from '@mui/material/Modal';
import bgimage from '../image/12.jpg';


export default function SkillModal(props: {
    link: string;
    disable: boolean;
    onclick: () => void;
}) {


    return (
        <Modal
            open={props.disable}
            onClose={props.onclick}

        >
            <div className=' absolute  shadow-2xl bg-white rounded-xl w-1/2  left-1/4 p-4  max-sm:w-full  max-sm:left-0 max max-lg:left-16  h-3/4 max-lg:w-10/12' style={{ top: "10%" }} >
                <div className='text-2xl'>
                    title
                </div>
                <div className='text-base'>
                    大家好，我是[你的名字]，一位熱愛前端開發的工程師。我畢業於[你的學校]，獲得了[你的學位]，主修計算機科學。在過去的[相關年數]年裡，我專注於前端開發，積累了豐富的經驗和技術能力。我擅長使用HTML、CSS和JavaScript，並精通現代前端框架如React、Vue.js和Angular。 在職業生涯中，我參與了多個大型項目，從初期的需求分析、設計到最終的實現和部署。我不僅注重代碼的質量和性能，還關心用戶體驗，致力於提供簡潔、高效、美觀的前端界面。我曾在[公司名稱]工作，作為一名高級前端工程師，負責網站的前端架構設計和開發，並在項目中引入了多種前沿技術和最佳實踐，顯著提升了網站的響應速度和用戶滿意度。 我是一個熱衷於學習和挑戰新技術的人，經常參加技術社區活動和開源項目，以保持自己的技術前沿。我相信技術的力量可以改變世界，並且對於每一個細節都追求完美。我期待能夠在一個充滿活力和創新的團隊中，繼續探索前端開發的無限可能性。
                    未來計畫
                    未來
                </div>
                <div className='relative  flex  overflow-x-auto w-full pb-4 pl-2 pr-2 pt-2'>
                    <div className='flex flex-none  w-full gap-4 h-auto '>
                        <img className='w-1/2 h-fit bg-cover' src={bgimage} />
                        <img className='w-1/2 h-fit' src={bgimage} />
                        <img className='w-1/2 h-fit' src={bgimage} />
                        <img className='w-1/2 h-fit' src={bgimage} />
                        <img className='w-1/2 h-fit' src={bgimage} />
                        <img className='w-1/2 h-fit' src={bgimage} />
                        <img className='w-1/2 h-fit' src={bgimage} />

                    </div>
                </div>
            </div>
        </Modal>
    );
}