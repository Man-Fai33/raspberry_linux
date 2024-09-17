import { useLocation } from 'react-router-dom';
import { ShopItemModels } from '../../models/shopmodelsl';
import { Button, FormControl, IconButton, InputAdornment, OutlinedInput, Rating, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, RootState } from '../../components/redux/store';
import { FuncHelper } from '../../helper/funchelper';
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









    return (<div className="w-full flex  justify-center">
        <div className="w-10/12  mt-10 space-y-4  ">
            <div className=' w-full bg-slate-300 p-6 rounded-md '>
                <div className='grid grid-cols-2 gap-4 '>
                    <div className='relative p-3 w-full h-96  '  >
                        <img src={data.photo} alt="" className=' h-full w-full rounded-sm' ></img>
                        <div className='absolute bottom-0 w-full justify-center'>
                            照片list
                        </div>
                    </div>
                    <Stack direction="column" className=' space-y-5  relative'>
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
                        <div className='space-x-5 absolute bottom-2'>
                            <Button variant='contained' onClick={() => {
                                dispatch(addItem(data))
                            }} ><AddShoppingCartOutlinedIcon />加入購物車</Button>
                            <Button variant='contained' color='error'>直接購買</Button>
                        </div>
                    </Stack>
                </div>
            </div>
        </div>
        {/* <div>店鋪</div>
        <div>商品規格</div>
        <div>商品評價</div> */}

    </div>
    )
}