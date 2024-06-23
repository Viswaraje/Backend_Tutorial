 const asyncHandler=(requestHandler)=>{

    (req,res,next)=>{
      Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))//fail
    }
 }


 export {asyncHandler}

 
//const asyncHadler=()=>{}
//const asyncHandler=(func)=>()=>{}
//const asyncHandler=(func)=>async()=>{}

//1st-Method
//from func in the parameter we are extracting req,res,next
//const asyncHandler=(fn)=>async(req,res,next)=>{

  //  try{
    //    await fn(req,res,next)

    //}catch(error)
    //{
      //     res.status(err.code||500).json({
        //    success:false,
           // message:err.message
         //  })

    //}
//}