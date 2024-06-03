import React from 'react';
import Background from '../components/image/backgound.jpeg'

export default function Index() {


    return (
        <div className='relative h-fit'>
            <div className='h-dvh bg-cover'
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/background.jpg)` }}
            >
            </div>
            <div className='h-dvh'>
                ?
            </div>
            <div className='h-dvh'>
                ?
            </div>
            <footer className='font-sans' >
                copyright ©    created by 張文輝（Cheung Man Fai）
            </footer>
        </div >
    );
}
