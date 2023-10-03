
import { builder } from "../../builder";

builder.prismaObject('User',{
    
    fields:(t)=>({
        id:t.exposeID("id"),
        email:t.exposeString("email",{nullable:true}),
        image:t.exposeString("image",{nullable:true}),
        role:t.expose('role',{type:Role}),
        bookmark:t.relation('bookmark')
    })
})
const Role=builder.enumType("Role",{
    values:['USER','ADMIN'] as const
})
builder.queryField("users", (t) =>
// 2. 
  t.prismaField({
    // 3. 
    type: ['User'],
    // 4. 
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.user.findMany({ ...query })
  })
)

