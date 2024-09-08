import { Rating } from "@mui/material"
import { ShopItemModels } from "../../models/shopmodelsl"
import DiscountIcon from '@mui/icons-material/Discount';
import { useNavigate } from 'react-router-dom';

// 店鋪商品
export default function ShopItem(props: {
    data: ShopItemModels,
}) {
    const navigate = useNavigate();

    const { photo, rank, saleOut, location, title, discount, price } = props.data
    return <div className="w-full  h-80 flex flex-col hover:scale-110 bg-slate-50 rounded-lg hover:border-red-600 hover:border-solid hover:border-2" onClick={() => { navigate('/shop/item', { state: props.data }); }}>
        <div className="relative w-full  h-2/3 rounded-lg " style={{ backgroundImage: `url(${photo})` }}>
            <div className="absolute right-0 top-0  bg-amber-200 rounded-xl w-12"><DiscountIcon sx={{ width: '14px' }} /> {discount}</div>
            <div className="absolute bottom-0 right-0"></div>
        </div>
        <div className="relative  h-2/5  ">
            <div className="absolute top-0 left-0 pt-1 pl-1"> {title}</div>
            <div className="absolute right-0  top-1/3 pr-1 flex items-center space-x-2"><Rating name="read-only" size="small" value={rank} readOnly /> <div>{location}</div></div>
            <div className="absolute bottom-0 left-0  pl-1  ">
                <span className=" text-red-400">NT:</span>
                <span className=" text-xl text-red-500"> {(price * (discount / 100)).toFixed(2)} </span>
                {" "}
                <span className="text-gray-400  text-sm ">{saleOut}個人已經購買</span></div>
        </div>

    </div >
}