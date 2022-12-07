import {graphql} from "graphql";
import User from "../models/users.js"
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import jwt_decode from "jwt-decode";

import {
   GraphQLObjectType,
   GraphQLString,
   GraphQLSchema,
   GraphQLID,
   GraphQLInt,
   GraphQLList,
   GraphQLNonNull
} from "graphql";

const UserType = new GraphQLObjectType({
   name:'User',
   fields:()=>({
    id:{type:GraphQLID},
    first_name:{type: GraphQLString},
    last_name: {type: GraphQLString},
    email : {type: GraphQLString},
    user_name: {type: GraphQLString},
    mobile_number : {type: GraphQLString},   
    password: {type: GraphQLString},
    confirm_password: {type: GraphQLString},
   })
});

const RootQuery = new GraphQLObjectType({
   name:'RootQueryType',
   fields:{
      user:{
         type:UserType,
         args:{id:{type:GraphQLID}},
         resolve(parent, args){
            
         }
      },
   }
}); 
const tokenSecret="2r5u7x!AjWnZr4u7QeThWmZ";

const generateToken = (user) => {
   return jwt.sign({data:user}, tokenSecret, {expiresIn: '24h'})
}

let token = "";

const Mutation = new GraphQLObjectType({
   name:"Mutation",
   fields:{ 
      addUser:{
         type: UserType,
         args:{
            first_name:{type: new GraphQLNonNull(GraphQLString)},
            last_name: {type: new GraphQLNonNull(GraphQLString)},
            email : {type: new GraphQLNonNull(GraphQLString)},
            user_name: {type: new GraphQLNonNull(GraphQLString)},
            mobile_number : {type: new GraphQLNonNull(GraphQLString)},
            password: {type: new GraphQLNonNull(GraphQLString)},
            confirm_password: {type: new GraphQLNonNull(GraphQLString)},
         },
         async resolve(parent, args) {
            let user = new User({
                first_name: args.first_name,
                last_name: args.last_name,
                email: args.email,
                user_name: args.user_name,
                mobile_number: args.mobile_number,
                password: await bcrypt.hash(args.password, 10),
                confirm_password: await bcrypt.hash(args.confirm_password, 10),
               });
            return user.save();
         }
      },
      loginUser:{
         type:UserType,
         args:{
            email : {type: new GraphQLNonNull(GraphQLString)},
            password: {type: new GraphQLNonNull(GraphQLString)},
         },
         async resolve(parent, args) {
            let email = args.email;
            let password = args.password;
            const user = await User.findOne({ email })
               if (!user) {
                  Error('No user found ')
               }
               else if(user){
                  bcrypt.compare(password, user.password, (error, match) => {
                     if (error) {
                        throw new Error();
                     }
                     else if(match){
                        token = generateToken(user);
                     }
                     else{
                        throw new Error();
                     }
                  })
               }
               var AuthenticatedUser ={
                  name:user.first_name + " " + user.last_name,
                  auth: true,
                  token : generateToken(user)
               }
               return AuthenticatedUser;
         }
      },
      googleLogin:{
         type:UserType,
         args:{
            token: {type: new GraphQLNonNull(GraphQLString)},
         },
         async resolve(parent, args) {
            const {token} = args.token
            var decode = jwt_decode(token);
            console.log(decode.token)
         }
      },
   }
})

export default new GraphQLSchema({
   query: RootQuery,
   mutation: Mutation
})