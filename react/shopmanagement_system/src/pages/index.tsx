import React from 'react';
import Footer from '../components/footer';
import backgroundImage from '../components/image/background.jpeg'; // Adjust the path as necessary

export default function Index() {


    return (
        <div className='relative h-fit'>
            <div className='h-dvh bg-cover' style={{ backgroundImage: `url(${backgroundImage})` }}  >
                ?
            </div>

            <div className="h-dvh w-full bg-scroll" style={{ backgroundImage: `url(${backgroundImage})` }}>
                ?
            </div>
            <div className='h-dvh'>
                ?
            </div>
            <Footer />
        </div >
    );
}
