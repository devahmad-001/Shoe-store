



let myexpress=require('express');

let myapp=myexpress();

myapp.use(myexpress.json());


let jsontoken=require('jsonwebtoken');

let userarray=[
    {
        email:"fa8377072@gmail.com",
        password:"123"

    }
];

myapp.post('/create-user',(req,res)=>{

    userarray.push(req.body)
  
});


myapp.get('/get-user',(req,res)=>{

    res.json(userarray);

});


myapp.post("/loginuser",(req,res)=>{

    let resultlogin=userarray.find(data=>data.email==req.body.email  && data.password==req.body.password)


    if(resultlogin){

        jsontoken.sign({email:resultlogin.email},"hello",{expiresIn:'2w'},function (error,token) {
   
            res.json({
                mytoken:token,
                resultlogin
            });
            
        })
    }
});

myapp.post("/local-storage",(req,res)=>{


    jsontoken.verify(req.body.Token,"hello",function (error,obj) {

        let user=userarray.find(data=>data.email==obj.email)

        res.json(user)
    })


});




myapp.delete('/delete-user',(req,res)=>{

    userarray.splice(req.query.key,1);

    res.json({

        success:true
    })

})

myapp.put('/user-update',(req,res)=>{

    let userupdate=userarray.findIndex(data=>data.email==req.body.email)

    if(userupdate!=-1){

        userarray[userupdate].password=req.body.password
    }
   
})




myapp.listen(4040,()=>{console.log("Code is chaling ");})









