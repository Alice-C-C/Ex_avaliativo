import express from "express"
import 'dotenv/config'
import Explorer from "./routers/explorer.js"
import Species from "./routers/species.js"
import Expedition  from "./routers/expedition.js"
const app = express()

app.use(express.json())
app.use('/explorer', Explorer)
app.use('/species', Species)
app.use('/expedition', Expedition)


app.listen(process.env.API_PORT, ()=>{
    console.log(`Server running port ${process.env.API_PORT}`);
})
