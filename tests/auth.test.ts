describe(
 "Auth",
 ()=>{

  it(
   "registers user",
   async ()=>{

    const res =
    await request(app)

    .post(
     "/api/auth/register"
    )

    .send({

      name:"John",

      email:
      "john@test.com",

      password:
      "Password123"
    });

    expect(
      res.status
    ).toBe(201);

   }
  );
 });
