import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function main(){
    await prisma.user.update({
        where:{
            id:1
        },
        data:{
            name:"updated one"
        }
    })
}

main()
.then(async()=>{
    console.log("done with the updation")
    await prisma.$disconnect();
})
.catch(async(e)=>{
    console.log(e)
    await prisma.$disconnect();
})