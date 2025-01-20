const express= require('express')

const router= express.Router()
const User= require('../models/User')
const bcrypt = require('bcrypt')

const post= require('../models/Post')
const comment= require('../models/Comments')
const verifyToken= require('../verifyToken')




// update
router.put(':id',verifyToken,async(req,res)=>{
    try {
        if(req.body.password){
            const salt= await bcrypt.genSalt(10);
            req.body.password= await bcrypt.hashSync(req.body.password,salt);

        }
        const updatedUser= await User.findByIdAndUpdate(req.params.id,
            {$set:req.body},
            {
                new:true
            }
        );
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

// delte 
router.delete("/:id",verifyToken,async(req,res)=>{
    try {
        await User.findByIdAndUpdate(req.params.id)
        await post.deletMany({userId:req.params.id})
        await Comment.deletMany({userId:req.params.id})
        res.status(200).json('user deleted successfully')
    } catch (error) {
        res.status(500).json(error)
    }
})


// Get user

router.get('/:id',async(req,res)=>{
    try {
        const user= await User.findById(req.params.id)
        const {password,...info}= user._doc
        res.status(200).json(info)
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports= router