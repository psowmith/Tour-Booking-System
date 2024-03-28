const User=require('../Models/User')
const mongoose=require('../Config/Db');
const { Types: { ObjectId } } = require('mongoose');
const londondata=async (req,res)=>{
    try {
        const database = mongoose.connection.db;
        const collection = database.collection('london_hotels');
        const beach = database.collection('london_beach');
        const data = await collection.find({ reservation: false }).toArray();
        const data1= await beach.find({ reservation: false }).toArray();
        const pool=database.collection('london_pools');
        const pool1=await pool.find({ reservation: false }).toArray();
        const e=[...data,...data1,...pool1].sort(() => Math.random() - 0.5);
        const { minPrice, maxPrice } = req.query;
        const { checkin, checkout, guests } = req.query;
        if (minPrice && maxPrice) {
          const filteredData = e.filter((item) => {
            const cost = parseInt(item.cost.replace(/\D/g, ''), 10); 
            return cost >= parseInt(minPrice, 10) && cost <= parseInt(maxPrice, 10);
          });
          res.json(filteredData);
        }
        else if(checkin && checkout && guests){
          const filteredData = e.filter((item) => {
            return (
              new Date(item.checkin) <= new Date(checkin) &&
              new Date(item.checkout) >= new Date(checkout) &&
              item.guest >= guests
            );
          });
    
          res.json(filteredData);
        }
        else if(minPrice && maxPrice && checkin && checkout && guests){
          const fd = e.filter((item) => {
            return (
              new Date(item.checkin) <= new Date(checkin) &&
              new Date(item.checkout) >= new Date(checkout) &&
              item.guest >= guests
            );
          });
          const filteredData = fd.filter((item) => {
            const cost = parseInt(item.cost.replace(/\D/g, ''), 10); 
            return cost >= parseInt(minPrice, 10) && cost <= parseInt(maxPrice, 10);
          });
          res.send(filteredData);
        }
        else{
          res.send(e);
        }
    
      } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
}
const londonBeachData=async (req,res)=>{
    try{
        const database = mongoose.connection.db; 
        const beach = database.collection('london_beach');
        const e = await beach.find({ reservation: false }).toArray();
        const { minPrice, maxPrice } = req.query;
         if (minPrice && maxPrice) {
           const filteredData = e.filter((item) => {
             const cost = parseInt(item.cost.replace(/\D/g, ''), 10); 
             return cost >= parseInt(minPrice, 10) && cost <= parseInt(maxPrice, 10);
           });
           res.json(filteredData);
         }
         else if(checkin && checkout && guests){
          const filteredData = e.filter((item) => {
            return (
              new Date(item.checkin) <= new Date(checkin) &&
              new Date(item.checkout) >= new Date(checkout) &&
              item.guest >= guests
            );
          });
    
          res.json(filteredData);
        }
        else if(minPrice && maxPrice && checkin && checkout && guests){
          const fd = e.filter((item) => {
            return (
              new Date(item.checkin) <= new Date(checkin) &&
              new Date(item.checkout) >= new Date(checkout) &&
              item.guest >= guests
            );
          });
          const filteredData = fd.filter((item) => {
            const cost = parseInt(item.cost.replace(/\D/g, ''), 10); 
            return cost >= parseInt(minPrice, 10) && cost <= parseInt(maxPrice, 10);
          });
          res.send(filteredData);
        }
         else{
          res.send(e);
        }
      }catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
}
const londonPoolData= async (req,res)=>{
    try{
        const database = mongoose.connection.db; 
        const pool=database.collection('london_pools');
        const e=await pool.find({ reservation: false }).toArray();
        const { minPrice, maxPrice } = req.query;
        if (minPrice && maxPrice) {
          const filteredData = e.filter((item) => {
            const cost = parseInt(item.cost.replace(/\D/g, ''), 10);
            return cost >= parseInt(minPrice, 10) && cost <= parseInt(maxPrice, 10);
          });
          res.json(filteredData);
        }
        else if(checkin && checkout && guests){
          const filteredData = e.filter((item) => {
            return (
              new Date(item.checkin) <= new Date(checkin) &&
              new Date(item.checkout) >= new Date(checkout) &&
              item.guest >= guests
            );
          });
    
          res.json(filteredData);
        }
        else if(minPrice && maxPrice && checkin && checkout && guests){
          const fd = e.filter((item) => {
            return (
              new Date(item.checkin) <= new Date(checkin) &&
              new Date(item.checkout) >= new Date(checkout) &&
              item.guest >= guests
            );
          });
          const filteredData = fd.filter((item) => {
            const cost = parseInt(item.cost.replace(/\D/g, ''), 10); 
            return cost >= parseInt(minPrice, 10) && cost <= parseInt(maxPrice, 10);
          });
          res.send(filteredData);
        }
        else{
          res.send(e);
        }
      }catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
}
const londonHotelsData= async (req,res) =>{
    try{
        const database = mongoose.connection.db; 
        const hotel=database.collection('london_hotels');
        const e=await hotel.find({ reservation: false }).toArray();
        const { minPrice, maxPrice } = req.query;
        if (minPrice && maxPrice) {
          const filteredData = e.filter((item) => {
            const cost = parseInt(item.cost.replace(/\D/g, ''), 10); 
            return cost >= parseInt(minPrice, 10) && cost <= parseInt(maxPrice, 10);
          });
          res.json(filteredData);
        }
        else if(checkin && checkout && guests){
          const filteredData = e.filter((item) => {
            return (
              new Date(item.checkin) <= new Date(checkin) &&
              new Date(item.checkout) >= new Date(checkout) &&
              item.guest >= guests
            );
          });
    
          res.json(filteredData);
        }
        else if(minPrice && maxPrice && checkin && checkout && guests){
          const fd = e.filter((item) => {
            return (
              new Date(item.checkin) <= new Date(checkin) &&
              new Date(item.checkout) >= new Date(checkout) &&
              item.guest >= guests
            );
          });
          const filteredData = fd.filter((item) => {
            const cost = parseInt(item.cost.replace(/\D/g, ''), 10); 
            return cost >= parseInt(minPrice, 10) && cost <= parseInt(maxPrice, 10);
          });
          res.send(filteredData);
        }
        else{
          res.send(e);
        }
      }catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
}
const reservation = async (req,res) =>{
    const {name} = req.body;
    try{
        const database = mongoose.connection.db;
        const hotel = database.collection('london_hotels');
        const beach = database.collection('london_beach');
        const pool=database.collection('london_pools');
        const result1 = await hotel.updateOne({ name:name }, { $set: { reservation: true } });
        const result2 = await beach.updateOne({ name:name }, { $set: { reservation: true } });
        const result3 = await pool.updateOne({ name:name }, { $set: { reservation: true } });
        if (result1.modifiedCount > 0 || result2.modifiedCount > 0 || result3.modifiedCount > 0) {
            res.status(200).json({ message: 'Reservation set to true successfully.' });
        } else {
            res.status(404).json({ message: 'Tour ID not found.' });
        }
    }
    catch(err){
        console.log("Reservation error",err);
    }
}
module.exports = {
    londondata,
    londonBeachData,
    londonPoolData,
    londonHotelsData,
    reservation,
};