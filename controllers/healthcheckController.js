


const Healthcheck=async (req,res)=>{
    return res
    .status(200).json({success:true,message:"Healthcheckroute is working"})
}

export {Healthcheck}