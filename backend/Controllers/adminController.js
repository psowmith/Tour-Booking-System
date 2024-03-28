const mongoose=require('../Config/Db');
const adminData=async (req,res)=>{
    try{
        const database = mongoose.connection.db;
        const collections = await database.listCollections().toArray();
        const allData = [];
        for (const collection of collections) {
            const collectionName = collection.name;
            const collectionData = await database.collection(`${collectionName}`).find({ reservation: true }).toArray();
            allData.push(...collectionData);
        }
        const totalCost = allData.reduce((sum, item) => {
            const numericCost = parseFloat(item.cost.replace(/[^0-9.]/g, ''));
            return sum + numericCost;
        }, 0);
        res.status(200).send({totalCost});
    }
    catch(err){
        console.log("admin Controller's data err"+err);
        res.status(500).json({ message: "admin Controller's data err" });
    }
}
const newUser=async (req,res) =>{
    try{
        const database = mongoose.connection.db;
        const collection = await database.collection('users').find().toArray();
        if(collection.length>0){
            res.status(200).send(collection[collection.length-1]);
        }
        else{
            res.status(500).json({ message: "no new user..." });
        }
    }
    catch(err){
        res.status(500).json({ message: "error in new user..." });
    }
}
const allUsers=async (req,res) =>{
    try{
        const database = mongoose.connection.db;
        const collection = await database.collection('users').find().toArray();
        res.send(collection);
    }
    catch(err){
        res.status(500).json({ message: "error in fetching DB of all users..." });
    }
}
const updateUser=async (req,res) =>{
    const {originalemail,email,username}=req.body;
    try{
        const database = mongoose.connection.db;
        const user =database.collection('users');
        const update = await user.updateOne({ email: originalemail }, { $set: { email: email, username: username } });
        if (update.modifiedCount > 0){
            res.status(200).json({ message: "user Updated..." });
        }
        else{
            res.status(500).json({ message: "user udation error..." });
        }
    }
    catch(err){
        console.log("error in update of user...",err);
    }
}
const tourData=async (req,res)=>{
    try{
        const database = mongoose.connection.db;
        const collections = await database.listCollections().toArray();
        const allData = [];
        for (const collection of collections) {
            const collectionName = collection.name;
            if(collectionName!='users'){
                const collectionData = await database.collection(`${collectionName}`).find().toArray();
                allData.push(...collectionData);
            }
        }
        res.send(allData);
    }
    catch(err){
        console.log("error in fetching the all tourist data...",err);
    }

}
const updateTour=async (req,res)=>{
    const {Id,Name,Address,Cost,Reservation,Checkin,Checkout,Guest,Rating}=req.body;
    console.log({Id,Name,Address,Cost,Reservation,Checkin,Checkout,Guest,Rating});
    try{
        const database = mongoose.connection.db;
        const collections = await database.listCollections().toArray();
        for (const collection of collections) {
            const collectionName = collection.name;
            if(collectionName!='users'){
                const collectionData = await database.collection(`${collectionName}`);
                var update = await collectionData.updateOne({ name: Id }, { $set: { name: Name,address: Address,cost: Cost,reservation: Reservation,checkin: Checkin,checkout: Checkout,guest: Guest,count: Rating } });
            }
        }
        if (update.modifiedCount > 0){
            res.status(200).json({ message: "user Updated..." });
        }
        else{
            res.status(500).json({ message: "Tour udation error..." });
        }
    }
    catch(err){
        console.log("error in fetch of tour update...",err);
    }
}
module.exports = {adminData,
                newUser,
                allUsers,
                updateUser,
                tourData,
                updateTour
            };