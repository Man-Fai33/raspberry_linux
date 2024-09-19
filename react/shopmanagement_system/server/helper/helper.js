const mongoose = require('mongoose')
const multer = require('multer')
const User = require("../models/user")
const { faker, fakerZH_TW } = require('@faker-js/faker');


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
            const fakeImage = Array.from({ length: faker.number.int({ min: 8, max: 10 }) }).map(() => (
                fakerZH_TW.image.url({ width: 600, height: 500 })
            ));
            return {
                _id: fakerZH_TW.string.uuid(),
                photo: fakeImage,
                name: fakerZH_TW.commerce.productName(),
                price: fakerZH_TW.number.int({ min: 80, max: 300 }),
                introduction: fakerZH_TW.lorem.paragraph(),
                location: fakerZH_TW.location.city(),
                discount: fakerZH_TW.number.float(),
                stock: fakerZH_TW.number.int({ min: 100, max: 300 }),
                brand: fakerZH_TW.commerce.product(),
                saleOut: fakerZH_TW.number.int({ min: 0, max: 300 }),
                product: fakerZH_TW.helpers.arrayElements(faker.commerce.productName(), 3),
                specification: fakerZH_TW.lorem.paragraph(),
                rank: fakerZH_TW.number.float({ min: 1, max: 5 }),
                createdAt: fakerZH_TW.date.recent(),
            };
        }
        return Helper.generateCount(100, generateData)
    },
    generateFakeShopItem() {

    },
    generateFakeBlog() {


        const generateData = () => {
            const fakeContent = [
                {
                    type: 'text',
                    value: fakerZH_TW.lorem.paragraph()
                },
                {
                    type: 'image',
                    value: fakerZH_TW.image.url()
                }
            ];
            const fakeTags = [fakerZH_TW.lorem.word(), fakerZH_TW.lorem.word(), faker.lorem.word()];

            const fakeLike = Array.from({ length: fakerZH_TW.number.int({ min: 8, max: 10 }) }).map(() => ({
                _id: faker.string.uuid()
            }));

            const fakeKeeper = Array.from({ length: fakerZH_TW.number.int({ min: 20, max: 50 }) }).map(() => ({
                _id: fakerZH_TW.string.uuid()
            }));

            const fakeCommit = Array.from({ length: fakerZH_TW.number.int({ min: 30, max: 50 }) }).map(() => ({
                _id: fakerZH_TW.person.jobTitle()
            }));
            return {
                _id: fakerZH_TW.string.uuid(),
                ownerId: fakerZH_TW.string.uuid(),
                title: fakerZH_TW.lorem.sentence(),
                content: fakeContent,
                tags: fakeTags,
                like: fakeLike,
                keeper: fakeKeeper,
                createdAt: fakerZH_TW.date.past(),
                comments: fakeCommit,
                status: fakerZH_TW.helpers.arrayElement(['active', 'draft', 'archived'])
            };
        }
        console.log(Helper.generateCount(100, generateData))
        return Helper.generateCount(100, generateData)
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