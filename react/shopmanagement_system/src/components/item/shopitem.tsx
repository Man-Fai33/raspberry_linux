import { Rating } from "@mui/material"
import { ShopItemModels } from "../../models/shopmodelsl"
import DiscountIcon from '@mui/icons-material/Discount';
import { useNavigate } from 'react-router-dom';
import { FuncHelper } from "../../helper/funchelper";
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import StarIcon from '@mui/icons-material/Star';
import { yellow } from "@mui/material/colors";
// 店鋪商品
export default function ShopItem(props: {
    data: ShopItemModels,
}) {
    const navigate = useNavigate();

    const {_id, photo, rank, saleOut, location, title, discount, price } = props.data
    return <div className="w-full  h-80 flex flex-col   hover:scale-110 bg-slate-50 rounded-lg hover:border-red-600 hover:border-solid hover:border-2" onClick={() => { navigate('/shop/item', { state: props.data }); }}>
        <div className="relative w-full  h-2/3 rounded-lg " >

            <img src={photo} key={_id} loading="lazy" alt="" className=" h-full w-full   bg-center bg-cover bg-fixed rounded-sm" />
            <div className="absolute right-0 top-0  bg-amber-200 rounded-xl w-12"><DiscountIcon sx={{ width: '14px' }} /> {FuncHelper.CountOfOne(discount)}</div>
            <div className="absolute bottom-0 right-0"></div>
        </div>
        <div className="  h-2/5  ">
            <div className="pt-1 pl-1"> {title}</div>

            <div className=" pl-1  ">
                <span className=" text-red-400">NT:</span>
                <span className=" text-xl text-red-500"> {FuncHelper.CountOfTwo(price * discount)} </span>
                {" "}
                <span className="text-gray-400  text-sm ">{saleOut}個人已經購買</span></div>

            <div className="flex items-center ml-1">{FuncHelper.CountOfOne(rank)} <StarIcon sx={{ color: yellow[800] }} fontSize="small" /></div>
            <div className=" flex items-center  text-zinc-500 font-semibold text-xs"> <PinDropOutlinedIcon style={{ width: '16px' }} />{location}</div>
        </div>

    </div >
}