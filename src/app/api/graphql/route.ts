// Next.js Custom Route Handler: https://nextjs.org/docs/app/building-your-application/routing/router-handlers
import { createYoga } from 'graphql-yoga'
import { Schema } from '../../../../graphql/schema'
 
const { handleRequest } = createYoga({
  schema: Schema,fetchAPI:{Response},graphqlEndpoint:"/api/graphql",
  

  })
 

 
export { handleRequest as GET, handleRequest as POST }