import {graphql} from "graphql";
import User from "../models/users.js"

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
            //Code here to get the data from database or any other source  
            // return _.find(books,{id:args.id})
            // return Book.findById(args.id);
         }
      },
   }
}); 

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
         resolve(parent, args) {
            let user = new User({
                first_name: args.first_name,
                last_name: args.last_name,
                email: args.email,
                user_name: args.user_name,
                mobile_number: args.mobile_number,
                password: args.password,
                confirm_password: args.confirm_password,
               });
            return user.save();
         }
      }
   }
})

export default new GraphQLSchema({
   query: RootQuery,
   mutation: Mutation
})