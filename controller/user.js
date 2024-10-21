const User=require('../model/user')

const handleGetAllUsers=async(req,res)=>{
    const users = await User.find({});
    return res.json(users);
}

const handleGetUserById=async(req,res)=>{
    const id = req.params.id;
    const user = await User.findById(id);
    return res.json(user);
}

const handleCreateUser=async(req,res)=>{
    const { first_name, last_name, email, gender } = req.body;
    const data = {
        first_name, last_name, email, gender
    }
    await User.create(data);
    res.status(201).json("success");
}

const handleUpdateUser=async(req,res)=>{
    const id = req.params.id;
    try {
        const user = await User.findByIdAndUpdate(id, req.body, { new: true });
        console.log("user", user);
    } catch (err) {
        console.log("error", err);
    }

    return res.json("updated successfully");
}

const handleDeleteUser=async(req,res)=>{
    const id = req.params.id;
    try {
        const user = await User.findOneAndDelete(id);
    } catch (err) {
        console.log("Error", err);
    }
    return res.json("Deleted Successfully");
}

module.exports={handleGetAllUsers,handleGetUserById,handleCreateUser,handleUpdateUser,handleDeleteUser};