const router = require('express').Router()
const { validateAddTransaction, validateSpent } = require('../validation/validation')
const database = require('../database/db').database

router.post('/add',(req,res)=>{
    try {
        let validation = validateAddTransaction(req.body);
        if(validation.error){
            res.status(400).send(validation);
        }
        //
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router