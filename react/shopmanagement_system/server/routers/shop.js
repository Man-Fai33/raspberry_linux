const express = require('express');
const { Helper } = require('../helper/helper');
const router = express.Router();

//shop 
router.get('/', async (req, res) => { });
router.post('/', async (req, res) => { });
router.put('/', async (req, res) => { });
router.delete('/', async (req, res) => { });


//shop items
router.get('/item', async (req, res) => { 

    res.json(Helper.generateFakeShop());
});
router.post('/item', async (req, res) => { });
router.put('/item', async (req, res) => { });
router.delete('/item', async (req, res) => { });


module.exports = router;
