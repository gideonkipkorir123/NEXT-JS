
const PrismaTypes=require('@pothos/plugin-prisma/generated')
import prisma from "../lib/prisma";
import SchemaBuilder from '@pothos/core';
import PrismaPlugin from '@pothos/plugin-prisma';
import PrismaTypes from '../prisma/pothos-types';
import { DateResolver } from "graphql-scalars";
import RelayPlugin from '@pothos/plugin-relay';


export const builder = new SchemaBuilder<{
   Scalars: {
    Date: { Input: Date; Output: Date };
  },
  
  // 3. 
  PrismaTypes: PrismaTypes
}>({
  // 4.
  //add a plugin to facilitate pagings and filtering
  plugins: [PrismaPlugin, RelayPlugin],
  relayOptions:{},
  prisma: {
    client: prisma,
    
  },
  
  
})

builder.addScalarType("Date", DateResolver, {});

// 5. 
builder.queryType({
  fields: (t) => ({
    ok: t.boolean({
      resolve: () => true,
    }),
  }),
});



// Create a mutation type
// builder.mutationType({
//   fields: (t) => ({
//     ok: t.boolean({
//       resolve: () => true,
//     }),
//   }),
// });