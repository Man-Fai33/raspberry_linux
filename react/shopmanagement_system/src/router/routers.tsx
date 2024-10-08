import Account from "../pages/account"

import Home from "../pages/home"
import Index from "../pages/index"
import Test from "../pages/test"



//shop  import 
import ShopIndex from "../pages/shoppage/shopindex"
import Shop from "../pages/shoppage/shop"
import ItemInformation from "../pages/shoppage/item"
import ShopCartPage from "../pages/shoppage/shopcart"



//blog import  
import Blog from "../pages/blog"
import path from "path"




//blog
const blog = [
    { path: 'blog', element: <Blog /> },
]


//shop
const shop = [
    { path: 'shop', element: <ShopIndex /> },
    { path: 'shop/shop', element: <Shop /> },
    { path: 'shop/item', element: <ItemInformation /> },
    { path: 'shop/shopcart', element: <ShopCartPage /> }
]











const routers = [
    { path: '/', element: <Index /> },

    { path: 'home', element: <Home /> },
    { path: 'account', element: <Account /> },

    { path: 'test', element: <Test /> },


    // blog page 導入
    ...blog,
    // shop page 導入
    ...shop
]

export default routers