// export const HOST = "http://localhost:3020/api"
export const HOST = 'https://cheungmanfai.ngrok.io/api'

export const Url = {
    User: (HOST + "/user"),
    CV: (HOST + "/cv"),
    Upload: (HOST + "/images"),
    Blog: (HOST + '/blog'),
    Shop: (HOST + "/shop"),
    ShopItem: (HOST + "/shop/item"),

}



// eslint-disable-next-line import/no-anonymous-default-export
export default {
    Url
}