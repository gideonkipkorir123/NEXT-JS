/* eslint-disable */
import type { Prisma, User, Link } from "@prisma/client";
export default interface PrismaTypes {
    User: {
        Name: "User";
        Shape: User;
        Include: Prisma.UserInclude;
        Select: Prisma.UserSelect;
        OrderBy: Prisma.UserOrderByWithRelationInput;
        WhereUnique: Prisma.UserWhereUniqueInput;
        Where: Prisma.UserWhereInput;
        Create: {};
        Update: {};
        RelationName: "bookmark";
        ListRelations: "bookmark";
        Relations: {
            bookmark: {
                Shape: Link[];
                Name: "Link";
            };
        };
    };
    Link: {
        Name: "Link";
        Shape: Link;
        Include: Prisma.LinkInclude;
        Select: Prisma.LinkSelect;
        OrderBy: Prisma.LinkOrderByWithRelationInput;
        WhereUnique: Prisma.LinkWhereUniqueInput;
        Where: Prisma.LinkWhereInput;
        Create: {};
        Update: {};
        RelationName: "users";
        ListRelations: "users";
        Relations: {
            users: {
                Shape: User[];
                Name: "User";
            };
        };
    };
}