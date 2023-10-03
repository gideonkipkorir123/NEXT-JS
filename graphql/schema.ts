// graphql/schema.ts
import "./types/Link/fetchAllLinks"
import './types/User/fetchAllUsers'
import './types/CRUD'

import { builder } from "./builder";

export const Schema = builder.toSchema()