import { useLocation } from 'react-router-dom';
import { ShopItemModels } from '../../models/shopmodelsl';
import { Avatar, Button, FormControl, IconButton, InputAdornment, OutlinedInput, Rating, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, RootState } from '../../components/redux/store';
import { FuncHelper } from '../../helper/funchelper';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
//店鋪的商品
export default function ItemInformation() {
    const location = useLocation();
    const data: ShopItemModels = location.state;
    const [itemNum, setItemNum] = useState<number>(1);
    useEffect(() => {
        console.log(data)
    }, [data])
    const dispatch = useDispatch();
    const hi: ShopItemModels[] = useSelector((state: RootState) => state.shopcart)

    const Slideshow = (data: string[]) => {
        const slideImages = () => {
            let list = [];
            for (let i = 0; i < data.length; i++) {
                list.push(
                    <div key={i} className="flex justify-center bg-cover bg-no-repeat  h-96  text-center">
                        <div className='w-full h-98' style={{ backgroundImage: `url(${data[i]})` }}>

                        </div>
                    </div>
                );
            }
            return list;
        };

        return (
            <Slide>
                {slideImages()}
            </Slide >
        );
    };
    return (<div className="w-full flex  justify-center">
        <div className=" md:w-10/12 sm:w-full   mt-10 space-y-4  ">
            <div className=' w-full bg-slate-300 p-6 rounded-md '>
                <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4  '>
                    <div className='relative p-3 w-full h-96  '  >
                        <div className=' h-full w-full rounded-sm'>
                            {Slideshow(data.photo)}

                        </div>

                        {/* <div className='absolute bottom-0 w-full justify-center'>

                        </div> */}
                    </div>
                    <Stack direction="column" className=' space-y-5 relative'>
                        <h1>{data.title}</h1> <p>{data.saleOut}</p>
                        <div className='flex items-center'>
                            <div className='underline text-red-600'>{FuncHelper.CountOfOne(data.rank)}</div>
                            <Rating name="read-only" size="small" value={data.rank} readOnly />
                        </div>
                        <p>{data.location}</p>
                        <div className=" w-full bg-gray-400 rounded-sm flex flex-row space-x-4 items-center  p-3"> <div className='line-through'>${data.price}</div> <div className=' text-red-500 text-lg'>{FuncHelper.CountOfTwo(data.price * data.discount)} </div></div>
                        <div className='flex items-center  space-x-3'>
                            <div>數量</div>
                            <div>
                                <FormControl variant="outlined" size='small' className=' w-1/2'  >
                                    <OutlinedInput
                                        className='text-center'
                                        id="outlined-adornment-password"
                                        value={itemNum}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => { setItemNum(num => num + 1) }}
                                                    edge="end"
                                                >
                                                    <AddIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => setItemNum(num => num - 1)}
                                                    edge="start"
                                                >
                                                    <RemoveIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </div>
                        </div>
                        <div className='space-x-5 flex md:justify-normal  max-sm:justify-center'>
                            <Button variant='contained' onClick={() => {
                                dispatch(addItem(data))
                            }} ><AddShoppingCartOutlinedIcon />加入購物車</Button>
                            <Button variant='contained' color='error'>直接購買</Button>
                        </div>
                    </Stack>
                </div>
            </div>


            <ShopInformation />
            <ItemSpecification />
        </div>
        {/* <div>店鋪</div>
        <div>商品規格</div>
        <div>商品評價</div> */}

    </div>
    )
}

const ShopInformation = () => {
    return (
        <div className=' bg-slate-300 w-full rounded-sm p-4 grid   md:grid-flow-col  gap-4   lg:flex-row  items-center shadow-md '>
            {/* 左側區域 */}
            <div className="flex  space-x-6 ">
                <Avatar
                    alt="Seller Avatar"
                    src="https://example.com/avatar.png" // 使用真實圖像URL
                    sx={{ width: 80, height: 80 }}
                />
                <div>
                    <Typography variant="h6" component="div">
                        達米先生 手機分期
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        2小時前上線
                    </Typography>
                    <div className=' space-x-4'>
                        <Button variant="contained" color="error">
                            聊聊
                        </Button>
                        <Button variant="outlined">查看賣場</Button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4 lg:mt-0">
                <div className='flex flex-col'>
                    <span className="text-gray-500">商品評價</span>
                    <span className="text-red-500">6,454</span>
                </div>
                <div className='flex flex-col'>
                    <Typography className="text-gray-500">商品</Typography>
                    <Typography className="text-red-500">80</Typography>
                </div>
                <div className='flex flex-col'>
                    <Typography className="text-gray-500">聊天回應率</Typography>
                    <Typography className="text-red-500">100%</Typography>
                </div>
                <div className='flex flex-col'>
                    <Typography className="text-gray-500">加入時間</Typography>
                    <Typography className="text-red-500">8年 前</Typography>
                </div>
                <div className='flex flex-col'>
                    <Typography className="text-gray-500">粉絲</Typography>
                    <Typography className="text-red-500">7,449</Typography>
                </div>
            </div>

            {/* 按鈕區域 */}

        </div>

    )
}


const ItemSpecification = () => {
    return (
        <div className='p-4 bg-slate-300 flex-col'>
            <div className="">
                <div className='bg-slate-200 p-4 rounded-md'> 商品規格</div>
                的沙發
            </div>
            <div className="">
                <div className='bg-slate-200 p-4 rounded-md'>商品描述</div>
                大幅

            </div>
        </div>
    )
}

