const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');
const { Helper } = require('../helper/helper');

//
router.get('/', async (req, res) => {
    try {
        // const blogs = await Blog.find();
        const blogs =Helper.generateFakeBlog()
        console.log(blogs+"?")
        res.json(blogs);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
});
router.get('/:id', getBlog, (req, res) => {
    res.json(res.blog);
});

router.post('/', async (req, res) => {
    let blog = req.body
    console.log(req.body)
    try {
        blog = new Blog(blog);
        const newBlog = await blog.save();
        res.status(201).json(newBlog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.patch('/:id', getBlog, async (req, res) => {
    if (req.body.title != null) {
        res.blog.title = req.body.title;
    }
    if (req.body.author != null) {
        res.blog.author = req.body.author;
    }
    if (req.body.content != null) {
        res.blog.content = req.body.content;
    }
    if (req.body.tags != null) {
        res.blog.tags = req.body.tags;
    }
    res.blog.updatedAt = Date.now();

    try {
        const updatedBlog = await res.blog.save();
        res.json(updatedBlog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', getBlog, async (req, res) => {
    try {
        await res.blog.remove();
        res.json({ message: 'Deleted Blog' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getBlog(req, res, next) {
    let blog;
    try {
        blog = await Blog.findById(req.params.id);
        if (blog == null) {
            return res.status(404).json({ message: 'Cannot find blog' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.blog = blog;
    next();
}

module.exports = router;