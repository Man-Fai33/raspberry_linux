import { useLocation } from 'react-router-dom';
import { ShopItemModels } from '../../models/shopmodelsl';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Rating, Stack, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
//店鋪的商品
export default function ItemInformation() {
    const location = useLocation();
    const data: ShopItemModels = location.state;
    const [selectedImage, setSelectedImage] = useState<String>("");
    const [itemNum, setItemNum] = useState<number>(1);
    useEffect(() => {
        console.log(data)
    }, [data])

    return (<div className="w-full flex  justify-center">
        <div className="w-10/12  mt-10 space-y-4 ">
            <div className=' w-full bg-slate-300 p-6 rounded-md '>
                <div className='grid grid-cols-2 gap-4 '>
                    <div className='relative p-3 w-full h-96  bg-fixed' style={{ backgroundImage: `url(${data.photo})` }}>
                        <div className='absolute bottom-0 w-full justify-center'>
                            照片list
                        </div>
                    </div>
                    <Stack direction="column" className=' space-y-5'>
                        <h1>{data.title}</h1> <p>{data.saleOut}</p>
                        <div className='flex items-center'>
                            <div className='underline text-red-600'>{data.rank}</div>
                            <Rating name="read-only" size="small" value={data.rank} readOnly />
                        </div>
                        <p>{data.location}</p>
                        <div className=" w-full bg-gray-400 rounded-sm flex flex-row space-x-4 items-center  p-3"> <div className='line-through'>${data.price}</div> <div className=' text-red-500 text-lg'>{data.price * (data.discount / 100)} </div></div>

                        <div className='flex items-center  space-x-3'>數量
                            <div>
                                <FormControl variant="outlined" size='small'>
                                    <OutlinedInput
                                        className='text-center'
                                        id="outlined-adornment-password"
                                        value={itemNum}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <IconButton
                                                    // aria-label="toggle password visibility"
                                                    // onClick={handleClickShowPassword}
                                                    onClick={() => { setItemNum(num => num + 1) }}
                                                    // onMouseDown={handleMouseDownPassword}
                                                    // onMouseUp={handleMouseUpPassword}
                                                    edge="end"
                                                >
                                                    <AddIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    // onClick={handleClickShowPassword}
                                                    // onMouseDown={handleMouseDownPassword}
                                                    // onMouseUp={handleMouseUpPassword}
                                                    onClick={() => setItemNum(num => num - 1)}
                                                    edge="end"
                                                >
                                                    <RemoveIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </div>
                        </div>
                        <div className='space-x-5 '>
                            <Button variant='contained' ><AddShoppingCartOutlinedIcon />加入購物車</Button>
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