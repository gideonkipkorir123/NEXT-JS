// /graphql/types/Link.ts
import { builder } from "../../builder";



builder.prismaObject("Link",{
    name:"Link",
    fields:(t)=>({
        id:t.exposeID('id'),
        title:t.exposeString('title'),
        url:t.exposeString('url'),
        description:t.exposeString('description'),
        imageUrl:t.exposeString('imageUrl'),
        category:t.exposeString('category'),
         createdAt: t.expose("createdAt", {type: "Date",
    }),
     updatedAt: t.expose("updatedAt", {
      type: "Date",
    }),
        users:t.relation('users'),

        
    })
})
builder.queryField('links', (t) =>
  t.prismaConnection({
    type: 'Link',
    cursor: 'id',
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.link.findMany({ ...query })
  })
)