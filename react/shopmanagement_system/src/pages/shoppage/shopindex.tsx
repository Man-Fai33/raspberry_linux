import { useEffect, useMemo, useState } from "react";
import ShopPagination from "../../components/pagination/shop";
import { ShopItemModels } from "../../models/shopmodelsl";
import ShopItem from "../../components/item/shopitem";
import ShopItemFilter from "../../components/filter/item";
import { FilterType } from "../../models/filterModels";


//購物網站的主頁
export default function ShopIndex() {
    const [list,] = useState<ShopItemModels[]>([
        {
            "photo": "https://via.placeholder.com/150?text=Shop+1",
            "rank": 5,
            "saleOut": 45,
            "location": "Taipei",
            "title": "Shop A",
            "discount": 15,
            "price": 75
        }, {
            "photo": "https://via.placeholder.com/150?text=Shop+1",
            "rank": 5,
            "saleOut": 45,
            "location": "Taipei",
            "title": "Shop A",
            "discount": 15,
            "price": 75
        }, {
            "photo": "https://via.placeholder.com/150?text=Shop+1",
            "rank": 5,
            "saleOut": 45,
            "location": "Taipei",
            "title": "Shop A",
            "discount": 15,
            "price": 75
        }, {
            "photo": "https://via.placeholder.com/150?text=Shop+1",
            "rank": 5,
            "saleOut": 45,
            "location": "Taipei",
            "title": "Shop A",
            "discount": 15,
            "price": 75
        }, {
            "photo": "https://via.placeholder.com/150?text=Shop+1",
            "rank": 5,
            "saleOut": 45,
            "location": "Taipei",
            "title": "Shop A",
            "discount": 15,
            "price": 75
        },
        {
            "photo": "https://via.placeholder.com/150?text=Shop+2",
            "rank": 4,
            "saleOut": 67,
            "location": "Kaohsiung",
            "title": "Shop B",
            "discount": 20,
            "price": 50
        },
        {
            "photo": "https://via.placeholder.com/150?text=Shop+3",
            "rank": 3,
            "saleOut": 33,
            "location": "Taichung",
            "title": "Shop C",
            "discount": 25,
            "price": 40
        },
        {
            "photo": "https://via.placeholder.com/150?text=Shop+4",
            "rank": 2,
            "saleOut": 12,
            "location": "Tainan",
            "title": "Shop D",
            "discount": 30,
            "price": 65
        },
        {
            "photo": "https://via.placeholder.com/150?text=Shop+5",
            "rank": 1,
            "saleOut": 78,
            "location": "Hsinchu",
            "title": "Shop E",
            "discount": 40,
            "price": 80
        },
        {
            "photo": "https://via.placeholder.com/150?text=Shop+6",
            "rank": 4,
            "saleOut": 55,
            "location": "Taipei",
            "title": "Shop F",
            "discount": 18,
            "price": 35
        },
        {
            "photo": "https://via.placeholder.com/150?text=Shop+7",
            "rank": 3,
            "saleOut": 22,
            "location": "Kaohsiung",
            "title": "Shop G",
            "discount": 50,
            "price": 90
        },
        {
            "photo": "https://via.placeholder.com/150?text=Shop+8",
            "rank": 5,
            "saleOut": 61,
            "location": "Taichung",
            "title": "Shop H",
            "discount": 10,
            "price": 55
        },
        {
            "photo": "https://via.placeholder.com/150?text=Shop+9",
            "rank": 2,
            "saleOut": 19,
            "location": "Tainan",
            "title": "Shop I",
            "discount": 22,
            "price": 60
        },
        {
            "photo": "https://via.placeholder.com/150?text=Shop+10",
            "rank": 1,
            "saleOut": 84,
            "location": "Hsinchu",
            "title": "Shop J",
            "discount": 35,
            "price": 70
        },
        {
            "photo": "https://via.placeholder.com/150?text=Shop+11",
            "rank": 3,
            "saleOut": 40,
            "location": "Taipei",
            "title": "Shop K",
            "discount": 25,
            "price": 48
        },
        {
            "photo": "https://via.placeholder.com/150?text=Shop+12",
            "rank": 4,
            "saleOut": 71,
            "location": "Kaohsiung",
            "title": "Shop L",
            "discount": 20,
            "price": 53
        },
        {
            "photo": "https://via.placeholder.com/150?text=Shop+13",
            "rank": 5,
            "saleOut": 35,
            "location": "Taichung",
            "title": "Shop M",
            "discount": 15,
            "price": 65
        },
        {
            "photo": "https://via.placeholder.com/150?text=Shop+14",
            "rank": 2,
            "saleOut": 27,
            "location": "Tainan",
            "title": "Shop N",
            "discount": 40,
            "price": 75
        },
        {
            "photo": "https://via.placeholder.com/150?text=Shop+15",
            "rank": 1,
            "saleOut": 89,
            "location": "Hsinchu",
            "title": "Shop O",
            "discount": 10,
            "price": 85
        },
        {
            "photo": "https://via.placeholder.com/150?text=Shop+16",
            "rank": 3,
            "saleOut": 58,
            "location": "Taipei",
            "title": "Shop P",
            "discount": 30,
            "price": 67
        },
        {
            "photo": "https://via.placeholder.com/150?text=Shop+17",
            "rank": 4,
            "saleOut": 63,
            "location": "Kaohsiung",
            "title": "Shop Q",
            "discount": 12,
            "price": 42
        },
        {
            "photo": "https://via.placeholder.com/150?text=Shop+17",
            "rank": 4,
            "saleOut": 63,
            "location": "Kaohsiung",
            "title": "Shop Q",
            "discount": 12,
            "price": 42
        },
        {
            "photo": "https://via.placeholder.com/150?text=Shop+17",
            "rank": 4,
            "saleOut": 63,
            "location": "Kaohsiung",
            "title": "Shop Q",
            "discount": 12,
            "price": 42
        },
        {
            "photo": "https://via.placeholder.com/150?text=Shop+17",
            "rank": 4,
            "saleOut": 63,
            "location": "Kaohsiung",
            "title": "Shop Q",
            "discount": 12,
            "price": 42
        },
        {
            "photo": "https://via.placeholder.com/150?text=Shop+17",
            "rank": 4,
            "saleOut": 63,
            "location": "Kaohsiung",
            "title": "Shop Q",
            "discount": 12,
            "price": 42
        },
        {
            "photo": "https://via.placeholder.com/150?text=Shop+18",
            "rank": 5,
            "saleOut": 38,
            "location": "Taichung",
            "title": "Shop R",
            "discount": 18,
            "price": 55
        },
        {
            "photo": "https://via.placeholder.com/150?text=Shop+19",
            "rank": 2,
            "saleOut": 29,
            "location": "Tainan",
            "title": "Shop S",
            "discount": 25,
            "price": 62
        },
        {
            "photo": "https://via.placeholder.com/150?text=Shop+20",
            "rank": 1,
            "saleOut": 92,
            "location": "Hsinchu",
            "title": "Shop T",
            "discount": 20,
            "price": 78
        }
    ]
    )

    //可供選擇顯示的數量
    const displayItemNum = 12

    //顯示item的數目
    const [currentPage, setCurrentPage] = useState<number>(1);

    const [filter, setFilter] = useState<FilterType>(new FilterType())

    const slicelist = useMemo(() => {
        const LastItemIndex = currentPage * displayItemNum
        const startItemIndex = LastItemIndex - displayItemNum

        return list.slice(startItemIndex, LastItemIndex)
    }, [currentPage, list])

    const totalPageCount = list.length % displayItemNum === 0 ? list.length / displayItemNum : Math.ceil(list.length / displayItemNum)


    useEffect(() => {
        console.log(filter.selectType)
    }, [filter])

    return (
        <div className="flex justify-center  w-full">
            <div className="w-10/12  mt-10 space-y-4">
                {/* shop item filter  */}
                <ShopItemFilter filter={filter} setFilter={setFilter} currentPage={currentPage} totalPage={totalPageCount} setCurrentPage={setCurrentPage} />

                {/* shop item */}
                <div className="relative h-fit">
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 p-3">
                        {slicelist.map((item, key) => <ShopItem key={key} data={item} />)}
                    </div>
                    <div className="relative bottom-0 w-full  flex justify-center pt-1 pb-1 bg-white/40  mt-2 mb-2">
                        <ShopPagination
                            totalItems={list.length % displayItemNum === 0 ? list.length / displayItemNum : Math.ceil(list.length / displayItemNum)}
                            currentItem={currentPage}
                            setCurrentItem={setCurrentPage}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}