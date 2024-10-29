import Expedition from "../models/expedition.js";
import Explorer from "../models/explorer.js"

const store = async (req,res)=>{
    try{
    const connect = await Expedition.create(req.body)
    await Explorer.updateMany(
        { _id: { $in: req.body.participants } },
        { $inc: { expeditionsParticipated: 1 } }
    );
    res.status(201).json(connect)
    }catch(err){
        console.log(err);
    }
}

const index = async (req,res)=>{
    try{
        const connect = await Expedition.find().populate('participants', 'name').populate('speciesFound', 'name')
        res.status(200).json(connect)
    }catch(err){
        console.log(err);
    }
}

const show = async (req,res)=>{
    try{
        const connect = await Expedition.findById(req.params.id)
        res.status(200).json(connect)
    }catch(err){
        console.log(err);
    }
}

const update = async (req,res)=>{
    try{
        const connect = await Expedition.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(connect)
    }catch(err){
        console.log(err);
    }
}

const destroy = async (req,res)=>{
    try{
        const connect = await Expedition.findByIdAndDelete(req.params.id)
        res.status(200).json(connect)
    }catch(err){
        console.log(err);
    }
}

export default {store, index, show, update, destroy}