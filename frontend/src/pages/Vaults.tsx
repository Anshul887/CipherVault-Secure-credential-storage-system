import {
 useEffect,
 useState
}
from "react";

import api
from "../api/axios";

export default function
Vaults(){

 const [vaults,
 setVaults]
 = useState([]);

 useEffect(()=>{

  api.get(
   "/vaults",
   {
    headers:{

     Authorization:
      `Bearer ${
      localStorage
      .getItem(
       "token"
      )
      }`
    }
   }
  )

  .then(res=>{

   setVaults(
    res.data
   );

  });

 },[]);

 return(

 <div>

 <h1
 className=
 "text-2xl font-bold mb-4">

  My Vaults

 </h1>

 {
 vaults.map(
 (vault:any)=>(
  <div
  key={vault.id}
  className=
  "border p-4 mb-2">

   {vault.name}

  </div>
 ))
 }

 </div>
 );
}
