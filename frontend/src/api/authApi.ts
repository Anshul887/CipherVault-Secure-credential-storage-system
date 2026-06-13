import api from "./axios";

export const login =
(
 email:string,
 password:string
) => {

 return api.post(
   "/auth/login",
   {
     email,
     password
   }
 );
};

export const register =
(
 name:string,
 email:string,
 password:string
)=>{

 return api.post(
   "/auth/register",
   {
     name,
     email,
     password
   }
 );
};
