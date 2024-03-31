const User=require("../model/checkuser")

exports.signup=async(req,res)=>{
   try { 
       const{name,email,password,role}=req.body;

       const checkExistingUser=await User.findOne({email})
       if(checkExistingUser){
           return res.status(400).json({
               success:false,
               message:"already registered"
           })
       }
       const user=await User.create({name,email,password,role});
       return res.status(200).json({
           success:true,
           message:"user created"
       })
   } catch (error) {
       console.log("code fat gya pta ni kyu check auth.js");
       return res.status(500).json({
           success:false,
           message:"try again "
       })
   }
}

exports.login=async(req,res)=>{
   try { 
       const{email,password}=req.body;
       if(!email,!password){
           return res.status(400).json({
               status:false,
               message:"empty fields not accepted"
           })
       }


       const checkExistingUser=await User.findOne({email,password})
       if(!checkExistingUser){
           return res.status(400).json({
               success:false,
               message:"user not registered "
           })
       }
       return res.status(200).json({
           success:true,
           message:"Login Successfull "
       })
   } catch (error) {
       console.log("code fat gya pta ni kyu check auth.js");
       return res.status(500).json({
           success:false,
           message:"try again "
       })
   }
}