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

export const createProduct = async (req,res) => {
  try{
    const productThumbnail = req.body.productThumbnail;
    const productTitle = req.body.productTitle;
    const productDescription = req.body.productDescription;
    const productCost = req.body.productCost;
    const onOffer = req.body.onOffer;

    const insert = await pool.query("INSERT INTO products(productThumbnail, productTitle, productDescription, productCost, onOffer) VALUES ($1,$2,$3,$4,$5)",[productThumbnail, productTitle, productDescription, productCost, onOffer],)

    if(insert.rowCount === 1){
      res.status(201).json({success:true, message:"Producted added successfully"})
    }
  }
  catch(err){
    res.status(500).json({success:false,message:err.message})
  }
}