import { IconButton, Button, Checkbox, TextField, Divider } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useEffect, useMemo, useState } from 'react';
import { ShopItemModels } from '../../models/shopmodelsl';
import { useDispatch, useSelector } from 'react-redux';
import { addItemOfCart, deleteItem, minusItemOfCart, RootState } from '../../components/redux/store';
export default function ShopCartPage() {
    const dispatch = useDispatch();

    const cartItems: ShopItemModels[] = useSelector((state: RootState) => state.shopcart)


    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const [inputText, setInputText] = useState<string>("");
    const [searchText, setSearchText] = useState<string>("")
    const cartItemsFilter = useMemo(() => {
        let result = cartItems;
        if (searchText !== "") {
            result = result.filter(item => item.title.toLowerCase().match(searchText.toLowerCase()))
        }
        return result
    }, [cartItems, searchText])

    // useEffect(() => { 
        
    // }, [searchText])
    return (
        <div className='flex justify-center'>
            <div className="md:w-10/12 sm:w-full  space-y-4">
                {/* Header */}
                <div className="sticky top-0 bg-white z-10 shadow-lg flex  flex-nowrap  items-center p-5   justify-between rounded-md">
                    <div className=' flex items-center flex-nowrap space-x-4 '>
                        <div className='text-5xl blur-sm'>CMF </div>
                        <Divider orientation='vertical' variant="middle" flexItem />
                        <div className=' text-2xl'> 購物車</div>
                    </div>

                    <div className='flex flex-nowrap w-1/2'>
                        <TextField
                            value={inputText || ""}
                            variant="outlined"
                            placeholder="9/18 加碼超商免運 看更多免運店家"
                            size="small"
                            className="flex-grow  w-full"
                            onChange={(e) => setInputText(e.target.value)}
                        />
                        <IconButton onClick={() => { setSearchText(inputText) }}>
                            <Search />
                        </IconButton>
                    </div>
                </div>
                {/* Cart Content */}
                <div className="mt-4">

                    <table className=" table-auto w-full border-collapse">

                        <thead className="bg-gray-100">
                            <tr >
                                <th className="w-6"><Checkbox /></th>
                                <th className="text-start p-2">商品</th>
                                <th className="p-2"></th>
                                <th className="p-2">單價</th>
                                <th className="p-2">數量</th>
                                <th className="p-2">總計</th>
                                <th className="p-2">操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItemsFilter.map((item) => (
                                <tr key={item._id} className="border-t  p-2">
                                    <td className="p-2  items-center">
                                        <Checkbox />
                                    </td>
                                    <td className="p-2 flex items-center flex-nowrap">
                                        <img src={item.photo[0]} alt={item.title} className="h-12 w-12 mr-4" />
                                        <span>{item.title}</span>
                                    </td>
                                    <td className="p-2  text-center"></td>
                                    <td className="p-2  text-center">${item.price}</td>
                                    <td className="p-2 text-center  items-center">
                                        <Button
                                            variant="outlined"
                                            onClick={() => {
                                                if (item.quantity > 1) {
                                                    dispatch(minusItemOfCart(item._id))
                                                } else {
                                                    alert("拜托不能在減了")
                                                }
                                            }}
                                        >
                                            -
                                        </Button>
                                        <span className="mx-2">{item.quantity}</span>
                                        <Button variant="outlined" onClick={() => { dispatch(addItemOfCart(item._id)) }} >
                                            +
                                        </Button>
                                    </td>
                                    <td className="p-2 text-center">${item.price}</td>
                                    <td className="p-2 text-center">
                                        <Button variant="text" color="secondary" onClick={() => { dispatch(deleteItem(item._id)) }}>
                                            刪除
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* Checkout section */}
                    <div className="mt-4 flex justify-between items-center">
                        <div className="text-sm">
                            <p>選擇優惠券或輸入優惠代碼</p>
                            <Button variant="contained" className="bg-orange-500">
                                確認優惠
                            </Button>
                        </div>
                        <div className="text-lg font-bold">
                            總金額 ({cartItems.length} 個商品): ${totalAmount}
                        </div>
                        <Button variant="contained" className="bg-orange-500">
                            去買單
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}