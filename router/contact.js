const express = require('express');
const router = express.Router();

router.route('/user')
.get((req, res) => {
    res.send("hello world");
})
.post((req, res) =>{
    res.send("post world");
})

router.put('/user/:id', (req, res) =>{
    const id = req.params
    res.send(id)
})
router.delete('/user/:userId',(req, res) =>{
    res.send(req.params.userId)
})
module.exports=router