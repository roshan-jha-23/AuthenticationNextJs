import axios from "axios";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";


export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = React.useState({});
  const getUserDetail=async()=>{
    const res=await axios.post('/api/users/me')
    console.log(res.data);
    setData(res.data)
  }
  const logout=async()=>{
    try {
        await axios.get('/api/users/logout')
        toast.success("logout Done")
        router.push('/api/users/login')
        setData({})
    } catch (error:any) {
        console.log(error.message);
        toast.error(error.message)
        
    }
  }
  return( <div>
    <h1>Profile Page</h1>
    <br />
    <h2>User Information : </h2><br/><br/>
    
      Name : {data?.name}<br />
      Email : {data?.email}<br />
      
      <button onClick={getUserDetail}>Update User Info</button>
      <Link href="/changepassword">
          <a>Change Password</a>
      </Link>
      <br/><br/>
  </div>);
}
