import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const users = await prisma.user.findMany({})
    console.log(users);

    const user = await prisma.user.findUnique({
        where:{
            id:1
        },
       
    })
    console.log("unique"+ user?.email + user?.id + user?.name)

    
}


main()
.then(async ()=>{
    console.log("done get query")
    await prisma.$disconnect();
})
.catch(async(e)=>{
    console.log(e);
    await prisma.$disconnect();
})