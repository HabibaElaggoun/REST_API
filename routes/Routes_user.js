const express = require('express')
const User = require('../models/User')
const router = express.Router()

//       GET :  RETURN ALL USERS 
router.get('/', async (req, res) => {
    try {
       const ALL_Users = await User.find({})
       res.send(ALL_Users)
    } catch (error) {
        console.log(error)
        res.status(400).send('Failed to get')
    }
})

//   POST :  ADD A NEW USER TO THE DATABASE 
router.post('/add_User', async (req, res) => {
    try {
       const ADD_User = await User.findOne({name:req.boqy.name})
       if (ADD_User){
        return res.status(400).send({msg:"This name is entered"})
       }
       const new_User = User({...req.body});
       await new_User.save();
       res.send({new_User, msg:"User successfully added"})

    } catch (error) {
        console.log(error);
        res.status(400).send("Failed to save")
    }
})

//       PUT : EDIT A USER BY ID 
router.put ('/:id', async (req, res) => {
    try {
        const edit_User = await User.updateOne({_id: req.params.id}, {$set:{...req.body}} )
        const new_User = await User.find({ _id: req.params.id})
        if (edit_User.modifiedCount) {
            return res.send({msg: 'User updated', new_User})
        }
        res.status(400).send({msg:'Already updated'})

    } catch (error) {
        console.log(error)
        res.status(400).send('Failed to update')
    }
})

//  DELETE : REMOVE A USER BY ID 
router.delete('/:id', async(req,res) =>{
    try {
        const deleted_User = await User.deleteOne({_id: req.params.id})
        if (deleted_User.deletedCount){
            return res.send({msg: 'User deleted'})
        }
        res.status(400).send({msg:'Already deleted'})

    } catch (error) {
        console.log(error)
        res.status(400).send('Failed to delete')
    }
})

module.exports = router