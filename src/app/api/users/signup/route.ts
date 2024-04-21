import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/usermodel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import { sendEmail } from "@/helpers/mailer";
connect();

export async function POST(request:NextRequest) {
    try {
        const reqBody=await request.json();//ye rqBOdy proise hai
        const {username,email,password}=reqBody;
        //validation
        console.log(reqBody);

       const user= await User.findOne({email})
       if(user){
          return NextResponse.json({error:'User already exist'},{status:409});
       }
       const salt=await bcryptjs.genSalt(10);
       const hashedPassword=await bcryptjs.hash(password,salt);
       const newUser=new User({
        username,
        email,
        password:hashedPassword
       })
   const savedUser=await newUser.save()
   console.log(savedUser);
   //send verification email
   await sendEmail({email,emailType:"VERIFY",userId:savedUser._id})

   return NextResponse.json({
    message:"User Registeeerd Succesfully",
    success:true,
    savedUser
   })
        
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}
