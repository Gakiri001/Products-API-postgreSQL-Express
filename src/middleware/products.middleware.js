export const validateProduct = (req,res,next) => {
  const productThumbnail = req.body.productThumbnail;
  const productTitle = req.body.productTitle;
  const productDescription = req.body.productDescription;
  const productCost = req.body.productCost;
  const onOffer = req.body.onOffer;

  if(!productThumbnail){
    return res.status(400).json({success:false, message:"Product image is required"})
  }
  if(!productTitle){
    return res.status(400).json({success:false,message:"Product Title is required"})
  }
  if(!productDescription){
    return res.status(400).json({success:false, message:"Product Description is required"})
  }
  if(!productCost){
    return res.status(400).json({success:false,message:"Product Cost is required"})
  }
  if(!onOffer){
    return res.status(400).json({success:false,message:"Product onOffer is required"})
  }
  next()
}