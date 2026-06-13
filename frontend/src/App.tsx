import {
 BrowserRouter,
 Routes,
 Route
}
from "react-router-dom";

import Login
from "./pages/Login";

import Vaults
from "./pages/Vaults";

import DashboardLayout
from "./layouts/DashboardLayout";

import ProtectedRoute
from "./routes/ProtectedRoute";

function App(){

 return(

 <BrowserRouter>

 <Routes>

 <Route
 path="/login"
 element={<Login/>}
 />

 <Route

 element={
 <ProtectedRoute>

 <DashboardLayout/>

 </ProtectedRoute>
 }

 >

 <Route
 path="/vaults"
 element={<Vaults/>}
 />

 </Route>

 </Routes>

 </BrowserRouter>
 );
}

export default App;
