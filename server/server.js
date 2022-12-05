import express from "express";
import { graphqlHTTP } from "express-graphql";
import "./dbConnection.js";
import cors from 'cors';
import schema from "./schema/schema.js";

const app = express();


app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true

}));

app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.listen(4000, () => {
    console.log("Server running on port 4000");
})