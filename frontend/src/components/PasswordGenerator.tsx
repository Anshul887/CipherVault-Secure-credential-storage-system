export default function
PasswordGenerator(){

 const generate=()=>{

  const chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

  let password="";

  for(
   let i=0;
   i<16;
   i++
  ){

   password +=
   chars[
    Math.floor(
     Math.random()
     *
     chars.length
    )
   ];
  }

  alert(password);
 };

 return(

 <button
 onClick=
 {generate}

 className=
 "bg-green-500 text-white px-4 py-2">

 Generate Password

 </button>
 );
}
