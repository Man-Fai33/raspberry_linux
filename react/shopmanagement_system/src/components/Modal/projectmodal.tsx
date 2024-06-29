import * as React from 'react';
import Modal from '@mui/material/Modal';
import bgimage from '../image/12.jpg';
import { Project } from '../../models/cvModels';
import funchelper from '../../helper/funchelper';


export default function ProjectModal(props: {
    data: Project | null;
    disable: boolean;
    onclick: () => void;
}) {

    return (
        <Modal
            open={props.disable}
            onClose={props.onclick}

        >
            <div className='absolute  shadow-2xl bg-white rounded-xl w-1/2 space-y-2     left-1/4 p-4  max-h-full  max-sm:w-full  max-sm:left-0 max max-lg:left-16  h-3/4 max-lg:w-10/12' style={{ top: "10%" }}  >
                <div className=' relative text-2xl'>
                    {props.data?.title} - {props.data?.year}
                </div>
                <div className='relative h-2/5 text-base'>
                    {funchelper.FuncHelper.textformat(props.data?.description)}
                </div>

                <div className=' absolute bottom-0 p-3 space-y-2'>
                    <div className=' relative   overflow-x-auto w-full pb-3 pl-2 pr-2 pt-2'>
                        <div className='flex flex-none  w-full gap-4 h-auto '>
                            {props.data?.photo.map((value, index) => (
                                <img key={index} className='bg-cover' style={{ width: 300, height: 180 }} src={value} />
                            ))}
                        </div>
                    </div>
                    <div className=' w-full justify-center   flex  '>
                        <button className=' shadow-lg h-12 rounded-md  w-1/4  bg-cyan-400 hover:text-xl hover:w-1/2 duration-500'>連結</button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}