import { Box, Button, Rating, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";



//個人店鋪頁面
export default function Shop() {
    const [inputText, setInputText] = useState<string>("");
    const [searchText, setSearchText] = useState<string>("");

    useEffect(() => { console.log(searchText) }, [searchText])
    return (
        <div className=" flex justify-center">
            <div className="md:w-10/12 sm:w-full  space-y-4">

                <div className="relative min-h-screen">
                    {/* Header */}
                    <header className=" sticky top-0 z-10 bg-white shadow p-4 flex items-center justify-between">
                        <div className="font-bold text-3xl blur-sm">
                            CMF
                        </div>
                        <div className="flex items-center space-x-2">
                            <TextField
                                size="small"
                                value={inputText || ""}
                                onChange={(e) => { setInputText(e.target.value) }}
                                type="text"
                                placeholder="搜索宝贝"
                                className="border border-gray-300 p-2 rounded-md"
                            />
                            <Button variant="contained" color="error" onClick={() => setSearchText(inputText)}>搜索</Button>
                            <Button variant="outlined" color="error">搜本店</Button>
                        </div>
                    </header>

                    {/* Store Info */}
                    <div className="bg-white mt-4 p-4 shadow flex items-start justify-between">
                        <div className="space-y-2">
                            <Typography variant="h5" fontWeight="bold">
                                松居苑
                            </Typography>
                            <div className="flex items-center">
                                <Typography variant="caption">松居苑旗舰店</Typography>
                                <Rating value={4} readOnly />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <Box className="flex space-x-4">
                                <Typography variant="body2">综合体验: 4.0</Typography>
                                <Typography variant="body2">宝贝质量: 4.4</Typography>
                                <Typography variant="body2">物流速度: 4.4</Typography>
                                <Typography variant="body2">服务保障: 4.4</Typography>
                            </Box>
                        </div>
                        <div className="space-x-4">
                            <Button variant="outlined" color="error">+ 关注店铺</Button>
                            <Button variant="outlined" color="error">联系客服</Button>
                        </div>
                    </div>

                    {/* Sidebar and Product Grid */}
                    <div className="flex mt-4 space-x-4">
                        {/* Sidebar */}
                        <aside className="bg-white p-4 shadow w-1/4">
                            <Typography variant="h6">全部宝贝</Typography>
                            <ul className="space-y-2 mt-4">
                                <li className="text-gray-600">2024年9月</li>
                                <li className="text-gray-600">7月23日</li>
                                <li className="text-gray-600">7月27日</li>
                                <li className="text-gray-600">7月31日</li>
                                <li className="text-gray-600">8月3日 渔具</li>
                                <li className="text-gray-600">8月8日 渔具</li>
                            </ul>
                        </aside>
                        {/* Product Grid */}
                        <main className="bg-white p-4 shadow w-3/4">
                            <div className="flex  justify-start space-x-4 mb-4">
                                <Button variant="contained" color="error">综合</Button>
                                <Button variant="outlined">销量</Button>
                                <Button variant="outlined">价格</Button>
                                <Button variant="outlined">时间</Button>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <ProductCard
                                    title="新型浮钓钩专用翻板钩鲢鳙钓组"
                                    description="新改良 五爪鲢鳙钩"
                                    image="https://via.placeholder.com/150"
                                />
                                <ProductCard
                                    title="金袖双钩"
                                    description="包邮 50付入成品子线双钩"
                                    image="https://via.placeholder.com/150"
                                />
                                <ProductCard
                                    title="一盒就够用"
                                    description="50枚盒装刻度铅皮亮技快递铅块"
                                    image="https://via.placeholder.com/150"
                                />
                                <ProductCard
                                    title="新型浮钓钩专用翻板钩鲢鳙钓组"
                                    description="新改良 五爪鲢鳙钩"
                                    image="https://via.placeholder.com/150"
                                />
                                <ProductCard
                                    title="金袖双钩"
                                    description="包邮 50付入成品子线双钩"
                                    image="https://via.placeholder.com/150"
                                />
                                <ProductCard
                                    title="一盒就够用"
                                    description="50枚盒装刻度铅皮亮技快递铅块"
                                    image="https://via.placeholder.com/150"
                                />
                                <ProductCard
                                    title="新型浮钓钩专用翻板钩鲢鳙钓组"
                                    description="新改良 五爪鲢鳙钩"
                                    image="https://via.placeholder.com/150"
                                />
                                <ProductCard
                                    title="金袖双钩"
                                    description="包邮 50付入成品子线双钩"
                                    image="https://via.placeholder.com/150"
                                />
                                <ProductCard
                                    title="一盒就够用"
                                    description="50枚盒装刻度铅皮亮技快递铅块"
                                    image="https://via.placeholder.com/150"
                                />
                            </div>
                        </main>
                    </div>
                </div>

            </div>
        </div>
    )
}
const ProductCard = (props: { image: string, title: string, description: string }) => (
    <div className="border rounded p-4 flex flex-col items-center hover:border-red-500" >
        <img src={props.image} alt={props.title} className="mb-2 hover:scale-110" />
        <Typography variant="body1" fontWeight="bold" className="text-center hover:scale-110">
            {props.title}
        </Typography>
        <Typography variant="caption" className="text-gray-500 text-center hover:scale-110">
            {props.description}
        </Typography>
    </div>
);