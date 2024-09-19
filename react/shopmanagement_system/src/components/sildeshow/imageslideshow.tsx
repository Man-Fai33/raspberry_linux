import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';

import ArrowCircleLeftSharpIcon from '@mui/icons-material/ArrowCircleLeftSharp';

import { IconButton } from "@mui/material";
import { useState } from "react";

export default function ImageSlideShow(props: { images: string[] }) {
    const { images } = props;
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    //     }, 3000); // 每3秒切换图片
    //     return () => clearInterval(interval);
    // }, [images.length]);

    return (<>
        <div className="relative w-full h-80 overflow-hidden">
            <div
                className="absolute inset-0 transition-all duration-500"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                <div className="flex">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Slide ${index}`}
                            className="w-full object-cover bg-cover bg-fixed"
                        />
                    ))}
                </div>
            </div>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white   h-full bg-slate-50/50">
                <IconButton
                    className=' absolute top-1/2'
                    onClick={() => {
                        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
                    }
                    }>

                    <ArrowCircleLeftSharpIcon fontSize={"large"} />
                </IconButton>
            </div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2  text-white p-2   h-full bg-slate-50/50  ">
                <IconButton
                    className=' absolute top-1/2'
                    onClick={() => {
                        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                    }}
                >
                    <ArrowCircleRightSharpIcon fontSize={"large"} />
                </IconButton>
            </div>
            {/* 图片索引指示器 */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                    ></div>
                ))}
            </div>
        </div >
    </>)
}