import express from "express"
import productsrouter from "./route/products.route.js"

const app = express()
app.use(express.json());
app.use("/products", productsrouter)

// app.get("/",(req,res) => {
//   res.send("hello Gathee")
// })

app.listen(3000,() => {
  console.log("server on port 3000")
})