
import { builder } from "../builder";



//define mutations that run in the whole project 
// Create a mutation type that wil take difffrent prisma fields 

  // Add a mutation type that will take difffrent muatations ,since mutationType can only be used once in the whole project i have decided to combine all those muattaions here(for user and link)
 builder.mutationType({
  fields: (t) => ({
    
    // Declare a new mutation field, `createUser`, which creates a new link for a user
    createUser: t.prismaField({
      type: 'User',
      // The mutation takes a `email`, `image`,'role'
      // They are correctly typed as string in `resolve`
      args: {
        email: t.arg.string({ required: true }),
        image: t.arg.string({ required: true }),
        //pass in link id of the link that you want to bookmark and include it as true as part of resolvers
        id: t.arg.string({ required: true})
        
      },
      resolve: async (query, _, args) =>
        // Create a user by taking in arguments and include bookmarks as part of resolvers
        prisma.user.create({ ...query,include:{bookmark:true}, data: { email:args.email,image:args.image,role:"ADMIN" ,bookmark:{connect:{id: args.id}}} }), 
      }),

      //delete a particular from the database
      deleteUser:t.prismaField({
      type:'User',
      args:{
        id:t.arg.string({required:true})
      },
      resolve:async (_parent,_,args)=>

       await prisma.user.delete({where:{id:args.id}}), 
       description:'Delete successfully'

    }),
    //this mutation allows one to change users email by passing in id as an argument and thus change email and image as data
     updateUser:t.prismaField({
      type:'User',
      args:{
        id:t.arg.string({required:true}),
        email: t.arg.string({ required: true }),
        image: t.arg.string({ required: true }),
      },
      resolve:async (_parent,_,args)=>
      //this has to await for sometime before being updated 
       await prisma.user.update({where:{id: args.id},data:{
        email: args.email,
        image: args.image
       }}),

       //MUTATIONS FOR CRUD LINK 
    }),
    createLink: t.prismaField({
      type: 'Link',

      // The mutation takes a `email`, `image`,'role'
      // They are correctly typed as string in `resolve`
      args: {
        title: t.arg.string({ required: true,  }),
        imageUrl: t.arg.string({ required: true }),
        description: t.arg.string({ required: true }),
        category: t.arg.string({ required: true }),
        url: t.arg.string({ required: true }),
        id:t.arg.string({ required: true }),
      },
      resolve: async (query, _, args,_ctx,_info) =>
        // Create a user by taking in arguments 
        await prisma.link.create({ ...query,include:{users:true}, data: {title:args.title, imageUrl:args.imageUrl, category: args.category, description:args.description, url: args.url, users:{connect:[{id: args.id }]}  }},) 
      }),
//this muatattion takes in only one agument which is an id of the link and this id is paased in as argument to be deeted from the database
       deleteLink:t.prismaField({
      type:'Link',
      args:{
        id:t.arg.string({required:true})
      },
      resolve:async (_parent,_,args)=>

       await prisma.link.delete({where:{id:args.id}}), 
       description:'Deleted successfully'

    }),
    
        

    }),
  
    
  })
