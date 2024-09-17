import { useEffect, useMemo, useState } from "react";
import ShopPagination from "../../components/pagination/shop";
import { ShopItemModels } from "../../models/shopmodelsl";
import ShopItem from "../../components/item/shopitem";
import ShopItemFilter from "../../components/filter/item";
import { FilterType } from "../../models/filterModels";
import { ApiHelper } from "../../helper/apihelper";
const TotalPageCounter = (list: ShopItemModels[], num: number): number => {
    return list.length % num === 0 ? list.length / num : Math.ceil(list.length / num)

}


//購物網站的主頁
export default function ShopIndex() {
    const [list, setList] = useState<ShopItemModels[]>([])
    const [filterList, setFilterList] = useState<ShopItemModels[]>([])

    //可供選擇顯示的數量
    const [displayItemNum, setDisplayItemNum] = useState<number>(12)
    const [totalPageCount, setTotalPageCount] = useState<number>(TotalPageCounter(list, displayItemNum))

    //顯示item的數目
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [filter, setFilter] = useState<FilterType>(new FilterType())





    //計算
    const sliceList = useMemo(() => {
        let result = list;


        if (filter.search) {
            result = result.filter(item => item.title.match(filter.search))
        }

        if (filter.totalTypeChoice === "totalRank") {
            result.sort((a, b) => b.rank - a.rank);
        } else if (filter.totalTypeChoice === "hot") {
            result.sort((a, b) => b.saleOut - a.saleOut);
        }
        if (filter.price === "higher") {
            result.sort((a, b) => (b.price * (b.discount / 100)) - (a.price * (a.discount / 100)));
        } else if (filter.price === "lower") {
            result.sort((a, b) => (a.price * (a.discount / 100)) - (b.price * (b.discount / 100)));
        }
        const LastItemIndex = currentPage * displayItemNum
        const startItemIndex = LastItemIndex - displayItemNum

        setTotalPageCount(TotalPageCounter(result, displayItemNum))

        return result.slice(startItemIndex, LastItemIndex)
    }, [list, filter.search, filter.totalTypeChoice, filter.price, currentPage, displayItemNum])



    useEffect(() => {
        ApiHelper.AsyncShopItem().then(item => setList(item))
    }, [])


    useEffect(() => {
        setFilterList(sliceList)
    }, [sliceList])




    function ItemListDisplay() {
        return filterList.map((item, key) => <ShopItem key={key} data={item} />)
    }

    return (
        <div className="flex justify-center  w-full">
            <div className="w-10/12  mt-10 space-y-4">
                {/* shop item filter  */}
                <ShopItemFilter filter={filter} setFilter={setFilter} currentPage={currentPage} totalPage={totalPageCount} setCurrentPage={setCurrentPage} />

                {/* shop item */}
                <div className="relative h-fit">
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 p-3">
                        {ItemListDisplay()}
                    </div>
                    <div className={`relative bottom-0 w-full  flex justify-center pt-1 pb-1 bg-white/40  mt-2 mb-2 `}>
                        <ShopPagination
                            totalItems={totalPageCount}
                            currentItem={currentPage}
                            setCurrentItem={setCurrentPage}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}