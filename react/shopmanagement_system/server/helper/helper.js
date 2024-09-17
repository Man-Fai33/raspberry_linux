const mongoose = require('mongoose')
const multer = require('multer')
const User = require("../models/user")
const { faker } = require('@faker-js/faker');
const { count } = require('console');
const { title } = require('process');

const Helper = {
    async SignUpCheck(email) {
        let message = ""

        if (await User.findOne({ email: email }).exec() !== null) {
            message += "用戶電郵"
        }
        // if (await User.findOne({ username: username }).exec() !== null) {
        //     message += "用戶名稱"
        // }

        return message
    },
    generateFakeShop() {
        const generateData = () => {
            return {
                _id: faker.string.uuid(),
                photo: faker.image.url(),
                title: faker.commerce.productName(),
                price: faker.number.int({ min: 0, max: 300 }),
                location: faker.location.city(),
                discount: faker.number.float(),
                saleOut: faker.number.int({ min: 0, max: 300 }),
                product: faker.helpers.arrayElements(faker.commerce.productName(), 3),
                rank: faker.number.float({ min: 0, max: 5 }),
                createdAt: faker.date.recent(),
            };
        }
        return Helper.generateCount(100, generateData)
    },
    generateFakeShopItem() {

    },
    generateCount(count, fn) {
        const list = [];
        for (let i = 0; i < count; i++) {
            list.push(fn());
        }
        return list
    }


}
module.exports = { Helper }