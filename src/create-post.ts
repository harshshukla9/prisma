import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main()
{
    await prisma.post.create({
        data:{
            title:"this is new",
            content:"may be wmpty this one",
            author:{
                connect:{
                    id:1
                }
            }

        }
    })
}


main()
.then(async ()=> {
    console.log("done with the query");
    await prisma.$disconnect();
})
.catch(async (e)=>{
    console.log(e)
    await prisma.$disconnect()
    process.exit(1);
})