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
        const fakeImage = Array.from({ length: faker.number.int({ min: 0, max: 10 }) }).map(() => (
            faker.image.url({ width: 600, height: 500})
        ));
        const generateData = () => {
            return {
                _id: faker.string.uuid(),
                photo: fakeImage,
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
    generateFakeBlog() {
        const fakeContent = [
            {
                type: 'text',
                value: faker.lorem.paragraph()
            },
            {
                type: 'image',
                value: faker.image.url()
            }
        ];

        const fakeTags = [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()];

        const fakeLike = Array.from({ length: faker.number.int({ min: 8, max: 10 }) }).map(() => ({
            _id: faker.string.uuid()
        }));

        const fakeKeeper = Array.from({ length: faker.number.int({ min: 0, max: 5 }) }).map(() => ({
            _id: faker.string.uuid()
        }));

        const fakeCommit = Array.from({ length: faker.number.int({ min: 0, max: 50 }) }).map(() => ({
            _id: faker.person.jobTitle()
        }));


        const generateData = () => {
            return {
                _id: faker.string.uuid(),
                ownerId: faker.string.uuid(),
                title: faker.lorem.sentence(),
                content: fakeContent,
                tags: fakeTags,
                like: fakeLike,
                keeper: fakeKeeper,
                createdAt: faker.date.past(),
                comments: fakeCommit,
                status: faker.helpers.arrayElement(['active', 'draft', 'archived'])
            };
        }
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