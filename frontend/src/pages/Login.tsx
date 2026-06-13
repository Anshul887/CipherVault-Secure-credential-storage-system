import {
 useState
}
from "react";

import {
 login
}
from "../api/authApi";

export default function Login(){

 const [email,setEmail]
 = useState("");

 const [password,
 setPassword]
 = useState("");

 const submit =
 async ()=>{

  const res =
   await login(
    email,
    password
   );

  localStorage.setItem(
   "token",
   res.data.accessToken
  );
 };

 return(

 <div
 className=
 "h-screen flex items-center justify-center">

  <div
  className=
  "bg-white p-8 rounded shadow w-96">

   <h1
   className=
   "text-2xl font-bold mb-4">

    Login

   </h1>

   <input

   placeholder="Email"

   className=
   "border p-2 w-full mb-2"

   onChange={
   e=>
   setEmail(
    e.target.value
   )}

   />

   <input

   type="password"

   placeholder="Password"

   className=
   "border p-2 w-full mb-4"

   onChange={
   e=>
   setPassword(
    e.target.value
   )}

   />

   <button

   onClick={submit}

   className=
   "bg-blue-500 text-white p-2 w-full">

    Login

   </button>

  </div>

 </div>
 );
}
