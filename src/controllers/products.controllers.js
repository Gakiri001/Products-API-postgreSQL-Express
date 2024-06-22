import pool from "../db.config.js";

export const getALLProducts = async(req,res) => {
  try{
    const result =  await pool.query("SELECT * FROM products")
    res.status(200).json({success:true, data:result.rows})
  }
  catch(err){
    res.status(500).json({success:false,message:err.message})
  }
}

export const getSingleProduct = async (req,res) => {
  const id = req.params.id
  try{
    const result = await pool.query("SELECT * FROM products WHERE id=$1",[id,])
    if(result.rowCount===1){
      res.status(200).json({success:true, data:result.rows[0]})
    }
    else{
      res.status(400).json({success:false,message:"Product not found"})
    }
  }
    catch(err){
      res.status(500).json({success:false, message:err.message})
    }
}