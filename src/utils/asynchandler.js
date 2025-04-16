const asynchandler =(fun)=>async (req,res,next)=>{
    try {
        await fun(req,res,next)
    } catch (error) {
        res.status(error.code || 500).json({
            succes:false,
            message:"error aa gaya in function"&&error.message
        })
    }
}
export  {asynchandler}