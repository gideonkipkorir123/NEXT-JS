import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient({log:["query"]})
//create functions
async function main() {

}


main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })