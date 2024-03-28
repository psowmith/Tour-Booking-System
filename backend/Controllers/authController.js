const User=require('../Models/User')
const mongoose=require('../Config/Db');
const register=async (req,res)=>{
    const { username, email, password } = req.body;
    try {
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
      }
  
      const newUser = new User({ username, email, password });
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
}
const login= async (req,res)=>{
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username, password });
      if (user) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
}
module.exports = {
    login,
    register,
};