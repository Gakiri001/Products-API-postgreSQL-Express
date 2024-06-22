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