import {
 Link
}
from "react-router-dom";

export default function
Sidebar(){

 return(

 <aside
 className=
 "w-64 bg-gray-900 text-white min-h-screen">

 <h1
 className=
 "p-4 text-xl font-bold">

 CipherVault

 </h1>

 <nav
 className=
 "flex flex-col">

 <Link
 to="/dashboard">

 Dashboard

 </Link>

 <Link
 to="/vaults">

 Vaults

 </Link>

 <Link
 to="/credentials">

 Credentials

 </Link>

 </nav>

 </aside>
 );
}
