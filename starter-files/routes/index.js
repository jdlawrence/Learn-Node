const express = require('express');
const router = express.Router();
const { homePage, addStore, createStore, getStores, editStore } = require('../controllers/storeController');
const { catchErrors } = require('../handlers/errorHandlers');

// Do work here
router.get('/', catchErrors(getStores));
router.get('/stores', catchErrors(getStores));

router.get('/add', addStore);

router.post('/add', catchErrors(createStore));

router.get('/stores/:id/edit', catchErrors(editStore));


module.exports = router;