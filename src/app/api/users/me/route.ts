import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/usermodel";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";
connect();

export async function GET(request: NextRequest) {
//extract data from token
 const userId=await getDataFromToken(request)
const user= await User.findOne({ _id:userId }).select('-password');
if (!user) return new Response("User not found",{status:401});
return new Response(JSON.stringify(user));
}