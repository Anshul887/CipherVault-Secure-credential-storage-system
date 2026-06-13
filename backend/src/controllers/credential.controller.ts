POST   /api/credentials
GET    /api/credentials
GET    /api/credentials/:id
PUT    /api/credentials/:id
DELETE /api/credentials/:id
const credential =
 await CredentialService.create(
   req.body
 );

await AuditService.log(
 req.userId!,
 `Created credential`
);

return res
 .status(201)
 .json(credential);
const vault =
 await prisma.vault.findUnique({
   where:{
     id:vaultId
   }
 });

if(
 !vault ||
 vault.userId !== req.userId
){
 return res.status(403)
 .json({
   message:"Access denied"
 });
}
